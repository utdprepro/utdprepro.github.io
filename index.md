---
layout: default
nocard: true
title: PrePro Collaborative
---
{% for post in site.posts %}
<div class="cite">
<a href="{{ post.url }}">
<div class="card">
<div class="card-content">
<span class="card-title" style="cursor: pointer;">{{ post.title }}</span>
{{ post.excerpt }}
</div>
</div>
</a>
</div>
{% endfor %}
