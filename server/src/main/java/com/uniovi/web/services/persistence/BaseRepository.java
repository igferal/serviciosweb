package com.uniovi.web.services.persistence;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;

/**
 * Util class to get predicates
 * 
 * @author Victor
 *
 * @param <T>
 *            class to get the predicate
 */
public class BaseRepository<T> {

	public Predicate getAndEqualPred(Predicate pred, CriteriaBuilder builder, Root<T> root, Object value, String attr) {
		if (null != value) {
			if (pred == null) {
				pred = builder.equal(root.<T>get(attr), value);
			} else {
				pred = builder.and(pred, builder.equal(root.<T>get(attr), value));
			}
		}
		return pred;
	}
}
