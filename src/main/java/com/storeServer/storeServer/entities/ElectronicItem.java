package com.storeServer.storeServer.entities;

public class ElectronicItem {
	private int productId;
	private String productName;
	private String imgUrl;
	private double price;
	private int quantity;
	
	public ElectronicItem(int productId, String productName, String imgUrl, double price, int quantity) {
		super();
		this.productId = productId;
		this.productName = productName;
		this.imgUrl = imgUrl;
		this.price = price;
		this.quantity = quantity;
	}
	
	public int getQuantity() {
		return quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}

	@Override
	public String toString() {
		return "ElectronicItem [productId=" + productId + ", productName=" + productName + ", imgUrl=" + imgUrl
				+ ", price=" + price + "]";
	}

	public int getProductId() {
		return productId;
	}
	public void setProductId(int productId) {
		this.productId = productId;
	}
	public String getProductName() {
		return productName;
	}
	public void setProductName(String productName) {
		this.productName = productName;
	}
	public String getImgUrl() {
		return imgUrl;
	}
	public void setImgUrl(String imgUrl) {
		this.imgUrl = imgUrl;
	}
	public double getPrice() {
		return price;
	}
	public void setPrice(double price) {
		this.price = price;
	}
	
	
}
