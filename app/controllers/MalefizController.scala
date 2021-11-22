package controllers

import javax.inject._
import de.htwg.se.malefiz.Malefiz
import de.htwg.se.malefiz.controller.controllerComponent
import de.htwg.se.malefiz.controller.controllerComponent.{ControllerInterface, Statements}
import de.htwg.se.malefiz.model.gameBoardComponent.GameBoardInterface
import de.htwg.se.malefiz.model.gameBoardComponent.gameBoardBaseImpl.Point
import de.htwg.se.malefiz.model.playerComponent.Player
import play.api.libs.json.{JsError, JsNumber, JsSuccess, JsValue, Json, Reads, Writes}
import play.api.mvc._
import de.htwg.se.malefiz.controller.controllerComponent.Statements
import de.htwg.se.malefiz.controller.controllerComponent.StatementRequest

case class FormData(player_1: String, player_2: String, player_3: String, player_4: String)

/**
 * This controller creates an `Action` to handle HTTP requests to the
 * application's home page.
 */
@Singleton
class MalefizController @Inject()(val controllerComponents: ControllerComponents) extends BaseController {

  val gameController: ControllerInterface = Malefiz.controller
  val gameBoard: GameBoardInterface = gameController.getGameBoard
  val statementStatus: String = Statements.value(StatementRequest(gameController))


  def malefizAsText: String =
    gameController.gameBoardToString +
      gameController.getPlayer.mkString("\n") + "\n" +
      Statements.value(controllerComponent.StatementRequest(gameController))


  implicit val formDataReads: Reads[FormData] = Json.reads[FormData]

  def processFormJson: Action[AnyContent] = Action { implicit request =>
    request.body.asJson.map { body =>
      Json.fromJson[FormData](body) match {
        case JsSuccess(playerData, path) =>
          val pList = List(playerData.player_1, playerData.player_2, playerData.player_3, playerData.player_4)
          val players = pList.filter(p => p != "")

          players.foreach(player => gameController.execute("n " + player))
          gameController.execute("n start")

          Ok(views.html.gameboard(controller = gameController))
        case e@JsError(_) =>
          Redirect("/")
      }
      Ok(Json.toJson(""))
    }.getOrElse(Redirect("/"))
  }

  /**
   * Create an Action to render an HTML page.
   *
   * The configuration in the `routes` file means that this method
   * will be called when the application receives a `GET` request with
   * a path of `/`.
   */
  def about: Action[AnyContent] = Action { implicit request: Request[AnyContent] =>
    Ok(views.html.index())
  }

  def malefiz: Action[AnyContent] = Action {
    Ok(views.html.malefiz())
  }

  def processCMD(cmd: String): Action[AnyContent] = Action {
    gameController.execute(cmd)
    Ok(views.html.gameboard(controller = gameController))
  }


  def processJson: Action[JsValue] = Action(parse.json) {
    request: Request[JsValue] => {
      val input = (request.body \ "data").as[String]
      gameController.execute(input)
      Ok(Json.obj(
        "players" -> Json.toJson(
          for {
            p <- gameController.getGameBoard.getPlayer
          } yield Json.toJson(p)
        ),
        "statement" -> statementStatus,
        "playersTurn" -> gameController.getPlayersTurn,
        "diceNumber" -> gameController.getDicedNumber,
        "gameState" -> gameController.getGameState.state.toString,
        "possibleCells" -> gameController.getGameBoard.getPossibleCells,
        "cells" -> Json.toJson(
          for {
            c <- gameController.getGameBoard.getCellList
          } yield {
            Json.obj(
              "cellNumber" -> c.cellNumber,
              "playerNumber" -> c.playerNumber,
              "figureNumber" -> c.figureNumber,
              "hasWall" -> c.hasWall,
              "coordinates" -> c.coordinates
            )
          }
        )
      ))
    }
  }

  def newGameGET: Action[AnyContent] = Action {
    Ok(views.html.gameboard(controller = gameController))
  }

  def gameRules: Action[AnyContent] = Action {
    Ok(views.html.gamerules())
  }

  def test: Action[AnyContent] = Action {
    Ok(views.html.gameboard(controller = gameController))
  }

  implicit val pointWrites: Writes[Point] = (point: Point) => {
    Json.obj(
      "x" -> JsNumber(point.x_coordinate),
      "y" -> JsNumber(point.y_coordinate)
    )
  }

  implicit val playerWrites: Writes[Player] = (player: Player) => {
    Json.obj(
      "playerNumber" -> player.playerNumber,
      "name" -> player.name
    )
  }

  def controllerToJson: Action[AnyContent] = Action {
    Ok(Json.obj(
      "players" -> Json.toJson(
        for {
          p <- gameController.getGameBoard.getPlayer
        } yield Json.toJson(p)
      ),
      "statement" -> Statements.value(StatementRequest(gameController)),
      "playersTurn" -> gameController.getPlayersTurn,
      "diceNumber" -> gameController.getDicedNumber,
      "gameState" -> gameController.getGameState.state.toString,
      "possibleCells" -> gameController.getGameBoard.getPossibleCells,
      "cells" -> Json.toJson(
        for {
          c <- gameController.getGameBoard.getCellList
        } yield {
          Json.obj(
            "cellNumber" -> c.cellNumber,
            "playerNumber" -> c.playerNumber,
            "figureNumber" -> c.figureNumber,
            "hasWall" -> c.hasWall,
            "coordinates" -> c.coordinates,
            "possibleCell" -> c.possibleCells
          )
        }
      )
    ))
  }

}
