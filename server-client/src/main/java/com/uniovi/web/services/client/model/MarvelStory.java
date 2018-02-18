package com.uniovi.web.services.client.model;

public class MarvelStory implements IProxyModel {

	private String title;

	public MarvelStory(String title) {
		this.title = title;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getDescription() {
		return this.getTitle();
	}
}
