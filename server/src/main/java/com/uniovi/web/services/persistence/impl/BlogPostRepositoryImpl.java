package com.uniovi.web.services.persistence.impl;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Join;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;

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

	@Override
	public Set<BlogPost> findByCriteria(BlogPost criteria) {
		if (null != criteria) {
			return new HashSet<BlogPost>(blogPostRepository
					.findAll(this.isBlogPostCriteria(criteria)));
		}
		return new HashSet<BlogPost>(blogPostRepository.findAll());
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
				result = getTagsPredicate(criteria, query, result, builder);

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

			private Predicate getTagsPredicate(BlogPost criteria,
					CriteriaQuery<?> query, Predicate result,
					CriteriaBuilder builder) {
				if (null != criteria.getTags()
						&& !criteria.getTags().isEmpty()) {

					CriteriaQuery<BlogPost> q = builder
							.createQuery(BlogPost.class);

					Root<BlogPost> child = query.from(BlogPost.class);
					Join<BlogPost, Tag> parent = child.join(BlogPost_.tags);
					q.where(parent.in(criteria.getTags()));

					if (result == null) {
						result = q.getRestriction();
					} else {
						result = builder.and(result, q.getRestriction());
					}
				}
				return result;
			}
		};
	}
}
