package main

import (
	"awesomeProject/internal/transport/task/create"
	"awesomeProject/internal/transport/task/find"
	"awesomeProject/internal/transport/task/update"
	"fmt"
	"github.com/gorilla/mux"
	"log"
	"net/http"
)

const portNum string = ":8080"

func Home(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "HomePage")
}

func Info(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "InfoPage")
}

func main() {
	r := mux.NewRouter()
	r.HandleFunc("/", Home).Methods("GET")
	r.HandleFunc("/info", Info).Methods("POST")
	r.HandleFunc("/get-task", find.FindTaskByEmailController).Methods("POST")
	r.HandleFunc("/create-task", create.NewTaskController).Methods("POST")
	r.HandleFunc("/update-task", update.ToggleStatus).Methods("POST")
	fmt.Println("To close connection Ctrl+C")

	log.Println("Server started on port", portNum)
	log.Fatal(http.ListenAndServe(portNum, r))
}
