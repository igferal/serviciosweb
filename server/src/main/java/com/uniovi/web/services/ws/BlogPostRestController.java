package com.uniovi.web.services.ws;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
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
import com.uniovi.web.services.model.exception.UserNotFoundException;
import com.uniovi.web.services.ws.util.ApiError;

@RestController()
public class BlogPostRestController {

	private static final String API = "/api";
	private static final String PATH = "/blogpost";
	private static final String API_PATH = API + PATH;

	@Autowired
	private BlogPostService blogPostService;

	@RequestMapping(path = PATH, method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody ResponseEntity<?> get(@RequestParam(value = "id", required = false) Long id,
			@RequestParam(value = "title", required = false) String title,
			@RequestParam(value = "creatorEmail", required = false) String creatorEmail,
			@RequestParam(value = "tags", required = false) String[] tags) {

		try {
			return new ResponseEntity<>(blogPostService.find(new BlogPost(id, new User(creatorEmail), title), tags),
					HttpStatus.OK);
		} catch (IllegalArgumentException iax) {
			ApiError apiError = new ApiError(HttpStatus.BAD_REQUEST, iax.getLocalizedMessage());
			return new ResponseEntity<Object>(apiError, apiError.getStatus());
		}
	}

	@RequestMapping(path = API_PATH, method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody ResponseEntity<Object> post(@RequestBody BlogPost blogPost) {

		HttpHeaders headers = new HttpHeaders();
		try {
			blogPostService.save(blogPost);
			headers.add("location", "/blogpost?id=" + blogPost.getId());
		} catch (IllegalArgumentException iax) {
			ApiError apiError = new ApiError(HttpStatus.BAD_REQUEST, iax.getLocalizedMessage());
			return new ResponseEntity<Object>(apiError, apiError.getStatus());
		} catch (UserNotFoundException e) {
			ApiError apiError = new ApiError(HttpStatus.BAD_REQUEST, e.getLocalizedMessage());
			return new ResponseEntity<Object>(apiError, apiError.getStatus());
		}
		return ResponseEntity.status(HttpStatus.CREATED).headers(headers).body(blogPost);
	}

	@RequestMapping(path = API_PATH
			+ "/{id}", method = RequestMethod.DELETE, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> delete(@PathVariable("id") Long id) {

		BlogPost deleted = null;
		try {
			deleted = blogPostService.delete(id);
		} catch (IllegalArgumentException | BlogPostNotFoundException iax) {
			ApiError apiError = new ApiError(HttpStatus.BAD_REQUEST, iax.getLocalizedMessage());
			return new ResponseEntity<Object>(apiError, apiError.getStatus());
		}
		return new ResponseEntity<Object>(deleted, HttpStatus.OK);
	}

	@RequestMapping(path = API_PATH, method = RequestMethod.PUT, consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Object> put(@RequestBody BlogPost blogPost) {

		HttpHeaders headers = new HttpHeaders();
		try {
			blogPostService.update(blogPost);
			headers.add("location", "/blogpost?id=" + blogPost.getId());
		} catch (IllegalArgumentException iax) {
			ApiError apiError = new ApiError(HttpStatus.BAD_REQUEST, iax.getLocalizedMessage());
			return new ResponseEntity<Object>(apiError, apiError.getStatus());
		}
		return ResponseEntity.status(HttpStatus.OK).headers(headers).body(blogPost);
	}

}
