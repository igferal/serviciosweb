package com.uniovi.web.services.ws.soap.exception;

import javax.xml.ws.WebFault;

/**
 * Exception thrown when a creator is wrong
 * 
 * @author Victor
 *
 */
@WebFault(name = "CreatorNotFound")
public class CreatorNotFoundException extends Exception {

	/**
	 * 
	 */
	private static final long serialVersionUID = -7520660630409228292L;

	public CreatorNotFoundException() {
		super();
	}

	public CreatorNotFoundException(String message, Throwable cause) {
		super(message, cause);
	}

	public CreatorNotFoundException(String message) {
		super(message);
	}

	public CreatorNotFoundException(Throwable cause) {
		super(cause);
	}

}
