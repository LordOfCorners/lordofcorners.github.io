---
layout: post
title:  "Private Patents and Public Health"
date:   2016-06-22 10:59:56 -0400
categories: portfolio
extraClasses: long-title
featured-image: "hai/private-patents-and-public-health.gif"
project-tags: "WordPress, Advocacy"
year: "July 2016"
noindex: true
---

**[Project Site](http://accesstomedicines.org/)**

The world's out-of-balance patent system blocks access to new medicines for many. In partnership with Health Action International and Open Society Foundations, Little Cloud Collective (Claudia Bernett, Jennifer Matsuomoto, and I) designed and built this narrative website to educate healthcare advocates, consumers, policymakers, and journalists about the complex relationship between patents and medicines. An initial scroll provides an overview of the issues, while users may choose to dig in deeper by navigating through the accordions in each section. Though it's on a single page, each infographic/section is individually shareable on Facebook and Twitter. The site also provides links to many related resources including Ellen ’t Hoen's book *Private Patents and Public Health: Changing Intellectual Property Rules for Access to Medicines*, which launched in conjunction with this site.

One particular challenge in terms of development was that we wanted to be able to share individual sections/infographics from the page, but Facebook and Twitter use a page's Open Graph meta tags to populate shares, and there cannot be more than one set of data per page. To get around this, I set up a unique page for each section/infographic which serves the appropriate Open Graph meta tags, but redirects immediately to the home page and scrolls to the appropriate section if the user-agent is not a Twitter or Facebook crawler.

{% include image-row.html image1="portfolio/hai/hai-hero.png" image2="portfolio/hai/private-patents-and-public-health-wide.gif" image3="portfolio/hai/the-cost.png" %}

