package com.uniovi.web.services.persistence;

import java.util.Set;

import org.springframework.data.jpa.repository.JpaRepository;

import com.uniovi.web.services.model.Tag;

public interface TagRepository extends JpaRepository<Tag, Long> {

	Set<Tag> findByName(String name);

}
