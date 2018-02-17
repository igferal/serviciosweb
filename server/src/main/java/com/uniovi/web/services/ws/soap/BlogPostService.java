package com.uniovi.web.services.ws.soap;

import java.util.List;

import javax.jws.WebMethod;
import javax.jws.WebService;
import javax.jws.soap.SOAPBinding;
import javax.jws.soap.SOAPBinding.Style;

import com.uniovi.web.services.model.BlogPost;
import com.uniovi.web.services.ws.soap.exception.CreatorNotFoundException;
import com.uniovi.web.services.ws.soap.exception.InvalidBlogPostException;

@WebService
@SOAPBinding(style = Style.DOCUMENT)
public interface BlogPostService {

	@WebMethod
	void saveList(List<BlogPost> blogPosts, String email)
			throws CreatorNotFoundException, InvalidBlogPostException;
}