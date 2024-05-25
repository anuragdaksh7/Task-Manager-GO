package Task

import (
	"awesomeProject/models"
	"context"
	"errors"
	"fmt"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
)

func FindTaskByEmailAndName(client *mongo.Client, email string, name string) (*models.Task, error) {
	filter := bson.M{"email": email, "name": name}
	var result models.Task

	err := client.Database("ticket").Collection("tasks").FindOne(context.Background(), filter).Decode(&result)
	if err != nil {
		if errors.Is(err, mongo.ErrNoDocuments) {
			return nil, nil
		}
		return nil, fmt.Errorf("error finding task by email: %w", err)
	}

	return &result, nil
}
