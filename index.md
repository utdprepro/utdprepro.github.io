---
layout: default
title: PrePro Collaborative
nocard: true
---
<div class="card">
	<ul class="tabs tabs-fixed-width">
	{% assign sorted_projects = site.projects | sort: "order" %}
	{% for project in sorted_projects reversed %}
	<li class="tab"><a href="#{{ project.project }}">{{ project.title }}</a></li>
	{% endfor %}
	</ul>

	{% for project in sorted_projects reversed %}
	<div id="{{ project.project }}" style="position: relative;margin-top: -.5rem;">
		<div class="chip" style="position: absolute;top: 8px;right: 16px;z-index: 1;">Creative lead: {{ project.creative_lead }}</div>
	    <div class="card" style="box-shadow: none;">
	        <div class="card-image">
	            <img class="carousel-image" src="/assets/banners/{{ project.banner }}">
	        </div>
	        <div class="card-content">
	        	<span class="card-title">{{ project.title }}</span><br>
	            {{ project.content }}
	        </div>
	        <div class="card-action">
	            <a href="{{ project.url }}">Read More</a>
	        </div>
	    </div>
	</div>
	{% endfor %}
</div>

<div class="card">
<div class="card-content" markdown="1">
<span class="card-title">PrePro Collaborative</span><br>
PrePro's a club where we showcase our work, collaborating in a team environment, and chilling with friends. On Pitch Day, people with a concept for a game, or other media, will describe it to the group. We will then vote on which project we want to work on for the semester. Regular meetings after that will be like a studio setting with everyone pitching in their creative talents, whether that be art, music, voice acting, coding, and writing. You can also bring in outside work that you want reviewed and showcased. Overall, the club can give you a chance to work on your portfolio outside of classwork.

Of course, this is all at your own leisure. We don't expect to have a finished prototype by the end of the semester; whatever you can contribute is cool! You are free to come and go as you please, work on whatever and just hang out with friends! Chat it up with fellow members over games, art, dank memes- whatever floats your boat! Not to mention, snacks will be provided!

##### Officers

**President:** Denzel Buenafe

**Vice President:** Wil Gilmore

**Secretary:** Archit Singh

**Treasurer:** Andrew Ward

**Webmaster:** Anthony Lawn
</div>
</div>

<div class="card">
<div class="card-content" markdown="1">
<span class="card-title">Club Information</span><br>
PrePro has meetings every Friday from 4-7pm in room ATC 2.602. Snacks may be served. We also have the following special types of meetings:

**Pitch Day**

At the beginning of every semester we'll have a day where anyone can present their idea for the game the club will work on that semester! Here are some things to include in your pitch:

- Basic Mechanics/Gameplay
- Genre
- Art direction/style
- Story summary
- Scope

Ideally, these would be presented either a powerpoint or design document, the latter of which you can see an example of [here](https://docs.google.com/document/d/107fZhJi9IeexC_kS7h-lza4mn-7zUPgsJdleXpzwzA4/edit?usp=sharing). 

**Game Days**

Our club also has regular game days, which are days where instead of working we just have fun socializing and playing games. Everyone is encouraged to bring their controllers and board games for a casual night of socializing and fun!
</div>
</div>

{% for post in site.posts %}
<div class="card">
<div class="card-content">
<span class="card-title" style="cursor: pointer;">{{ post.title }}</span>
{{ post.excerpt }}
</div>
<div class="card-action">
<a href="{{ post.url }}">Read More</a>
</div>
</div>
{% endfor %}
