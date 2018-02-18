package com.uniovi.web.services.client;

import java.util.List;

import com.sun.jersey.api.client.ClientResponse;
import com.uniovi.web.services.client.conf.ClientEnum;
import com.uniovi.web.services.client.conf.ClientManager;
import com.uniovi.web.services.client.conf.ParserFactory;
import com.uniovi.web.services.client.model.IProxyModel;
import com.uniovi.web.services.client.model.exception.ParserException;
import com.uniovi.web.services.client.proxy.Proxy;

public class MarvelEndPoint {

	public static List<IProxyModel> getAllStories() throws ParserException {

		ClientManager mngr = ClientManager.getInstance();
		Proxy proxy = mngr.getClientProxy(ClientEnum.MARVEL);
		ClientResponse resp = proxy.getData();
		try {
			return ParserFactory.getMarvelResponseParser().parseResponse(resp);
		} catch (Exception e) {
			throw new ParserException(
					"Error procesando los datos del endpoint");
		}
	}
}
