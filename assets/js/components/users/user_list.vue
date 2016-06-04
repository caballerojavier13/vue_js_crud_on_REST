<template>
    <h1>List of users</h1> 
    	<div v-for="user in users"> 
				<h4>{{user.id}}. {{user.name}} <a v-link="{path: 'users/edit/'+ user.id }">edit</a> <a href="javascript:void(0)" v-on:click="removeUser(user.id)">delete</a> <h4>
    	</div>
    	<a v-link="{path: '/users/add'}">click</a> to add new user!
</template>

<script>
module.exports = {
	//props:{
//		users: Object
//	},
	data: function(){
		return {
			users: []
		}
	},
	created: function(){
		this.getUsers();
	},
	methods:{
		removeUser: function(id) {
			this.$http({url: 'http://localhost:8000/api/v1/person/' + id + '/', method:"DELETE"}).then(function(response){
				this.getUsers();
			}, function(response){
				console.log("Something went wrong")
				console.log(response)
			})
		},
		getUsers: function(){
			this.$http.get({url: 'http://localhost:8000/api/v1/person'}).then(function(response){
			console.log(response)
			this.users = response.data.objects 
		}, function(response){
				console.log(response)
				console.log("error!")
			});	
		}
	}
}
</script>