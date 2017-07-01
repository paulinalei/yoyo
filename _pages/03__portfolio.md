---
layout: page
title: portfolio
permalink: /portfolio/
---
{% for project in site.portfolio %}
  <div class="project">
    <h2><a href="{{ project.permalink }}">{{ project.title }}</a></h2>
  </div>
{% endfor %}