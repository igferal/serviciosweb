package com.uniovi.web.services;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;

import javax.annotation.PostConstruct;
import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.aspectj.EnableSpringConfigured;

import com.uniovi.web.services.model.BlogPost;
import com.uniovi.web.services.model.Tag;
import com.uniovi.web.services.persistence.BlogPostRepository;
import com.uniovi.web.services.persistence.TagRepository;

@SpringBootApplication
@EnableSpringConfigured
public class Application {

	@Autowired
	private BlogPostRepository blogPostRepository;

	@Autowired
	private TagRepository tagRepository;

	public static void main(String[] args) {
		SpringApplication.run(Application.class, args);
	}

	@PostConstruct
	@Transactional
	public void listen() {

		BlogPost post = blogPostRepository.findOne(1L);
		Tag insertTag = tagRepository.findOne(2L);

		List<Tag> list = new ArrayList<Tag>();
		list.add(insertTag);
		post.setTags(new HashSet<Tag>(list));
		blogPostRepository.save(post);

		List<BlogPost> list3 = new ArrayList<BlogPost>();
		list3.add(post);
		insertTag.setBlogPosts(new HashSet<BlogPost>(list3));
		tagRepository.save(insertTag);

		BlogPost criteria = new BlogPost();
		List<Tag> tags2 = new ArrayList<Tag>();
		tags2.add(tagRepository.findOne(1L));
		// criteria.setTags(new HashSet<Tag>(tags2));
		criteria.setTitle("Test title");

		List<BlogPost> salida = new ArrayList<BlogPost>();
		salida.addAll(blogPostRepository.findByCriteria(criteria));
		// Set<Tag> found = salida.get(0).getTags();
		System.out.println("Hola" + (salida != null && salida.size() != 0));
		// System.out.println("Hola" + (found != null && found.size() != 0));
	}
}
