---
layout: portfolio
title: portfolio
permalink: /portfolio/
---
<div class="portfolio-buttons button-group filter-button-group">
    <div class="button-group-one">
        <button data-filter="*">All</button>
        <button data-filter=".code">Code</button>
        <button data-filter=".design">Design</button>
        <button data-filter=".writing">Writing</button>
    </div>
    <div class="button-group-two">
        <button data-filter=".acm">ACM</button>
        <button data-filter=".class">Class</button>
        <button data-filter=".daily-bruin">Daily Bruin</button>
        <button data-filter=".side-project">Side Project</button>
    </div>
</div>

<div class="grid">
    <div class="grid-sizer"></div>
    {% for project in site.portfolio %}
    <div class="grid-item {{ project.grid-class }} ">
        <a class="link" href="{{ project.permalink }}">
            <div class="grid-item-content">
                {% if project.image %}
                    <img class="main-image" src="../assets/{{ project.image }}" />
                {% endif %}
            <h4 class="portfolio-title">{{ project.title }}</h4>
            <p class="portfolio-tagline">{{ project.tagline }} </p>
            </div>
        </a>
    </div>
    {% endfor %}
</div>