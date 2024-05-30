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
	//err := r.ParseForm()
	//if err != nil {
	//	fmt.Fprintf(w, fmt.Sprintf("%v", err))
	//	return
	//}
	//
	//userId := r.Form.Get("userId")
	//fmt.Println(userId)
	decoder := json.NewDecoder(r.Body)
	//fmt.Println(decoder)
	var requestBody struct {
		UserId string `json:"userId"` // Expect email in request body
	}
	err := decoder.Decode(&requestBody)
	fmt.Println(requestBody.UserId)
	var tasks []models.Task

	tasks, err = Task.FindTasks(connection, requestBody.UserId)
	if err != nil {
		fmt.Fprintf(w, fmt.Sprintf("%v", err))
		return
	}
	//fmt.Fprintf(w, fmt.Sprintf("%v", tasks))
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusCreated)
	json.NewEncoder(w).Encode(tasks)
}
