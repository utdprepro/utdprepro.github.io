---
layout: default
title: Projects
---
{% for page in site.pages %}
{% if page.categories contains 'project' %}
## [{{ page.title }}]({{ page.url }})

{{ page.content | split:"\n\n" | first }}
{% endif %}
{% endfor %}
