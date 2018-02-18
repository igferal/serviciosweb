package com.uniovi.web.services.client.conf;

import com.uniovi.web.services.client.parser.ResponseParser;
import com.uniovi.web.services.client.parser.impl.MarvelResponseParser;

public class ParserFactory {

	public static ResponseParser getMarvelResponseParser() {
		return new MarvelResponseParser();
	}
}
