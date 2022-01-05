name := """de.htwg.wa.malefiz"""
organization := "com.example"

version := "1.0-SNAPSHOT"

herokuAppName in Compile := "malefiz-at-htwg"
herokuJdkVersion in Compile := "15"

lazy val root = (project in file(".")).enablePlugins(PlayScala)

scalaVersion := "2.13.1"

libraryDependencies += guice
libraryDependencies += "org.scalatestplus.play" %% "scalatestplus-play" % "5.0.0" % Test
libraryDependencies += "com.fasterxml.jackson.module" %% "jackson-module-scala" % "2.13.0-rc2"



// Adds additional packages into Twirl
//TwirlKeys.templateImports += "com.example.controllers._"

// Adds additional packages into conf/routes
// play.sbt.routes.RoutesKeys.routesImport += "com.example.binders._"
