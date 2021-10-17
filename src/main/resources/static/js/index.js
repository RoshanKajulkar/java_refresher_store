$(document).ready(function(){
	
	$(".submit").on("click", function(){
		console.log("login..")
		
		let username = document.querySelector("#useremail")
	    let password = document.querySelector("#password")
	    
	    if(username.value == ""){
			alert("usernmae required*")
			return;
		}
		
		if(password.value == ""){
			alert("password required*")
			return;
		}
		
		if(username.value == "admin@gmail.com" && password.value == "admin"){
			window.location.replace("/inventory.html")
		}	
		else{
			alert("Please use below credentials for demo\n useremail : admin@gmail.com \n password : admin")
		}
	})
});