package com.uniovi.web.services.model;

import javax.persistence.metamodel.SetAttribute;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@StaticMetamodel(BlogPost.class)
public abstract class BlogPost_ {

	public static volatile SetAttribute<BlogPost, Tag> tags;
	public static volatile SingularAttribute<BlogPost, User> creator;
}
