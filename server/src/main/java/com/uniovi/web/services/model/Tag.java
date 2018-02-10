package com.uniovi.web.services.model;

import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

@Table(name = "TAG")
@Entity
public class Tag extends BaseEntity {

	@Column(name = "NAME", unique = true, nullable = false)
	private String name;

	@ManyToMany(mappedBy = "tags")
	private Set<BlogPost> blogPosts;

	public Tag() {
		super();
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Set<BlogPost> getBlogPosts() {
		return blogPosts;
	}

	public void setBlogPosts(Set<BlogPost> blogPosts) {
		this.blogPosts = blogPosts;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((name == null) ? 0 : name.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Tag other = (Tag) obj;
		if (name == null) {
			if (other.name != null)
				return false;
		} else if (!name.equals(other.name))
			return false;
		return true;
	}

}