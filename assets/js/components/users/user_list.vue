<template>
    <h1>List of users</h1> <a v-link="{path: '/users/add'}">click</a> to add new user!
    <ul>
    	<li v-for="user in users"> 
			<h4>{{user.name}} <button>edit</button> <button >delete</button> <h4>
    	</li>
    </ul>	
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
		this.$http({url: 'http://localhost:8000/api/v1/person', method:'GET'}).then(function(response){
			console.log(response)
			this.users = response.data.objects 
		}, function(response){
			console.log(response)
			console.log("error!")
		});	
	}
}
</script>