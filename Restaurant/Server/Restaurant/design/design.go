package design

import (
. "github.com/goadesign/goa/design"
. "github.com/goadesign/goa/design/apidsl"
)

var _ = API("RestaurantType", func() {
	Title("The RestaurantType API")
	Description("RestaurantType API with GOA")
	Host("localhost:8080")
	Scheme("http")
	Version("1.0")
	BasePath("/V1")
	Origin("*", func() {
		// Define CORS policy, may be prefixed with "*" wildcard
		Headers("*")           // One or more authorized headers, use "*" to authorize all
		Methods("GET", "POST", "PUT", "DELETE")               // One or more authorized HTTP methods
		Expose("X-Time")                     // One or more headers exposed to clients
		MaxAge(600)                          // How long to cache a preflight request response
		Credentials()                        // Sets Access-Control-Allow-Credentials header
	})
})

var RestaurantType = MediaType("Application/vnd.restauranttype+json",func(){
	Description("Restaurant Type")
	Attributes(func(){
		Attribute("id", String, "Restaurant Type Id")
		Attribute("name", String, "Restaurant Type Name")
		Required("id")
		Required("name")
	})

	View("default", func(){
		Attribute("id")
		Attribute("name")
	})
})

var _ = Resource("restauranttypes",func(){
	BasePath("/restauranttypes")
	Description("Manage Restaurant Types")

	Action("list", func(){
		Routing(GET("/"))
		Response("OK", CollectionOf(RestaurantType))
	})

	Action("get", func(){
		Routing(GET("/:id"))
		Params(func(){
			Param("id", String, "Restaurant Type Index")
		})
		Response("OK", RestaurantType)
		Response(NotFound)
	})

	Action("create", func(){
		Routing(POST("/"))
		Payload(RestaurantType)
		Response(Created)
	})

	Action("update", func(){
		Routing(PUT("/"))
		Payload(RestaurantType)
		Response(OK)
		Response(NotFound)
	})

	Action("delete", func(){
		Routing(DELETE("/:id"))
		Params(func(){
			Param("id", String, "Restaurant Type Index")
		})
		Response(OK)
		Response(NotFound)
	})
})
