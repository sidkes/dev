package RestaurantTypeRepository
import (
	"Restaurant/app"
	"gopkg.in/couchbase/gocb.v1"
)



func List() app.RestauranttypeCollection{
	var Store = []*app.Restauranttype{}
	bucket, _ := GetCluster().OpenBucket("UBookBucket", "")
	query := gocb.NewN1qlQuery("select g.* , meta(g).id from UBookBucket g where g.type='ResturantType';")
	rows, _ := bucket.ExecuteN1qlQuery(query, nil)
	var row app.Restauranttype
	for rows.Next(&row) {
		Store = append(Store, &app.Restauranttype{
			ID:   row.ID,
			Name: row.Name,
		})
	}
	return Store
}

func Get(id string) (app.Restauranttype, error){
	var err error
	bucket, _ := GetCluster().OpenBucket("UBookBucket", "")
	query := gocb.NewN1qlQuery("select g.* , meta(g).id from UBookBucket g where g.type='ResturantType' AND meta(g).id = $1")
	var n1qlParams []interface{}
	n1qlParams = append(n1qlParams, id)
	rows, err := bucket.ExecuteN1qlQuery(query, n1qlParams)
	var row app.Restauranttype
	rows.One(&row)
	return app.Restauranttype{
		ID:   row.ID,
		Name: row.Name,
	},err
}

func Add(restauranttype app.Restauranttype) bool{
	bucket, _ := GetCluster().OpenBucket("UBookBucket", "")
	//id := guid.New96()
	var n1qlParams []interface{}
	query := gocb.NewN1qlQuery("INSERT INTO UBookBucket (KEY , VALUE) VALUES ($1,{'name': $2, 'type': 'ResturantType'});")
	//n1qlParams = append(n1qlParams, []interface{}{hex.EncodeToString(id.Bytes()), restauranttype.Name})
	n1qlParams = append(n1qlParams, restauranttype.ID)
	n1qlParams = append(n1qlParams, restauranttype.Name)
	_, err := bucket.ExecuteN1qlQuery(query, n1qlParams)
	if err!=nil{
		return false
	}
	return true
}

func Update(restauranttype app.Restauranttype) bool{
	bucket, _ := GetCluster().OpenBucket("UBookBucket", "")
	var n1qlParams []interface{}
	query := gocb.NewN1qlQuery("UPDATE UBookBucket USE KEYS $1 SET name= $2")
	n1qlParams = append(n1qlParams, restauranttype.ID)
	n1qlParams = append(n1qlParams, restauranttype.Name)
	_, err := bucket.ExecuteN1qlQuery(query, n1qlParams)
	if err!=nil{
		return false
	}
	return true
}
//DELETE FROM `restful-sample` AS person WHERE META(person).id = $1
func Delete(id string) bool{
	bucket, _ := GetCluster().OpenBucket("UBookBucket", "")
	var n1qlParams []interface{}
	query := gocb.NewN1qlQuery("DELETE FROM UBookBucket WHERE META(UBookBucket).id = $1")
	n1qlParams = append(n1qlParams, id)
	_, err := bucket.ExecuteN1qlQuery(query, n1qlParams)
	if err!=nil{
		return false
	}
	return true
}

func GetCluster() (*gocb.Cluster) {
	cluster, _ := gocb.Connect("couchbase://localhost")
	cluster.Authenticate(gocb.PasswordAuthenticator{
		Username: "Administrator",
		Password: "admin@1234",
	})
	return cluster
}
