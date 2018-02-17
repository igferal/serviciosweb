package com.uniovi.web.services.ws.soap.impl;

import java.util.List;

import javax.annotation.Resource;
import javax.jws.WebService;
import javax.xml.ws.WebServiceContext;

import com.uniovi.web.services.model.BlogPost;
import com.uniovi.web.services.model.User;
import com.uniovi.web.services.model.exception.UserNotFoundException;
import com.uniovi.web.services.ws.soap.BlogPostService;
import com.uniovi.web.services.ws.soap.exception.CreatorNotFoundException;
import com.uniovi.web.services.ws.soap.exception.InvalidBlogPostException;

@WebService(
		endpointInterface = "com.uniovi.web.services.ws.soap.BlogPostService")
public class BlogPostServiceImpl implements BlogPostService {

	@Resource
	private com.uniovi.web.services.business.BlogPostService blogPostService;

	@Resource
	WebServiceContext wsCtx;

	@Override
	public void saveList(List<BlogPost> blogPosts, String email)
			throws CreatorNotFoundException, InvalidBlogPostException {
		if (null == email) {
			throw new CreatorNotFoundException("Creator email not found");
		}

		User user = new User(email);
		if (null != blogPosts && !blogPosts.isEmpty()) {
			for (BlogPost bp : blogPosts) {
				try {
					bp.setCreator(user);
					blogPostService.save(bp);
				} catch (UserNotFoundException e) {
					throw new CreatorNotFoundException(
							"Creator email not found");
				} catch (IllegalArgumentException ex) {
					throw new InvalidBlogPostException(
							"Incomplete blogpost, parameters required");
				}
			}
		}
	}

}
