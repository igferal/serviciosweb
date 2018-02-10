package com.uniovi.web.services.business;

import java.util.Set;

import com.uniovi.web.services.model.BlogPost;

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
	 */
	void save(BlogPost blog);

	/**
	 * Finds posts by criteria
	 * 
	 * @param criteria
	 * @return
	 */
	Set<BlogPost> find(BlogPost criteria);

	/**
	 * Updates an existing post
	 * 
	 * @param blogPost
	 * @return the updated post
	 */
	BlogPost update(BlogPost blogPost);

	/**
	 * Deletes an existing post
	 * 
	 * @param id
	 */
	void delete(Long id);
}
