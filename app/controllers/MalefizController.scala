package controllers

import javax.inject._
import play.api._
import play.api.mvc._
import de.htwg.se.malefiz.Malefiz
import de.htwg.se.malefiz.aview.Tui
import de.htwg.se.malefiz.controller.controllerComponent
import de.htwg.se.malefiz.controller.controllerComponent.{ControllerInterface, Statements}

/**
 * This controller creates an `Action` to handle HTTP requests to the
 * application's home page.
 */
@Singleton
class MalefizController @Inject()(val controllerComponents: ControllerComponents) extends BaseController {

  val gameController: ControllerInterface = Malefiz.controller

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

  def gameRules = Action {
    Ok(views.html.gamerules())
  }

  def test = Action {
    Ok(views.html.test())
  }


}
