package com.uniovi.web.services.model;

import java.util.Date;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.Lob;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

@Entity
@Table(name = "BLOGPOST")
public class BlogPost extends BaseEntity {

	@ManyToOne
	@JoinColumn(name = "CREATOR_ID")
	private User creator;

	@Column(name = "TITLE", nullable = false)
	private String title;

	@Lob
	@Column(name = "BODY", nullable = false, length = 512)
	private String body;

	@Column(name = "CREATION_DATE", nullable = true)
	@Temporal(TemporalType.TIMESTAMP)
	private Date creationDate;

	@ManyToMany(fetch = FetchType.EAGER)
	private Set<Tag> tags;

	public BlogPost() {
		super();
	}

	public BlogPost(Long id, User creator, String title) {
		super();
		this.id = id;
		this.creator = creator;
		this.title = title;
	}

	public User getCreator() {
		return creator;
	}

	public void setCreator(User creator) {
		this.creator = creator;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getBody() {
		return body;
	}

	public void setBody(String body) {
		this.body = body;
	}

	public Date getCreationDate() {
		return creationDate;
	}

	public void setCreationDate(Date creationDate) {
		this.creationDate = creationDate;
	}

	public Set<Tag> getTags() {
		return tags;
	}

	public void setTags(Set<Tag> tags) {
		this.tags = tags;
	}
}
