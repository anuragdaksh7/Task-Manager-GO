package Task

import (
	"awesomeProject/internal/db/Task"
	"awesomeProject/models"
	"errors"
	"fmt"
	"go.mongodb.org/mongo-driver/mongo"
	"log"
	"time"
)

func CreateTask(connection *mongo.Client, name string, email string) error {

	existingUser, err := FindTaskByEmailAndName(connection, email, name)
	if err != nil && !errors.Is(err, mongo.ErrNoDocuments) {
		return err
	}
	if existingUser != nil {
		log.Println(fmt.Sprintf("task %s already exists for this user:%v", name, email))
		return errors.New(fmt.Sprintf("task %s already exists for this user:%v", name, email))
	}

	newTask := models.Task{
		Name:      name,
		CreatedAt: time.Now(),
		Status:    false,
		Email:     email,
	}
	err = Task.CreateTask(connection, newTask, "ticket", "tasks")
	if err != nil {
		log.Fatal(err)
		return err
	}
	log.Printf("Task created %v \n", newTask)
	return nil
}
