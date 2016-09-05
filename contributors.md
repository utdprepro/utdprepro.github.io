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
{% for c in contributors %}
<div class="card">
    <h2><a href="/contributors/{{ c }}">{{ c }}</a></h2>
</div>
{% endfor %}
