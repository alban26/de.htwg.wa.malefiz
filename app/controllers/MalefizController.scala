package controllers

import akka.pattern.StatusReply.ErrorMessage

import javax.inject._
import play.api._
import play.api.mvc._
import de.htwg.se.malefiz.Malefiz
import de.htwg.se.malefiz.Malefiz.controller
import de.htwg.se.malefiz.aview.Tui
import de.htwg.se.malefiz.controller.controllerComponent
import de.htwg.se.malefiz.controller.controllerComponent.{ControllerInterface, Statements}
import de.htwg.se.malefiz.model.gameBoardComponent.GameBoardInterface
import de.htwg.se.malefiz.model.gameBoardComponent.gameBoardBaseImpl.Point
import de.htwg.se.malefiz.model.playerComponent.Player
import play.api.libs.json.{JsNumber, JsValue, Json, Writes}
import play.api._
import play.api.mvc._
import de.htwg.se.malefiz.controller.controllerComponent.Statements
import de.htwg.se.malefiz.controller.controllerComponent.StatementRequest
import play.api.libs.json.JsNull.as
import play.api.libs.json.{JsValue, Json}

import scala.util.{Failure, Success}

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


  def processFormDataJson: Action[JsValue] = Action(parse.json) {
    request: Request[JsValue] => {
      val input = (request.body \ "data").as[String]
      println(input)
      //gameController.execute(input)
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

  def newGamePOST: Action[AnyContent] = Action { request =>
    val postVals = request.body.asFormUrlEncoded
    postVals.map { args =>
      val player_1 = args("player_1").head
      val player_2 = args("player_2").head
      val player_3 = args("player_3").head
      val player_4 = args("player_4").head
      val pList = List(player_1, player_2, player_3, player_4)

      val players = pList.filter(p => p != "")

      players.foreach(player => gameController.execute("n " + player))
      gameController.execute("n start")

      Ok(views.html.gameboard(controller = gameController))
    }.getOrElse(Ok("Ups da ist etwas schiefgelaufen :/"))

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
