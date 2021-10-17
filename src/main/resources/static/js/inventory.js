function fetchData(){
	//fetching products on page load
	$.ajax({
	    url: '/store/products',
	    type: 'GET',
	    dataType: "json",
	    success: function(data) {
	    	//console.log(data);
			
			let list = ''
			
	    	data.forEach((product)=>{
				//console.log(product)
				list = list + `
					<div class="productBody">
						<div class="imgContainer">
							<img src=${product.imgUrl} class="img"/>
						</div>
						<div class="productDetailsContainer">
							<h3>${product.productName}</h3>
							<p>Price : &#8377; ${product.price}</p>
							<p>Quantity: ${product.quantity}</p>
						</div>
						<div class="productActionLeft">
							<button type="button" class="update btn btn-primary" id=${product.productId}>Update</button>
						</div>
						<div class="productActionRight">
							<button type="button" class="remove btn btn-danger" id=${product.productId}>Remove</button>
						</div>
						
					</div>			
				`
			})
			
			const listBody = document.querySelector(".itemsList")
			if(listBody){
				listBody.innerHTML = list
			}
			
			//remove click event
			$(".remove").on("click", function(){
			  console.log("removing")
			  console.log(this.getAttribute("id"))
			  deleteProduct(this.getAttribute("id"))
			});
			
			$(".update").on("click", function(){
			  console.log("updating")
			  console.log(this.getAttribute("id"))
			  const id = this.getAttribute("id");
			  window.location.replace(`/updateInventory.html?id=${id}`)
			});
	    }
	});
}

function restoreData(){
	console.log("restoring the previous data")
	
	const products = [
    {
        "productId": 1,
        "productName": "Apple pro",
        "imgUrl": "https://i.pcmag.com/imagery/reviews/02pPlSC851BxRP4BFdufSBJ-1..1605566017.jpg",
        "price": 198000.0,
        "quantity": 10
    },
    {
        "productId": 2,
        "productName": "Iphone 13",
        "imgUrl": "https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F609fbdb429b049fa8139ca1b%2FApple--iPhone-13--iPhone-13-Pro--iPhone-13-Pro-Max--new-iPhone--iPhone-13-release%2F960x0.jpg%3Ffit%3Dscale",
        "price": 88000.0,
        "quantity": 5
    },
    {
        "productId": 3,
        "productName": "Dell",
        "imgUrl": "https://m.media-amazon.com/images/I/614nqnc5jDL._SL1010_.jpg",
        "price": 125000.0,
        "quantity": 20
    },
    {
        "productId": 4,
        "productName": "Samsung notepad",
        "imgUrl": "https://cdn57.androidauthority.net/wp-content/uploads/2021/01/Samsung-Galaxy-S21-Ultra-vs-Samsung-Galaxy-Note-20-Ultra-1-scaled.jpg",
        "price": 60000.0,
        "quantity": 30
    },
    {
        "productId": 5,
        "productName": "Apple air",
        "imgUrl": "https://www.apple.com/newsroom/images/tile-images/Apple_new-macbook-air-wallpaper-screen_03182020.jpg.news_app_ed.jpg",
        "price": 75000.0,
        "quantity": 4
    },
]
	
	$.ajax({
	    url: '/store/products',
	    type: 'GET',
	    dataType: "json",
	    success: function(data) {
		
	    	products.forEach(product => {
				
				let flag = true
				data.forEach(item => {
					if(item.productId == product.productId){
						flag = false;
						
					}
				})
				
				if(flag){
					addProduct(product)
				}
			})
			
			
	   }
	})
}

$(document).ready(function(){
  	fetchData()
  	
  	$(".restore").on("click", function(){
	
		restoreData()
	})
});

function deleteProduct(id){
	$.ajax({
	    url: `/store/deleteProduct/${id}`,
	    type: 'DELETE',
	    dataType: "json",
	    success: function(data) {
	    	
	    	fetchData()
		}
	})			
}

function addProduct(data){
	$.ajax({
	    url: `/store/addProduct`,
	    type: 'POST',
	    dataType: "json",
	    data: JSON.stringify(data),
        contentType: "application/json; charset=utf-8",
	    success: function(data) {
	    	console.log("data uploaded..")
	    	fetchData()
	    	
		}
	})	
}