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
<div class="card-content">
<span class="card-title" style="cursor: pointer;">{{ project.project }}: {{ project.title }}</span>

Creative lead: {{ project.creative_lead }}

{{ project.content }}
</div>
</div>
</a>
</div>
{% endfor %}
