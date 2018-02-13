package com.uniovi.web.services.ws;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.uniovi.web.services.business.TagService;
import com.uniovi.web.services.model.Tag;

@RestController("/tag")
public class TagRestController {

	@Autowired
	private TagService tagService;

	@RequestMapping(method = RequestMethod.GET,
			produces = MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody ResponseEntity<Collection<Tag>> get() {

		return new ResponseEntity<Collection<Tag>>(tagService.findAll(), HttpStatus.OK);
	}
}
