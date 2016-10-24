---
layout: default
nocard: true
title: Contributors
---
{% assign contributors = "" | split:"|" %}
{% for c in site.cite %}
    {% for author in c.author %}
        {% unless contributors contains author %}
            {% assign contributors = contributors | push: author %}
        {% endunless %}
    {% endfor %}
{% endfor %}
{% assign contributors = contributors | sort %}
<div class="card">
<div class="card-content">
<div class="collection">
{% for c in contributors %}
    <a href="/contributors/{{ c }}" class="collection-item">{{ c }}</a>
{% endfor %}
</div>
</div>
</div>
