---
layout: default
nocard: true
title: Projects
---
{% assign sorted_projects = site.projects | sort: "order" %}
{% for project in sorted_projects reversed %}
<div class="cite">
<div class="card" markdown="1">
## [{{ project.project }}: {{ project.title }}]({{ project.url }})

{{ project.content }}
<div class="tooltip">
Creative Lead:<br />
{{ project.creative_lead }}
</div>
</div>
</div>
{% endfor %}

<script src="https://code.jquery.com/jquery-3.1.0.min.js" type="text/javascript"></script>
<script src="/js/project.js" type="text/javascript"></script>
