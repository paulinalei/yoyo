---
layout: page
title: portfolio
permalink: /portfolio/
---
{% for project in site.portfolio %}
  <div class="project">
    <img class="main-image" src="/assets/{{ project.image }}" />
    <h3><a href="{{ project.permalink }}">{{ project.title }}</a></h3>
  </div>
{% endfor %}