package com.storeServer.storeServer.services;

import java.util.ArrayList;

import org.springframework.stereotype.Service;

import com.storeServer.storeServer.entities.ElectronicItem;

@Service
public class StoreServiceImpl implements StoreService {

	static ArrayList<ElectronicItem> items = new ArrayList<ElectronicItem>();
	
	static {
		items.add(new ElectronicItem(1, "Apple pro", "https://i.pcmag.com/imagery/reviews/02pPlSC851BxRP4BFdufSBJ-1..1605566017.jpg", 198000, 10));
		items.add(new ElectronicItem(2, "Iphone 13", "https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F609fbdb429b049fa8139ca1b%2FApple--iPhone-13--iPhone-13-Pro--iPhone-13-Pro-Max--new-iPhone--iPhone-13-release%2F960x0.jpg%3Ffit%3Dscale", 88000, 5));
		items.add(new ElectronicItem(3, "Dell", "https://m.media-amazon.com/images/I/614nqnc5jDL._SL1010_.jpg", 125000, 20));
		items.add(new ElectronicItem(4, "Samsung notepad", "https://cdn57.androidauthority.net/wp-content/uploads/2021/01/Samsung-Galaxy-S21-Ultra-vs-Samsung-Galaxy-Note-20-Ultra-1-scaled.jpg", 60000, 30));
		items.add(new ElectronicItem(5, "Apple air", "https://www.apple.com/newsroom/images/tile-images/Apple_new-macbook-air-wallpaper-screen_03182020.jpg.news_app_ed.jpg", 75000, 4));
		
	}
	
	@Override
	public ArrayList<ElectronicItem> getAllProducts() {
		return items;
	}

	@Override
	public ElectronicItem getProduct(int productId) {
		
		ElectronicItem item = null;
		
		for(ElectronicItem eItem : items) {
			if(eItem.getProductId() == productId) {
				item = eItem;
				break;
			}
		}
		
		return item;
	}

	@Override
	public ElectronicItem addElectronicItem(ElectronicItem item) {
		
		items.add(item);
		
		return item;
	}

	@Override
	public ElectronicItem deleteElectronicItem(int productId) {
		
		ArrayList<ElectronicItem> tempList = new ArrayList<ElectronicItem>();
		ElectronicItem deletedItem = null;
		
		for(ElectronicItem eItem : items) {
			if(eItem.getProductId() == productId) {
				deletedItem = eItem;	
			}
			else {
				tempList.add(eItem);
			}
		}
		
		items = tempList;
		
		return deletedItem;
	}

	@Override
	public ElectronicItem updateElectronicItem(ElectronicItem item, int productId) {
		
		ElectronicItem updateItem = null;
		
		for(ElectronicItem eItem : items) {
			if(eItem.getProductId() == productId) {
				eItem.setProductName(item.getProductName());
				eItem.setImgUrl(item.getImgUrl());
				eItem.setPrice(item.getPrice());
				eItem.setQuantity(item.getQuantity());
				updateItem = eItem;
			}
		}
		
		return updateItem;		
	}
	
}
