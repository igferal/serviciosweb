package com.uniovi.web.services.ws;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.uniovi.web.services.business.UserService;
import com.uniovi.web.services.model.User;
import com.uniovi.web.services.model.exception.UserAlreadyExistsException;
import com.uniovi.web.services.ws.util.ApiError;

@RestController("/user")
public class UserRestController {

	@Autowired
	private UserService userService;

	@RequestMapping(method = RequestMethod.POST,
			produces = MediaType.APPLICATION_JSON_VALUE,
			consumes = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> post(@RequestBody User user) {

		HttpHeaders headers = new HttpHeaders();
		try {
			userService.save(user);
			headers.add("location", "unavailable");
		} catch (UserAlreadyExistsException e) {
			ApiError apiError = new ApiError(HttpStatus.UNPROCESSABLE_ENTITY,
					e.getLocalizedMessage());
			return new ResponseEntity<Object>(apiError, apiError.getStatus());
		} catch (IllegalArgumentException iax) {
			ApiError apiError = new ApiError(HttpStatus.BAD_REQUEST,
					iax.getLocalizedMessage());
			return new ResponseEntity<Object>(apiError, apiError.getStatus());
		}
		return ResponseEntity.status(HttpStatus.CREATED).headers(headers)
				.body(user);
	}
}
