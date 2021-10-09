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
  val gameTUI: Tui = Malefiz.tui
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
    Ok(malefizAsText)
  }

  def processCMD(cmd: String): Action[AnyContent] = Action {
    gameTUI.processInput(cmd)
    Ok(malefizAsText)
  }

}
