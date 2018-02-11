package com.uniovi.web.services.business.impl;

import java.util.Set;

import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.uniovi.web.services.business.UserService;
import com.uniovi.web.services.model.User;
import com.uniovi.web.services.model.exception.UserAlreadyExistsException;
import com.uniovi.web.services.model.exception.UserNotFoundException;
import com.uniovi.web.services.persistence.UserRepository;

/**
 * User service implementation
 * 
 * @author Victor
 *
 */
@Service
public class UserServiceImpl implements UserService {

	@Autowired
	private UserRepository userRepository;

	@Override
	public User authenticate(String email, String password) {
		if (StringUtils.isBlank(email) || StringUtils.isBlank(password)) {
			throw new IllegalArgumentException(
					"Both email and password are required");
		}
		return userRepository.findByEmailAndPassword(email, password);
	}

	@Override
	public Set<User> get(User criteria) {
		if (null == criteria) {
			throw new IllegalArgumentException("User criteria required");
		}
		return userRepository.findByCriteria(criteria);
	}

	@Override
	public void save(User user) throws UserAlreadyExistsException {
		if (null == user || !assertUserParameters(user)) {
			throw new IllegalArgumentException("User parameters required");
		}
		if (null != user.getId()) {
			throw new IllegalArgumentException("Update for an existing user");
		}
		User existingUser = userRepository.findByEmail(user.getEmail());
		if (null == existingUser) {
			userRepository.save(user);
		} else {
			throw new UserAlreadyExistsException(
					"User email " + user.getEmail() + " is in use");
		}
	}

	@Override
	public User update(User user) throws UserNotFoundException {
		if (null == user || !assertUserParameters(user)) {
			throw new IllegalArgumentException("User parameters required");
		}
		if (null != user.getId()) {
			throw new IllegalArgumentException("Save for non existing user");
		}

		User existingUser = userRepository.findByEmail(user.getEmail());
		if (null == existingUser) {
			throw new UserNotFoundException(
					"User email " + user.getEmail() + " is not registered");
		} else {
			user.setId(existingUser.getId());
			userRepository.save(user);
			return user;
		}
	}

	/**
	 * Validates parameters for a new user
	 * 
	 * @param user
	 * @return
	 */
	private boolean assertUserParameters(User user) {
		return StringUtils.isNotBlank(user.getEmail())
				&& StringUtils.isNotBlank(user.getName())
				&& StringUtils.isNotBlank(user.getPassword());
	}

}
