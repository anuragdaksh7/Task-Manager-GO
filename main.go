package main

import (
	"awesomeProject/internal/db"
	"awesomeProject/internal/db/Task"
	"awesomeProject/models"
	"log"
	"time"
	//"awesomeProject/db/repository"
)

func main() {
	connection := db.Connect()

	//repository.Fetch(connection, "users", "ticket")
	newTask := models.Task{
		Name:      "hello",
		CreatedAt: time.Now(),
	}
	err := Task.CreateTask(connection, newTask, "ticket", "tasks")
	if err != nil {
		log.Fatal(err)
	}
}
