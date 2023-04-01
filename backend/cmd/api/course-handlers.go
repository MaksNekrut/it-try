package main

import (
	"errors"
	"net/http"
	"strconv"

	"github.com/julienschmidt/httprouter"
)

func (app *application) getOneCourse(w http.ResponseWriter, r *http.Request) {
	params := httprouter.ParamsFromContext(r.Context())
	id, err := strconv.Atoi(params.ByName("id"))
	if err != nil {
		app.logger.Print(errors.New("invalid id parameter"))
		app.errorJSON(w, err)
		return
	}
	app.logger.Println("id is", id)
	course, err := app.models.DB.Get(id)
	app.writeJSON(w, http.StatusOK, course, "course")
}

func (app *application) getAllCourses(w http.ResponseWriter, r *http.Request) {
	courses, err := app.models.DB.All()
	if err != nil {
		app.errorJSON(w, err)
		return
	}
	app.writeJSON(w, http.StatusOK, courses, "courses")
}
