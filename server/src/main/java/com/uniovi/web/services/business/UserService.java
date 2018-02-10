package com.uniovi.web.services.business;

import com.uniovi.web.services.model.User;

/**
 * Service for User entity
 * 
 * @author Victor
 *
 */
public interface UserService {

	/**
	 * Returns the user who match the email and password parameters
	 * 
	 * @param email
	 * @param password
	 * @return
	 */
	User authenticate(String email, String password);

	/**
	 * Finds a user by criteria
	 * 
	 * @param criteria
	 * @return
	 */
	User get(User criteria);

	/**
	 * Saves a new user
	 * 
	 * @param user
	 */
	void save(User user);

	/**
	 * Updates an existing user
	 * 
	 * @param user
	 * @return
	 */
	User update(User user);
}
