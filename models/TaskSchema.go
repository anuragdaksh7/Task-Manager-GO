package models

import (
	"go.mongodb.org/mongo-driver/bson/primitive"
	"time"
)

type Task struct {
	ID           primitive.ObjectID   `bson:"_id,omitempty"` // Field for storing MongoDB ObjectID
	Title        string               `bson:"title"`         // Task title (required, trimmed)
	Description  string               `bson:"description"`   // Task description (trimmed)
	DueDate      time.Time            `bson:"dueDate"`       // Due date (required)
	Priority     string               `bson:"priority"`      // Task priority (required)
	Category     string               `bson:"category"`      // Task category (required)
	CreatedBy    primitive.ObjectID   `bson:"createdBy"`     // Reference to the user who created the task (ObjectId from 'users' collection)
	Dependencies []primitive.ObjectID `bson:"dependencies"`  // Array of ObjectIds referencing dependent tasks
	Labels       []string             `bson:"labels"`        // Array of strings representing task labels
	CreatedAt    time.Time            `bson:"createdAt"`     // Creation timestamp (required, default: current time)
	UpdatedAt    time.Time            `bson:"updatedAt"`     // Update timestamp (required, default: current time)
}
