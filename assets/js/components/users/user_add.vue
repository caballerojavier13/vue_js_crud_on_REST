<template>
    <h1>Add new User</h1> 
    	<span style="color:red" v-show="invalidName" ><i>Name cannot be blank!</i></span><br>
    	User name: <input type="text" v-model="user.name" placeholder="enter user's name" >
		<button v-on:click="addUser()">Save</button> <br><br>
		<a v-link="{path: '/users'}">click</a> to go back to user's list!
</template>

<script>
module.exports = {
	//props:{
//		users: Object
//	},
	data: function(){
		return {
			user: {},
			invalidName: false
		}
	},
	methods:{
		addUser: function() {
			if(this.user.name == "" || !this.user.hasOwnProperty("name") ){
				this.invalidName = true
				return
			}
			this.$http({url: 'http://localhost:8000/api/v1/person/', method:"POST", data: this.user }).then(function(response){
				this.$router.go('/users')
			}, function(response){
				console.log("Something went wrong")
				console.log(response)
			})
		}
	}
}
</script>