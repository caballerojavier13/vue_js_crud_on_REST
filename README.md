# README #
Basic CRUD on a REST resource "Person"

"Person" has only one attribute "name" for now.

Api for person looks like:

list: api/v1/person (allows GET and POST)

    GET:
    {
      "meta": {
        "limit": 20,
        "next": null,
        "offset": 0,
        "previous": null,
        "total_count": 7
      },
      "objects": [
        {
          "id": 73,
          "name": "Kevin",
          "resource_uri": "/api/v1/person/73/"
        },
        {
          "id": 76,
          "name": "Josh",
          "resource_uri": "/api/v1/person/76/"
        },
        {
          "id": 77,
          "name": "Foo",
          "resource_uri": "/api/v1/person/77/"
        },
        {
          "id": 64,
          "name": "Bar",
          "resource_uri": "/api/v1/person/64/"
        }
      ]
    }
    
    POST:
    {
	"name": "New Name"
    }
    
    
    detail: api/v1/person/1 (allows GET, PUT and DELETE)
    
    GET:
    {
	"id": 73,
	"name": "Deepak2",
	"resource_uri": "/api/v1/person/73/"
    }

    PUT:
    {
	"name": "Updated name"
    }


Have this api setup in any backed framework you prefer.
Tastypie looks good :)
Once you have the backend setup done. Complete the setup:

* Clone and run following commands:
>> npm install
>> gulp

Start a server inside static folder and you can perform CRUD on person resource.

Later more resources with more attributes will be added along with some styling!