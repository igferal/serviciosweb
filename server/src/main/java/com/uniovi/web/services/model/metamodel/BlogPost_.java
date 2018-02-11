package com.uniovi.web.services.model.metamodel;

import javax.persistence.metamodel.SetAttribute;
import javax.persistence.metamodel.StaticMetamodel;

import com.uniovi.web.services.model.BlogPost;
import com.uniovi.web.services.model.Tag;

@StaticMetamodel(BlogPost.class)
public class BlogPost_ {

	public static volatile SetAttribute<BlogPost, Tag> tags;
}
