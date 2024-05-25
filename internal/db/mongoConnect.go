package db

import (
	"context"
	"github.com/joho/godotenv"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
	"log"
	"os"
)

func Connect() *mongo.Client {
	err := godotenv.Load(".env")
	if err != nil {
		log.Fatal("Error loading .env file")
	}

	MongoUri := os.Getenv("MONGO_URI")
	clientOptions := options.Client().ApplyURI(MongoUri)
	client, err := mongo.Connect(context.Background(), clientOptions)
	if err != nil {
		log.Fatal(err)
	}
	err = client.Ping(context.Background(), nil)
	if err != nil {
		log.Fatal(err)
	}

	log.Println("Connected to MongoDB!")
	return client
}

//func Connect_() *mongo.Collection {
//	err := godotenv.Load(".env")
//	if err != nil {
//		log.Fatal("Error loading .env file %s", err)
//	}
//
//	MONGO_URI := os.Getenv("MONGO_URI")
//
//	clientOptions := options.Client().ApplyURI(MONGO_URI)
//	client, err := mongo.Connect(context.Background(), clientOptions)
//	if err != nil {
//		log.Fatal(err)
//	}
//
//	err = client.Ping(context.Background(), nil)
//	if err != nil {
//		log.Fatal(err)
//	}
//
//	collection := client.Database("ticket").Collection("events")
//	if err != nil {
//		log.Fatal(err)
//	}
//
//	fmt.Println("Connected to db")
//	cursor, err := collection.Find(context.Background(), bson.D{{}})
//	if err != nil {
//		panic(err)
//	}
//	defer cursor.Close(context.Background())
//
//	for cursor.Next(context.Background()) {
//		var result bson.M
//		err := cursor.Decode(&result)
//		if err != nil {
//			fmt.Println("Error decoding document: ", err)
//			continue
//		}
//		fmt.Printf("Document %+v\n", result)
//	}
//	if err := cursor.Err(); err != nil {
//		fmt.Println("error integrating cursor: ", err)
//	}
//	return collection
//}
