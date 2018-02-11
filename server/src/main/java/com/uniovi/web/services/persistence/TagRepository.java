package com.uniovi.web.services.persistence;

import org.springframework.data.jpa.repository.JpaRepository;

import com.uniovi.web.services.model.Tag;

public interface TagRepository extends JpaRepository<Tag, Long> {

	Tag findByName(String name);

}
