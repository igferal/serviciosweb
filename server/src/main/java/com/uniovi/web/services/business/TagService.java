package com.uniovi.web.services.business;

import java.util.Set;

import com.uniovi.web.services.model.Tag;

public interface TagService {

	/**
	 * Finds all the existing Tags
	 */
	Set<Tag> findAll();

}
