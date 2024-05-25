package Task

import (
	"awesomeProject/models"
	"context"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
	"log"
)

func CreateTask(client *mongo.Client, task models.Task, database string, collection string) error {
	data, err := bson.Marshal(task)
	if err != nil {
		log.Fatal(err)
		return err
	}
	_, err = client.Database(database).Collection(collection).InsertOne(context.Background(), data)
	if err != nil {
		log.Fatal(err)
		return err
	}
	log.Println("User created successfully")
	return nil
}
