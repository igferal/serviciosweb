package com.uniovi.web.services.ws.auth.model;

import org.apache.commons.lang3.StringUtils;

public class UserContext {

	private final String email;

	private UserContext(String email) {
		this.email = email;
	}

	public static UserContext create(String email) {
		if (StringUtils.isBlank(email)) {
			throw new IllegalArgumentException("Username is blank: " + email);
		}
		return new UserContext(email);
	}

	public String getEmail() {
		return email;
	}
}
