package main

import (
	"net/http"

	"github.com/julienschmidt/httprouter"
)

func (app *application) routes() http.Handler {
	router := httprouter.New()
	router.HandlerFunc(http.MethodGet, "/status", app.statusHandler)
	router.HandlerFunc(http.MethodGet, "/v1/course/:id", app.getOneCourse)
	router.HandlerFunc(http.MethodGet, "/v1/courses", app.getAllCourses)
	return app.enebleCors(router)
}
