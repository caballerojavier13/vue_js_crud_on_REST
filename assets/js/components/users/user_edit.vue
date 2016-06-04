<template>
    <h1>User details of {{user.name}}</h1> 
    	<input type="text" v-model="user.name">
    	<button v-on:click="updateUser()">update</button>
    	<br><br>
    	<a v-link="{path: '/users/add'}">click</a> to add new user! <br>
    	<a v-link="{path: '/users'}">click</a> to go back to user's list!
</template>

<script>
module.exports = {
	//props:{
//		users: Object
//	},
	data: function(){
		return {
			user: {}
		}
	},
	created: function(){
		this.getUser(this.$route.params.user_id);
	},
	methods:{
		updateUser: function() {
			this.$http({url: 'http://localhost:8000/api/v1/person/' + this.user.id + '/', method:"PUT", data: this.user}).then(function(response){
					this.$router.go('/users')
			}, function(response){
				console.log("Something went wrong")
				console.log(response)
			})
		},
		getUser: function(id){
			this.$http.get({url: 'http://localhost:8000/api/v1/person/'+id}).then(function(response){
			this.user = response.data
		}, function(response){
				console.log(response)
				console.log("error!")
			});	
		}
	}
}
</script>