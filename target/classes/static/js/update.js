let imgUrl = ""

function fetchData(id){
	//fetching products on page load
	$.ajax({
	    url: `/store/products/${id}`,
	    type: 'GET',
	    dataType: "json",
	    success: function(data) {
	    	console.log(data)
	    	
	    	let productNameHolder = document.querySelector("#productName")
	    	let productPriceHolder = document.querySelector("#productPrice")
	    	let productQuantityHolder = document.querySelector("#productQuantity")
	    	
			productNameHolder.value = data.productName
			productPriceHolder.value = data.price
			productQuantityHolder.value = data.quantity
			imgUrl = data.imgUrl
	    }
	});
}

$(document).ready(function(){
  	console.log(window.location.href.split("=")[1]);
  	let id = window.location.href.split("=")[1]
  	if(id)  {
		fetchData(id)
		
	}	
	else{
		window.location.replace("/inventory.html")
	}
	
	$(".submit").on("click", function(){
		console.log("submit")
		
		let productNameHolder = document.querySelector("#productName")
	    let productPriceHolder = document.querySelector("#productPrice")
	    let productQuantityHolder = document.querySelector("#productQuantity")
	    
	    const reg = new RegExp('^[0-9]+$');
	  
	    if(productNameHolder.value == ""){
			alert("product name cannot be empty!")
			return;
		}
		
		if(productPriceHolder.value == ""){
			alert("product price cannot be empty!")
			return;
		}
		else if(!reg.test(productPriceHolder.value)){
			alert("product price must be only numbers! (positive number)")
		}
		
		if(productQuantityHolder.value == ""){
			alert("product quantity cannot be empty!")
			return;
		}else if(!reg.test(productQuantityHolder.value)){
			alert("product quantity must be only numbers! (positive number)")
		}
			
		console.log("submitting data")
		console.log(productNameHolder.value)
		console.log(productPriceHolder.value)	
		console.log(productQuantityHolder.value)
		
		updateProduct(id, {
			"productId": id,
		    "productName": productNameHolder.value,
		    "imgUrl": imgUrl,
		    "price": productPriceHolder.value,
		    "quantity": productQuantityHolder.value
		})
	})
});


function updateProduct(id, data){
	$.ajax({
	    url: `/store/updateProduct/${id}`,
	    type: 'PUT',
	    dataType: "json",
	    data: JSON.stringify(data),
        contentType: "application/json; charset=utf-8",
	    success: function(data) {
	    	console.log("data updated..")
	    	window.location.replace("/inventory.html")
		}
	})	
}