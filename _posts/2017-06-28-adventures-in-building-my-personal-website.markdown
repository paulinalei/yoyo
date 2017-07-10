---
layout: post
title:  adventures in building my personal website
date:   2017-06-28 09:51:06 -0700
categories:
---
I'll be using this blog post to keep track of what I've learned while making this website.

## Jekyll specific issues
I used Jekyll to make this website. I had been toying with the idea of making my website a full-stack web application, but ultimately one of my friends convinced me to use Jekyll.

Reasons I decided to use Jekyll:
* pretty URLS
* Markdown pages
* statically generated website
* easy templating
* hosted on GitHub

Overall, I am really glad my friend told me to use Jekyll. Definitely made the process of making my website smooth and I got to learn something new!

### Routing
I pushed this to a project repository instead of using the user repository that GitHub provides. This caused a lot of issues in terms of figuring out paths.

I also used collections to make subroutes to generate separate webpages for my portfolio projects.

## Responsive Design
### Sass
I learned Sass. This definitely made styling so much easier. Why didn't I learn this earlier?

### p5JS
I first heard about p5JS from my roommate, because she is a Design | Media Arts major and this was a JavaScript library designed specifically for artists.
I used p5JS for my landing page and loved the effect it achieved. It was easy to learn and definitely great for visual representations.

I found out that p5JS does not automatically resize the canvas, so had to look up how to do this.

I had issues when I was linking in the libraries. The landing page worked on my local server but not when I published it online.
This was because I used a CDN that used http instead of manually including the files, so I had to change it to https, as GitHub uses https.

### IsotopeJS
Using Isotope for my portfolio grid.

I had initally set a specific width and height to make my grid elements squares. But this caused some issues in formatting the grid and making it responsive.
Using relative widths now.

## Using a DNS
First time buying a domain!

Before, I had used UCLA's online hosting service and had a domain with bol.ucla.edu. It was nice to learn how to do this myself.
I purchased a domain name via Namecheap and easily found resources to get my website up and running!

In adding a CNAME record for Namecheap, I had first put in the project URL for the repository holding my website instead of using my own user URL.
I figured out that you only need to use your user URL instead of the specific project URL because GitHub will automatically find the CNAME for a user.