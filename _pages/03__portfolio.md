---
layout: portfolio
title: portfolio
permalink: /portfolio/
---
<div class="portfolio-buttons button-group filter-button-group">
    <div class="button-group">
        <button data-filter="*" class="is-checked">All</button>
        <button data-filter=".code" class="is-not-checked">Code</button>
        <button data-filter=".design" class="is-not-checked">Design</button>
        <button data-filter=".writing" class="is-not-checked">Writing</button>
    </div>
    <div class="button-group">
        <button data-filter=".acm" class="is-not-checked">ACM</button>
        <button data-filter=".class" class="is-not-checked">Class</button>
        <button data-filter=".daily-bruin" class="is-not-checked">Daily Bruin</button>
        <button data-filter=".side-project" class="is-not-checked">Side Project</button>
    </div>
</div>

<div class="grid">
    <div class="grid-sizer"></div>
    {% for project in site.portfolio %}
    <div class="grid-item {{ project.grid-class }} ">
        <a class="link" href="{{ project.permalink }}">
            <div class="grid-item-content">
                {% if project.icon-image %}
                    <img class="portfolio-image" src="../assets/{{ project.icon-image }}" />
                {% endif %}
            <h4 class="portfolio-title">{{ project.title }}</h4>
            <p class="portfolio-tagline">{{ project.tagline }} </p>
            </div>
        </a>
    </div>
    {% endfor %}
</div>
