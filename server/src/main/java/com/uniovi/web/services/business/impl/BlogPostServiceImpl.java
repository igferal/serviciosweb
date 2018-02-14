package com.uniovi.web.services.business.impl;

import java.util.Arrays;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;

import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.uniovi.web.services.business.BlogPostService;
import com.uniovi.web.services.model.BlogPost;
import com.uniovi.web.services.model.Tag;
import com.uniovi.web.services.model.User;
import com.uniovi.web.services.model.exception.BlogPostNotFoundException;
import com.uniovi.web.services.model.exception.UserNotFoundException;
import com.uniovi.web.services.persistence.BlogPostRepository;
import com.uniovi.web.services.persistence.TagRepository;
import com.uniovi.web.services.persistence.UserRepository;

/**
 * BlogPostService implementation
 * 
 * @author Victor
 *
 */
@Service
public class BlogPostServiceImpl implements BlogPostService {

	@Autowired
	private BlogPostRepository blogPostRepository;

	@Autowired
	private UserRepository userRepository;

	@Autowired
	private TagRepository tagRepository;

	@Override
	public void save(BlogPost blog) throws UserNotFoundException { 
		if (null == blog || !assertBlogPostParameters(blog)) {
			throw new IllegalArgumentException("BlogPost parameters required");
		}
		if (!assertCreatorExists(blog)) {
			throw new UserNotFoundException("Creator not found");
		}
		if (null != blog.getId()) {
			throw new IllegalArgumentException(
					"Update for an existing blogpost");
		}
		blog.setTags(getBlogTags(blog));
		blog.setCreationDate(new Date());
		blogPostRepository.save(blog);
	}

	@Override
	public Set<BlogPost> find(BlogPost criteria, String[] tags) {
		if (null == criteria) {
			throw new IllegalArgumentException("Criteria parameter required");
		}
		criteria.setTags(getTagList(tags));
		return blogPostRepository.findByCriteria(criteria);
	}

	@Override
	public BlogPost update(BlogPost blogPost) {
		if (null == blogPost || !assertBlogPostParameters(blogPost)) {
			throw new IllegalArgumentException("BlogPost parameters required");
		}
		if (!assertCreatorExists(blogPost)) {
			throw new IllegalArgumentException(
					"BlogPost valid creator required");
		}
		if (null == blogPost.getId()) {
			throw new IllegalArgumentException(
					"Save for non existing blogpost");
		}
		BlogPost existingBlogPost = blogPostRepository
				.findOne(blogPost.getId());
		if (null == existingBlogPost) {
			throw new IllegalArgumentException("Blogpost not found");
		}
		blogPost.setTags(getBlogTags(blogPost));
		return blogPostRepository.save(blogPost);
	}

	@Override
	public BlogPost delete(Long id) throws BlogPostNotFoundException {
		if (null == id) {
			throw new IllegalArgumentException("BlogPost id required");
		}
		BlogPost deleted = blogPostRepository.findOne(id);
		if (null != deleted) {
			blogPostRepository.delete(deleted);
		} else {
			throw new BlogPostNotFoundException(
					"There is no blogpost with id " + id);
		}
		return deleted;
	}

	/**
	 * Required parameters for BlogPost
	 * 
	 * @param blog
	 * @return
	 */
	private boolean assertBlogPostParameters(BlogPost blog) {
		return StringUtils.isNotBlank(blog.getBody())
				&& StringUtils.isNotBlank(blog.getTitle());
	}

	/**
	 * Asserts blogpost's creator
	 * 
	 * @param blog
	 * @return
	 */
	private boolean assertCreatorExists(BlogPost blog) {
		User creator = blog.getCreator();
		if (null != creator) {
			if (StringUtils.isNotBlank(creator.getEmail())) {
				creator = userRepository.findByEmail(creator.getEmail());
				if (null != creator) {
					blog.setCreator(creator);
					return true;
				}
			}
		}
		return false;
	}

	/**
	 * Asserts blogpost's tags
	 * 
	 * @param blog
	 * @return
	 */
	private Set<Tag> getBlogTags(BlogPost blog) {
		Set<Tag> tags = new HashSet<Tag>();
		if (null != blog.getTags() && blog.getTags().size() != 0) {
			for (Tag tag : blog.getTags()) {
				if (StringUtils.isNotBlank(tag.getName())) {
					Tag found = tagRepository.findByName(tag.getName());
					if (null != found) {
						tags.add(found);
					}
				}
			}
		}
		return tags;
	}

	private Set<Tag> getTagList(String[] tags) {
		Set<Tag> tagList = new HashSet<Tag>();
		if (null != tags) {
			Arrays.asList(tags).forEach(x -> {
				Tag t = tagRepository.findByName(x);
				if (null != t) {
					tagList.add(t);
				}
			});
		}
		return tagList;
	}

}
