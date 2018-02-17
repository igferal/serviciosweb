package com.uniovi.web.services.ws.soap.exception;

import javax.xml.ws.WebFault;

/**
 * Exception thrown when a blogpost is not well formed
 * 
 * @author Victor
 *
 */
@WebFault(name = "InvalidBlogPost")
public class InvalidBlogPostException extends Exception {

	/**
	 * 
	 */
	private static final long serialVersionUID = 3405766906604906861L;

	public InvalidBlogPostException() {
		super();
	}

	public InvalidBlogPostException(String message, Throwable cause) {
		super(message, cause);
	}

	public InvalidBlogPostException(String message) {
		super(message);
	}

	public InvalidBlogPostException(Throwable cause) {
		super(cause);
	}

}
