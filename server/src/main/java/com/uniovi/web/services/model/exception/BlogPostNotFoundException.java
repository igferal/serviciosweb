package com.uniovi.web.services.model.exception;

/**
 * Exception thrown when a user email is already in use
 * 
 * @author Victor
 *
 */
public class BlogPostNotFoundException extends Exception {

	/**
	 * 
	 */
	private static final long serialVersionUID = 162878936759747635L;

	public BlogPostNotFoundException() {
		super();
	}

	public BlogPostNotFoundException(String message, Throwable cause) {
		super(message, cause);
	}

	public BlogPostNotFoundException(String message) {
		super(message);
	}

	public BlogPostNotFoundException(Throwable cause) {
		super(cause);
	}

}
