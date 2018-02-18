package com.uniovi.web.services.client.proxy.impl;

import javax.ws.rs.core.MediaType;

import com.sun.jersey.api.client.Client;
import com.sun.jersey.api.client.ClientResponse;
import com.sun.jersey.api.client.WebResource;
import com.uniovi.web.services.client.proxy.Proxy;

public class MarvelProxyImpl implements Proxy {

	private final static String apiUrl = "http://gateway.marvel.com:80/v1/public/stories";
	private final static String params = "?ts=1518952410&hash=5b08ad4da5ae7a6f635a1e5b8c49877b&apikey=92a527be8c0c9c893a06b36011a5602b";

	public ClientResponse getData() {
		Client client = Client.create();
		WebResource webResource = client.resource(apiUrl + params);
		ClientResponse response = webResource.type(MediaType.APPLICATION_JSON)
				.get(ClientResponse.class);
		return response;
	}

}
