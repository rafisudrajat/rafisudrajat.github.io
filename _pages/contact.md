---
layout: page
permalink: /contact/
title: contact
description: 
nav: true
nav_order: 6
announcements:
  enabled: true # includes a list of news items
  scrollable: true # adds a vertical scroll bar if there are more than 3 news items
  limit: 5 # leave blank to include all the news in the `_news` folder
---

<!-- News -->
{% if page.announcements and page.announcements.enabled %}
<h2>
    <a href="{{ '/news/' | relative_url }}" style="color: inherit">news</a>
</h2>
{% include news.liquid limit=true %}
{% endif %}

## Contact us below:

<i class="ti ti-mail"></i> email: emaillab@blablabla.com

<i class="ti ti-phone"></i> phone: +62 999910010101992
