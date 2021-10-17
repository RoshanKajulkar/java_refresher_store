package com.storeServer.storeServer;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.RestController;

@Controller
@SpringBootApplication
public class StoreServerApplication {

	public static void main(String[] args) {
		SpringApplication.run(StoreServerApplication.class, args);
		System.out.println("Server running on port 8080..");
	}
	
	@GetMapping("/")
	public String home() {
		return "index.html";
	}
	
	@GetMapping("/inventory")
	public String inventory() {
		return "inventory.html";
	}

}
