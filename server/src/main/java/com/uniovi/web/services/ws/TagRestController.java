package com.uniovi.web.services.ws;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.uniovi.web.services.business.TagService;

@RestController("/tag")
public class TagRestController {

	@Autowired
	private TagService tagService;

	@RequestMapping(method = RequestMethod.GET,
			produces = MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody ResponseEntity<?> get() {

		return new ResponseEntity<>(tagService.findAll(), HttpStatus.OK);
	}
}
