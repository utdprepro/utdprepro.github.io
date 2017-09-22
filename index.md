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

<div class="card">
<div class="card-content" markdown="1">
<span class="card-title">Mailing List Signup</span><br>
<!-- Begin MailChimp Signup Form -->
<link href="//cdn-images.mailchimp.com/embedcode/classic-10_7.css" rel="stylesheet" type="text/css">
<style type="text/css">
	#mc_embed_signup{background:#fff; clear:left; font:14px Helvetica,Arial,sans-serif; }
	/* Add your own MailChimp form style overrides in your site stylesheet or in this style block.
	   We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */
</style>
<div id="mc_embed_signup">
<form action="//facebook.us14.list-manage.com/subscribe/post?u=aaf1d3e60a4e6d867b88fed02&amp;id=59fec92c10" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
    <div id="mc_embed_signup_scroll">
<div class="indicates-required"><span class="asterisk">*</span> indicates required</div>
<div class="mc-field-group">
	<label for="mce-EMAIL">Email Address  <span class="asterisk">*</span>
</label>
	<input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL">
</div>
<div class="mc-field-group">
	<label for="mce-FNAME">First Name </label>
	<input type="text" value="" name="FNAME" class="" id="mce-FNAME">
</div>
<div class="mc-field-group">
	<label for="mce-LNAME">Last Name </label>
	<input type="text" value="" name="LNAME" class="" id="mce-LNAME">
</div>
<div class="mc-field-group">
	<label for="mce-MMERGE3">Name </label>
	<input type="text" value="" name="MMERGE3" class="" id="mce-MMERGE3">
</div>
	<div id="mce-responses" class="clear">
		<div class="response" id="mce-error-response" style="display:none"></div>
		<div class="response" id="mce-success-response" style="display:none"></div>
	</div>    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
    <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_aaf1d3e60a4e6d867b88fed02_59fec92c10" tabindex="-1" value=""></div>
    <div class="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button"></div>
    </div>
</form>
</div>
<script type='text/javascript' src='//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js'></script><script type='text/javascript'>(function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[0]='EMAIL';ftypes[0]='email';fnames[1]='FNAME';ftypes[1]='text';fnames[2]='LNAME';ftypes[2]='text';fnames[3]='MMERGE3';ftypes[3]='text';}(jQuery));var $mcj = jQuery.noConflict(true);</script>
<!--End mc_embed_signup-->
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
