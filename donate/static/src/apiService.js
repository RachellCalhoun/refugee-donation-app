angular.module("refugeeapp")
    .factory("apiSvc", function($http, $cookies){
        function http(config){
            config.headers ={"X-CSRFToken":$cookies.get("csrftoken")}
            return $http(config)
        }
        function get(resourceName, params){
            var queryString = "";
            for (var k in params){
                if (params.hasOwnProperty(k)){
                    queryString += "&" + k + "=" + params[k]
                }
            }
            return http({
                method:"get",
                url: "/api/"+resourceName+"/?format=json" + queryString
            })
        }
        function getSchema(resourceName){
            return $http.get("/api/"+resourceName+"/schema/?format=json").then(function(response){
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
            return http({
                method:"post",
                url: "/api/"+resourceName+"/?format=json",
                data: data
            })
        }
        function put(resourceName, data){
            return  $http.put("/api/"+resourceName, data)
        }
        function multipartpost(resourceName, data){
            return $http({
                        url: "/api/"+resourceName+"/?format=json",
                        data: data,
                        method: 'POST',
                        transformRequest: angular.identity,
                        headers : {'Content-Type': undefined}
                    })
        }
        function remove(resourceName, resourceId){
            return $http.delete("/api/" +  resourceName+"/"+ resourceId + "/?format=json")
        }
        return {
            get:get,
            getSchema:getSchema,
            post:post,
            put:put,
            remove:remove,
            multipartpost: multipartpost,
        }
    })
