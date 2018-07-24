//go:generate goagen bootstrap -d Restaurant/design

package main

import (
	"github.com/goadesign/goa"
	"github.com/goadesign/goa/middleware"
	"Restaurant/app"
)

func main() {
	// Create service
	service := goa.New("RestaurantType")

	// Mount middleware
	service.Use(middleware.RequestID())
	service.Use(middleware.LogRequest(true))
	service.Use(middleware.ErrorHandler(service, true))
	service.Use(middleware.Recover())

	// Start service
	c := NewRestauranttypesController(service)
	app.MountRestauranttypesController(service, c)


	if err := service.ListenAndServe(":8080"); err != nil {
		service.LogError("startup", "err", err)
	}
}