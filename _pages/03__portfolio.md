---
layout: portfolio
title: portfolio
permalink: /portfolio/
---
<div class="portfolio-buttons button-group filter-button-group">
    <button data-filter="*">All</button>
    <button data-filter=".code">Code</button>
    <button data-filter=".design">Design</button>
    <button data-filter=".writing">Writing</button>
    <button data-filter=".side-project">Side Project</button>
    <button data-filter=".daily-bruin">Daily Bruin</button>
    <button data-filter=".acm">ACM</button>
</div>

<div class="grid">
    {% for project in site.portfolio %}
    <a class="link {{ project.grid-class }} " href="{{ project.permalink }}">
    <div class="element-item">
        <img class="main-image" src="../assets/{{ project.image }}" />
        <h4 class="portfolio-title">{{ project.title }}</h4>
        <p class="portfolio-tagline">{{ project.tagline }} </p>
    </div>
    </a>
    {% endfor %}
</div>