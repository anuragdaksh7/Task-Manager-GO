package repository

import (
	"go.mongodb.org/mongo-driver/mongo"
	"log"
)

func Fetch(client *mongo.Client, collection string, db string) *mongo.Collection {
	output := client.Database(db).Collection(collection)

	log.Printf("Output Fetched db=%s collection=%s", db, collection)
	return output
}
