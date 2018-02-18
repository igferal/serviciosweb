package com.uniovi.web.services.client;

import com.sun.jersey.api.client.ClientResponse;
import com.uniovi.web.services.client.conf.ClientEnum;
import com.uniovi.web.services.client.conf.ClientManager;
import com.uniovi.web.services.client.conf.ParserFactory;
import com.uniovi.web.services.client.model.IProxyModel;
import com.uniovi.web.services.client.model.exception.ProxyException;
import com.uniovi.web.services.client.proxy.Proxy;

public class MarvelEndPoint {

	public static IProxyModel getAllStories() throws ProxyException {

		ClientManager mngr = ClientManager.getInstance();
		Proxy proxy = mngr.getClientProxy(ClientEnum.MARVEL);
		ClientResponse resp = proxy.getData();
		try {
			return ParserFactory.getMarvelResponseParser().parseResponse(resp);
		} catch (Exception e) {
			throw new ProxyException("Error procesando los datos del endpoint");
		}
	}
}
