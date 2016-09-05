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

{{ page.content }}
<div class="tooltip">
Creative Lead:<br />
{{ page.creative_lead }}
</div>
</div>
</div>
{% endif  %}
{% endfor %}
{% endfor %}

<script src="https://code.jquery.com/jquery-3.1.0.min.js" type="text/javascript"></script>
<script src="/js/project.js" type="text/javascript"></script>
