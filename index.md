---
layout: default
nocard: true
title: PrePro Collaborative
---
{% for post in site.posts %}
<div class="card" markdown="1">
## [{{ post.title }}]({{ post.url }})

{{ post.excerpt }}
</div>
{% endfor %}
