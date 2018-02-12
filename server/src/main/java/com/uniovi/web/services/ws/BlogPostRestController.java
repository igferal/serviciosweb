package com.uniovi.web.services.ws;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.uniovi.web.services.business.BlogPostService;
import com.uniovi.web.services.model.BlogPost;
import com.uniovi.web.services.model.User;
import com.uniovi.web.services.model.exception.BlogPostNotFoundException;
import com.uniovi.web.services.ws.util.ApiError;

@RestController()
public class BlogPostRestController {

	private static final String API = "/api";
	private static final String PATH = "/blogpost";
	private static final String API_PATH = API + PATH;

	@Autowired
	private BlogPostService blogPostService;

	@RequestMapping(path = PATH, method = RequestMethod.GET,
			produces = MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody ResponseEntity<?> get(
			@RequestParam(value = "id", required = false) Long id,
			@RequestParam(value = "creatorEmail",
					required = false) String creatorEmail,
			@RequestParam(value = "tags", required = false) String[] tags) {

		try {
			return new ResponseEntity<>(
					blogPostService.find(
							new BlogPost(id, new User(creatorEmail)), tags),
					HttpStatus.OK);
		} catch (IllegalArgumentException iax) {
			ApiError apiError = new ApiError(HttpStatus.BAD_REQUEST,
					iax.getLocalizedMessage());
			return new ResponseEntity<Object>(apiError, apiError.getStatus());
		}
	}

	@RequestMapping(path = API_PATH, method = RequestMethod.POST,
			consumes = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> post(@RequestBody BlogPost blogPost) {

		try {
			blogPostService.save(blogPost);
		} catch (IllegalArgumentException iax) {
			ApiError apiError = new ApiError(HttpStatus.BAD_REQUEST,
					iax.getLocalizedMessage());
			return new ResponseEntity<Object>(apiError, apiError.getStatus());
		}
		return new ResponseEntity<Object>(HttpStatus.CREATED);
	}

	@RequestMapping(path = API_PATH, method = RequestMethod.DELETE,
			consumes = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> delete(@RequestParam(value = "id", required = true) Long id) {

		try {
			blogPostService.delete(id);
		} catch (IllegalArgumentException | BlogPostNotFoundException iax) {
			ApiError apiError = new ApiError(HttpStatus.BAD_REQUEST,
					iax.getLocalizedMessage());
			return new ResponseEntity<Object>(apiError, apiError.getStatus());
		}
		return new ResponseEntity<Object>(HttpStatus.OK);
	}

	@RequestMapping(path = API_PATH, method = RequestMethod.PUT,
			consumes = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> put(@RequestBody BlogPost blogPost) {

		try {
			blogPostService.update(blogPost);
		} catch (IllegalArgumentException iax) {
			ApiError apiError = new ApiError(HttpStatus.BAD_REQUEST,
					iax.getLocalizedMessage());
			return new ResponseEntity<Object>(apiError, apiError.getStatus());
		}
		return new ResponseEntity<Object>(HttpStatus.OK);
	}

}
