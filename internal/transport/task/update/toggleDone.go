package update

import (
	"awesomeProject/internal/db"
	"awesomeProject/internal/services/Task"
	"awesomeProject/models"
	"context"
	"encoding/json"
	"fmt"
	"go.mongodb.org/mongo-driver/mongo"
	"net/http"
)

func ToggleStatus(w http.ResponseWriter, r *http.Request) {
	connection := db.Connect()
	err := r.ParseForm()
	if err != nil {
		fmt.Fprintf(w, fmt.Sprintf("%v", err))
		return
	}
	email := r.Form.Get("email")
	name := r.Form.Get("name")
	var updatedTask *models.Task

	updatedTask, err = Task.ToggleTaskStatus(connection, email, name)
	if err != nil {
		fmt.Fprintf(w, fmt.Sprintf("%v", err))
		return
	}
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusCreated)
	json.NewEncoder(w).Encode(updatedTask)
	defer func(connection *mongo.Client, ctx context.Context) {
		err := connection.Disconnect(ctx)
		if err != nil {

		}
	}(connection, context.Background())
}
