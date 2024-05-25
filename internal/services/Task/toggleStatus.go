package Task

import (
	"awesomeProject/models"
	"context"
	"fmt"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
)

func ToggleTaskStatus(client *mongo.Client, email string, name string) (*models.Task, error) {
	filter := bson.M{"email": email, "name": name}

	var result models.Task

	err := client.Database("ticket").Collection("tasks").FindOne(context.Background(), filter).Decode(&result)
	if err != nil {
		return nil, err
	}
	result.Status = !result.Status
	update := bson.D{{Key: "$set", Value: bson.M{"status": result.Status}}}
	fmt.Println(result)
	var updateRes *mongo.UpdateResult
	updateRes, err = client.Database("ticket").Collection("tasks").UpdateOne(context.Background(), filter, update)

	//err := client.Database("ticket").Collection("tasks").FindOneAndUpdate(context.Background(), filter, update).Decode(&result)
	if err != nil {
		return nil, fmt.Errorf("error finding updating task: %w", err)
	}
	fmt.Println(updateRes)
	fmt.Println(result)
	return &result, nil
}
