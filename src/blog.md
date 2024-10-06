---
layout: page
title: Blog
---

Currently, while I develop my full stack personal blog with a backend/database, this will serve as my mini blog.

<ul>
  {% for post in collections.posts.resources %}
    <li>
      <a href="{{ post.relative_url }}">{{ post.data.title }}</a>
    </li>
  {% endfor %}
</ul>
