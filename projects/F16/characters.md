---
layout: project
page: project
project: F16
title: Characters
characters: [Abi, Ash'ra, Pad'ua]
---
<div class="card">
<div class="card-content">
<div class="collection">
{% for card in page.characters %}
<a href="{{ card | relative_url | replace: "'",'' | slugify }}" class="collection-item">{{ card }}</a>
{% endfor %}
</div>
</div>
</div>
