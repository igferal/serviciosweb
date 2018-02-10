package com.uniovi.web.services.persistence;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

import com.uniovi.web.services.model.BlogPost;

public interface BlogPostRepository
		extends JpaRepository<BlogPost, Long>, JpaSpecificationExecutor<BlogPost>, BlogPostRepositoryCustom {

}
