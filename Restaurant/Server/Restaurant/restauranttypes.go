package main

import (
	"Restaurant/app"
	"github.com/goadesign/goa"
	"Restaurant/Repository"
)

// RestauranttypesController implements the restauranttypes resource.
type RestauranttypesController struct {
	*goa.Controller
}

// NewRestauranttypesController creates a restauranttypes controller.
func NewRestauranttypesController(service *goa.Service) *RestauranttypesController {
	return &RestauranttypesController{Controller: service.NewController("RestauranttypesController")}
}

// Create runs the create action.
func (c *RestauranttypesController) Create(ctx *app.CreateRestauranttypesContext) error {
	if RestaurantTypeRepository.Add(app.Restauranttype{ctx.Payload.ID, ctx.Payload.Name,}){
		return ctx.Created()
	}
	ctx.ResponseData.WriteHeader(301)
	return nil
}


func (c *RestauranttypesController) Update(ctx *app.UpdateRestauranttypesContext) error {
	if RestaurantTypeRepository.Update(app.Restauranttype{ctx.Payload.ID, ctx.Payload.Name,}){
		return ctx.OK([]byte("ok"))
	}
	return ctx.NotFound()
}

// Delete runs the delete action.
func (c *RestauranttypesController) Delete(ctx *app.DeleteRestauranttypesContext) error {
	_,err := RestaurantTypeRepository.Get(ctx.ID)
	if err!=nil{
		return ctx.NotFound()
	}
	if RestaurantTypeRepository.Delete(ctx.ID){
		return ctx.OK([]byte("ok"))
	}
	return nil
}

// List runs the list action.
func (c *RestauranttypesController) List(ctx *app.ListRestauranttypesContext) error {
	return ctx.OK(RestaurantTypeRepository.List())
}

// Show runs the show action.
func (c *RestauranttypesController) Get(ctx *app.GetRestauranttypesContext) error {
	ret,err :=RestaurantTypeRepository.Get(ctx.ID)
	if err!=nil{
		return ctx.NotFound()
	}
	return ctx.OK(&ret)
}
