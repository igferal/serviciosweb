package com.uniovi.web.services.persistence.impl;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Join;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;

import org.apache.commons.collections.CollectionUtils;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.domain.Specification;

import com.uniovi.web.services.model.BlogPost;
import com.uniovi.web.services.model.BlogPost_;
import com.uniovi.web.services.model.Tag;
import com.uniovi.web.services.model.User;
import com.uniovi.web.services.model.User_;
import com.uniovi.web.services.persistence.BaseRepository;
import com.uniovi.web.services.persistence.BlogPostRepository;
import com.uniovi.web.services.persistence.BlogPostRepositoryCustom;

public class BlogPostRepositoryImpl extends BaseRepository<BlogPost>
		implements BlogPostRepositoryCustom {

	@PersistenceContext
	private EntityManager entitymanager;

	@Autowired
	private BlogPostRepository blogPostRepository;

	@SuppressWarnings("unchecked")
	@Override
	public Set<BlogPost> findByCriteria(BlogPost criteria) {
		if (null != criteria) {
			Set<BlogPost> posts = null;
			if (null != criteria.getTags() && !criteria.getTags().isEmpty()) {
				posts = filterByTags(criteria.getTags());
			}
			if (null != posts) {
				return new HashSet<BlogPost> (CollectionUtils.intersection(posts, blogPostRepository.findAll(isBlogPostCriteria(criteria))));
			} else {
				return new HashSet<BlogPost>(blogPostRepository.findAll(isBlogPostCriteria(criteria)));
			}
		}
		return new HashSet<BlogPost>(blogPostRepository.findAll());
	}
	
	private Set<BlogPost> filterByTags(Set<Tag> tags) {
		List<Long> ids = new ArrayList<Long>();
		tags.forEach(x -> ids.add(x.getId()));
		TypedQuery<BlogPost> q =
			      entitymanager.createQuery("SELECT b FROM BlogPost b " //
			      		+ "INNER JOIN b.tags as t " //
			      		+ "WHERE t.id in (:tags)", BlogPost.class);
		q.setParameter("tags", ids);
		return new HashSet<BlogPost>(q.getResultList());
	}

	private Specification<BlogPost> isBlogPostCriteria(BlogPost criteria) {
		return new Specification<BlogPost>() {

			@Override
			public Predicate toPredicate(Root<BlogPost> root,
					CriteriaQuery<?> query, CriteriaBuilder builder) {

				Predicate result = null;
				result = BlogPostRepositoryImpl.super.getAndEqualPred(result,
						builder, root, criteria.getId(), "id");
				result = BlogPostRepositoryImpl.super.getAndEqualPred(result,
						builder, root, criteria.getTitle(), "title");
				result = BlogPostRepositoryImpl.super.getAndEqualPred(result,
						builder, root, criteria.getBody(), "body");
				result = BlogPostRepositoryImpl.super.getAndEqualPred(result,
						builder, root, criteria.getCreationDate(),
						"creationDate");

				result = getCreatorPredicate(criteria, root, result, builder);
				//result = getTagsPredicate(criteria, query, result, builder);

				return result;
			}

			private Predicate getCreatorPredicate(BlogPost criteria,
					Root<BlogPost> root, Predicate result,
					CriteriaBuilder builder) {
				User creator = criteria.getCreator();
				if (null != creator
						&& StringUtils.isNotBlank(creator.getEmail())) {

					Predicate emailPred = builder.equal(
							root.get(BlogPost_.creator).get(User_.email),
							creator.getEmail());

					if (result != null) {
						result = builder.and(result, emailPred);
					} else {
						result = emailPred;
					}
				}
				return result;
			}
		};
	}
}
