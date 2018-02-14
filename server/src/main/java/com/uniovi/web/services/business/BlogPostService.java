package com.uniovi.web.services.business;

import java.util.Set;

import com.uniovi.web.services.model.BlogPost;
import com.uniovi.web.services.model.exception.BlogPostNotFoundException;
import com.uniovi.web.services.model.exception.UserNotFoundException;

/**
 * Service for BlogPost entity
 * 
 * @author Victor
 *
 */
public interface BlogPostService {

	/**
	 * Saves a new post
	 * 
	 * @param blog
	 * @throws UserNotFoundException 
	 */
	void save(BlogPost blog) throws UserNotFoundException;

	/**
	 * Finds posts by criteria
	 * 
	 * @param criteria
	 * @return
	 */
	Set<BlogPost> find(BlogPost criteria, String[] tags);

	/**
	 * Updates an existing post
	 * 
	 * @param blogPost
	 * @return the updated post
	 */
	BlogPost update(BlogPost blogPost);

	/**
	 * Deletes an existing post and returns it
	 * 
	 * @param id
	 * @throws BlogPostNotFoundException
	 */
	BlogPost delete(Long id) throws BlogPostNotFoundException;
}
