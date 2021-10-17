
$(document).ready(function(){
	
	$(".submit").on("click", function(){
		console.log("submit")
		
		let productNameHolder = document.querySelector("#productName")
	    let productPriceHolder = document.querySelector("#productPrice")
	    let productQuantityHolder = document.querySelector("#productQuantity")
	    let productIdHolder = document.querySelector("#productId")
	    let productUrlHolder = document.querySelector("#productUrl")
	    
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
			return;
		}
		
		if(productQuantityHolder.value == ""){
			alert("product quantity cannot be empty!")
			return;
		}else if(!reg.test(productQuantityHolder.value)){
			alert("product quantity must be only numbers! (positive number)")
			return;
		}
		
		if(productIdHolder.value == ""){
			alert("product id cannot be empty!")
			return;
		}else if(!reg.test(productIdHolder.value)){
			alert("product id must be only numbers! (positive number)")
			return;
		}
		
		if(productUrlHolder.value == ""){
			alert("product image url cannot be empty!")
			return;
		}
			
		console.log("submitting data")
		console.log(productNameHolder.value)
		console.log(productPriceHolder.value)	
		console.log(productQuantityHolder.value)
		console.log(productIdHolder.value)
		console.log(productUrlHolder.value)
		
		addProduct({
			"productId": productIdHolder.value,
		    "productName": productNameHolder.value,
		    "imgUrl": productUrlHolder.value,
		    "price": productPriceHolder.value,
		    "quantity": productQuantityHolder.value
		})
	})
});

function addProduct(data){
	$.ajax({
	    url: `/store/addProduct`,
	    type: 'POST',
	    dataType: "json",
	    data: JSON.stringify(data),
        contentType: "application/json; charset=utf-8",
	    success: function(data) {
	    	console.log("data uploaded..")
	    	window.location.replace("/inventory.html")
		}
	})	
}