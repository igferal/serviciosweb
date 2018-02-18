package com.uniovi.web.services.client.conf;

public enum ClientEnum {

	MARVEL("Marvel");

	private String tag;

	ClientEnum(String tag) {
		this.tag = tag;
	}

	public String getTag() {
		return tag;
	}
}
