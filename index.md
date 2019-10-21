---
layout: default
title: Matt Stubenhofer
---

<header class="row">
	{% include header.html %}
  <h1 class="title"> {{ page.title }} </h1>
</header>

---- 

{% for post in site.posts %}
  <div>
		{{ post.date | date: "%b %-d, %Y" }} • <a href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>
	</div>
  <br />
{% endfor %}

----

Glad to have you here, please take time to browse around my site. Your patience is appreciated while progress on this page continues. I hope to have additional blog posts up shortly!
