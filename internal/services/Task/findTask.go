package Task

import (
	"awesomeProject/models"
	"context"
	"errors"
	"fmt"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
)

func FindTasks(client *mongo.Client, clerkId string) ([]models.Task, error) {
	filter := bson.M{
		"clerk_id": clerkId,
	}
	var results []models.Task

	cursor, err := client.Database("taskit").Collection("tasks").Find(context.Background(), filter)
	if err != nil {
		if errors.Is(err, mongo.ErrNoDocuments) {
			return nil, nil
		}
		return nil, fmt.Errorf("error finding task by email: %w", err)
	}

	for cursor.Next(context.Background()) {
		var task models.Task
		err := cursor.Decode(&task) // Decode document into a User struct
		if err != nil {
			fmt.Println("Error decoding document:", err)
			continue
		}
		fmt.Println(task)

		results = append(results, task)
	}

	return results, nil
}
