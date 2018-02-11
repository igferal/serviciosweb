package com.uniovi.web.services.persistence;

import java.util.Set;

import com.uniovi.web.services.model.User;

/**
 * Custom repository for User entity
 * 
 * @author Victor
 *
 */
public interface UserRepositoryCustom {

	Set<User> findByCriteria(User criteria);
}
