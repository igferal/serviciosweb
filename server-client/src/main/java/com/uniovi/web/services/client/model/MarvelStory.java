package com.uniovi.web.services.client.model;

public class MarvelStory implements IProxyModel {

	private String data;

	private String title;

	public MarvelStory(String title, String data) {
		this.data = data;
		this.title = title;
	}

	public String getData() {
		return data;
	}

	public void setData(String data) {
		this.data = data;
	}

	public String getDescription() {
		return this.getData();
	}

	public String getTitle() {
		return this.title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

}
