package com.uniovi.web.services.model;

import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import net.minidev.json.annotate.JsonIgnore;

@Table(name = "USER")
@Entity
public class User extends BaseEntity {

	@Column(name = "EMAIL_ADDRESS", unique = true, nullable = false)
	private String email;

	@Column(name = "PASSWORD", nullable = false)
	@JsonIgnore
	private String password;

	@Column(name = "NAME", nullable = false)
	private String name;

	@JsonIgnore
	@OneToMany(mappedBy = "creator")
	private Set<BlogPost> blogPosts;

	public User() {

	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((email == null) ? 0 : email.hashCode());
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
		User other = (User) obj;
		if (email == null) {
			if (other.email != null)
				return false;
		} else if (!email.equals(other.email))
			return false;
		return true;
	}
}
