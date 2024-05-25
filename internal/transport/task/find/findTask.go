package find

import (
	"awesomeProject/internal/db"
	"awesomeProject/internal/services/Task"
	"awesomeProject/models"
	"encoding/json"
	"fmt"
	"net/http"
)

func FindTaskByEmailController(w http.ResponseWriter, r *http.Request) {
	connection := db.Connect()
	err := r.ParseForm()
	if err != nil {
		fmt.Fprintf(w, fmt.Sprintf("%v", err))
		return
	}

	email := r.Form.Get("email")

	var tasks []models.Task

	tasks, err = Task.FindTasks(connection, email)
	if err != nil {
		fmt.Fprintf(w, fmt.Sprintf("%v", err))
		return
	}
	//fmt.Fprintf(w, fmt.Sprintf("%v", tasks))
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusCreated)
	json.NewEncoder(w).Encode(tasks)
}
