package models

import (
	"time"
	//"go.mongodb.org/mongo-driver/bson"
)

type Task struct {
	ID        string    `bson:"_id,omitempty"`
	Name      string    `bson:"name"`
	Status    bool      `bson:"status"`
	CreatedAt time.Time `bson:"createdAt"`
	Email     string    `bson:"email"`
}
