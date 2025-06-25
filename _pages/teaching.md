---
layout: page
permalink: /teaching/
title: teaching
description: Materials for courses you taught. Replace this text with your description.
nav: true
nav_order: 6
announcements:
  enabled: true # includes a list of news items
  scrollable: true # adds a vertical scroll bar if there are more than 3 news items
  limit: 5 # leave blank to include all the news in the `_news` folder
---

For now, this page is assumed to be a static description of your courses. You can convert it to a collection similar to `_projects/` so that you can have a dedicated page for each course.

Organize your courses by years, topics, or universities, however you like!
<!-- News -->

{% if page.announcements and page.announcements.enabled %}
<h2>
    <a href="{{ '/news/' | relative_url }}" style="color: inherit">news</a>
</h2>
{% include news.liquid limit=true %}
{% endif %}
