package com.storeServer.storeServer.services;

import java.util.ArrayList;

import com.storeServer.storeServer.entities.ElectronicItem;

public interface StoreService {
	public ArrayList<ElectronicItem> getAllProducts();
	
	public ElectronicItem getProduct(int productId);
	
	public ElectronicItem addElectronicItem(ElectronicItem item);
	
	public ElectronicItem deleteElectronicItem(int productId);
	
	public ElectronicItem updateElectronicItem(ElectronicItem item, int productId);
}
