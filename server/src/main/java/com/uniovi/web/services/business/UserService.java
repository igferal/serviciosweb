package com.uniovi.web.services.business;

import java.util.Set;

import com.uniovi.web.services.model.User;
import com.uniovi.web.services.model.exception.BusinessException;
import com.uniovi.web.services.model.exception.UserAlreadyExistsException;
import com.uniovi.web.services.model.exception.UserNotFoundException;

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
	 * @throws BusinessException
	 */
	User authenticate(String email, String password);

	/**
	 * Finds users by criteria
	 * 
	 * @param criteria
	 * @return
	 */
	Set<User> get(User criteria);

	/**
	 * Saves a new user
	 * 
	 * @param user
	 * @throws UserAlreadyExistsException
	 */
	void save(User user) throws UserAlreadyExistsException;

	/**
	 * Updates an existing user
	 * 
	 * @param user
	 * @return
	 * @throws UserNotFoundException
	 */
	User update(User user) throws UserNotFoundException;
}
