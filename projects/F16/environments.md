---
layout: project
page: project
project: F16
title: Environments
totallynotcards: [World Map Concept]
locations: [Guardian Sanctum, The Wilds, Temple of Servants, Temple of Merchants, Temple of Farmers, Temple of Artisans, Temple of Priests]
---
{% for card in page.totallynotcards %}
{% assign cites = site.cite | where: "page", page.title | where: "title", card | where: "project", page.project %}
{% for c in cites %}
<div class="cite">
<div class="card">
<div class="card-content">
<span class="card-title">{{ c.title }}</span>
{{ c.content | markdownify }}
<div class="tooltip">
{{ c.title }} by {{ c.author | join: ", " }}<br />
<a href="{{ c.url }}">permalink</a><span style="padding-right: 20px;"></span><a href="{{ c.source }}">source</a>
</div>
</div>
</div>
</div>
{% endfor %}
{% endfor %}
<div class="card">
<div class="card-content">
<div class="collection">
{% for card in page.locations %}
<a href="{{ card | relative_url | replace: "'",'' | slugify }}" class="collection-item">{{ card }}</a>
{% endfor %}
</div>
</div>
</div>
