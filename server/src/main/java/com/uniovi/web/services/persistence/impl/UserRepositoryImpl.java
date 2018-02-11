package com.uniovi.web.services.persistence.impl;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.domain.Specification;

import com.uniovi.web.services.model.User;
import com.uniovi.web.services.persistence.BaseRepository;
import com.uniovi.web.services.persistence.UserRepository;
import com.uniovi.web.services.persistence.UserRepositoryCustom;

public class UserRepositoryImpl extends BaseRepository<User> implements UserRepositoryCustom {

	@PersistenceContext
	private EntityManager entitymanager;

	@Autowired
	private UserRepository userRepository;

	@Override
	public Set<User> findByCriteria(User criteria) {
		if (null != criteria) {
			return new HashSet<User>(userRepository.findAll(this.isUserCriteria(criteria)));
		}
		return new HashSet<User>(userRepository.findAll());
	}

	private Specification<User> isUserCriteria(User criteria) {
		return new Specification<User>() {

			@Override
			public Predicate toPredicate(Root<User> root, CriteriaQuery<?> query, CriteriaBuilder builder) {

				Predicate result = null;
				result = UserRepositoryImpl.super.getAndEqualPred(result, builder, root, criteria.getId(), "id");
				result = UserRepositoryImpl.super.getAndEqualPred(result, builder, root, criteria.getEmail(), "email");
				result = UserRepositoryImpl.super.getAndEqualPred(result, builder, root, criteria.getName(), "name");
				return result;
			}
		};
	}
}
