package com.uniovi.web.services.client.conf;

import com.uniovi.web.services.client.proxy.Proxy;
import com.uniovi.web.services.client.proxy.impl.MarvelProxyImpl;

public class ProxyFactory {

	public Proxy getHeathProxy() {
		return new MarvelProxyImpl();
	}

}
