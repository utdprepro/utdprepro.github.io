---
layout: default
nocard: true
title: Projects
projects: [S16]
---
{% for project in page.projects %}
{% for page in site.projects %}
{% if page.project == project %}
<div class="cite">
<div class="card" markdown="1">
## [{{ page.project }}: {{ page.title }}]({{ page.url }})

{% for c in site.cite %}
{% if c.page == 'index' %}
{% if c.project == page.project %}
{% if page.excerpt == c.title %}
{{ c.content }}
{% endif %}
{% endif %}
{% endif %}
{% endfor %}
<div class="tooltip">
Creative Lead: {{ page.creative_lead }}
</div>
</div>
</div>
{% endif  %}
{% endfor %}
{% endfor %}

<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.3/jquery.min.js" type="text/javascript"></script>
<script src="/js/project.js" type="text/javascript"></script>
