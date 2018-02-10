package com.uniovi.web.services.persistence;

import java.util.Set;

import com.uniovi.web.services.model.BlogPost;

public interface BlogPostRepositoryCustom {

	Set<BlogPost> findByCriteria(BlogPost criteria);
}
