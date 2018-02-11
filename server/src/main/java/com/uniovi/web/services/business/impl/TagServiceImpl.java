package com.uniovi.web.services.business.impl;

import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.uniovi.web.services.business.TagService;
import com.uniovi.web.services.model.Tag;

/**
 * Service implementation for Tag entity
 * 
 * @author Victor
 *
 */
@Service
public class TagServiceImpl implements TagService {

	@Autowired
	private TagService tagService;

	@Override
	public Set<Tag> findAll() {
		return tagService.findAll();
	}

}
