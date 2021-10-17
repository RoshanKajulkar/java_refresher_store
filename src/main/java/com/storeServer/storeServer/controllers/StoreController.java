package com.storeServer.storeServer.controllers;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.storeServer.storeServer.entities.ElectronicItem;
import com.storeServer.storeServer.services.StoreService;

@RestController
public class StoreController {

	@Autowired
	private StoreService storeService;
	
	//http://localhost:8080/store/products
	@GetMapping("/store/products")
	public ArrayList<ElectronicItem> getAllProducts() {
		return this.storeService.getAllProducts();
	}
	
	//http://localhost:8080/store/products/1
	@GetMapping("/store/products/{productId}")
	public ElectronicItem getProduct(@PathVariable int productId) {
		return this.storeService.getProduct(productId);
	}
	
	//http://localhost:8080/store/addProduct
	@PostMapping("/store/addProduct")
	public ElectronicItem addProduct(@RequestBody ElectronicItem item) {
		return this.storeService.addElectronicItem(item);
	}
	
	//http://localhost:8080/store/deleteProduct/1
	@DeleteMapping("/store/deleteProduct/{productId}")
	public ElectronicItem deleteProduct(@PathVariable int productId) {
		return this.storeService.deleteElectronicItem(productId);
	}
	
	//http://localhost:8080/store/updateProduct/1
	@PutMapping("/store/updateProduct/{productId}")
	public ElectronicItem deleteProduct(@RequestBody ElectronicItem item, @PathVariable int productId) {
		return this.storeService.updateElectronicItem(item, productId);
	}
}
