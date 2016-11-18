angular.module("refugeeapp")
    .factory("apiSvc", function($http){
        function get(resourceName){
            return $http.get("/api/v1/"+resourceName+"/?format=json")
        }
        function getSchema(resourceName){
            return $http.get("/api/v1/"+resourceName+"/schema/?format=json").then(function(response){
                var fields = {}
                var schema  = response.data;
                for(var k in schema.fields){
                    if (schema.fields.hasOwnProperty(k)){
                        if (schema.fields[k].choices) {
                            fields[k] = {
                                choices: schema.fields[k].choices.map(function (item){
                                    return item[0];
                                }),
                                default: schema.fields[k].default
                            };
                        }
                    }
                }
                return fields;
            })
        }
        function post(resourceName, data){
            return  $http.post("/api/v1/"+resourceName+"/?format=json", data)
        }
        return {
            get:get,
            getSchema:getSchema,
            post:post,
        }
    })
