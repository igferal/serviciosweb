package com.uniovi.web.services.client.conf;

import java.util.EnumMap;

import com.uniovi.web.services.client.proxy.Proxy;
import com.uniovi.web.services.client.proxy.impl.MarvelProxyImpl;

public class ClientManager {

	private static ClientManager INSTANCE;

	private EnumMap<ClientEnum, Proxy> clients;

	private ClientManager() {

		clients = new EnumMap<ClientEnum, Proxy>(ClientEnum.class);
		clients.put(ClientEnum.MARVEL, new MarvelProxyImpl());
	}

	public static ClientManager getInstance() {
		if (null == INSTANCE) {
			INSTANCE = new ClientManager();
		}
		return INSTANCE;
	}

	public Proxy getClientProxy(ClientEnum ce) {

		return clients.get(ce);
	}
}
