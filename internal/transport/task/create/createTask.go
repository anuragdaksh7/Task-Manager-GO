package create

import (
	"awesomeProject/internal/db"
	"awesomeProject/internal/services/Task"
	"fmt"
	"net/http"
)

func NewTaskController(w http.ResponseWriter, r *http.Request) {
	connection := db.Connect()
	err := r.ParseForm()
	if err != nil {
		fmt.Fprintf(w, fmt.Sprintf("%v", err))
		return
	}

	name := r.Form.Get("name")
	email := r.Form.Get("email")

	err = Task.CreateTask(connection, name, email)
	if err != nil {
		fmt.Fprintf(w, fmt.Sprintf("%v", err))
		return
	}
	fmt.Fprintf(w, fmt.Sprintf("%v", name))
}
