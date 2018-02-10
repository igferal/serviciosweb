package com.uniovi.web.services.persistence;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

import com.uniovi.web.services.model.User;

/**
 * Repository for User entity
 * 
 * @author Victor
 *
 */
public interface UserRepository extends JpaRepository<User, Long>, JpaSpecificationExecutor<User> {

	User findByEmailAndPassword(String email, String password);

}
