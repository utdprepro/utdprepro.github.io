---
layout: project
categories: [project, S16]
cards: [Summary, Game Concept]
project: S16
title: Ennea
excerpt: Summary
---
{% for c in site.cite %}
{% if c.categories contains 'index' %}
{% if page.cards contains c.title %}
{{ c.content }}
{% endif %}
{% endif %}
{% endfor %}
