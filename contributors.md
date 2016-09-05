---
layout: default
nocard: true
title: Contributors
---
{% assign contributors = "" | split:"|" %}
{% for c in site.cite %}
    {% unless contributors contains c.author %}
        {% assign contributors = contributors | push: c.author %}
    {% endunless %}
{% endfor %}
{% assign contributors = contributors | sort %}
{% for c in contributors %}
<div class="card">
    <h2><a href="/contributors/{{ c }}">{{ c }}</a></h2>
</div>
{% endfor %}
