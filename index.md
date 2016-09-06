---
layout: default
nocard: true
title: PrePro Collaborative
---
{% for post in site.posts %}
<div class="cite">
<a href="{{ post.url }}">
<div class="card">
<h3 style="cursor: pointer;">{{ post.title }}</h3>
{{ post.excerpt }}
</div>
</a>
</div>
{% endfor %}
