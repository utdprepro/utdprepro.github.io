---
layout: default
nocard: true
title: Projects
---
{% assign sorted_projects = site.projects | sort: "order" %}
{% for project in sorted_projects reversed %}
<div class="cite">
<a href="{{ project.url }}">
<div class="card">
<h3 style="cursor: pointer;">{{ project.project }}: {{ project.title }}</h3>

Creative lead: {{ project.creative_lead }}

{{ project.content }}
</div>
</a>
</div>
{% endfor %}
