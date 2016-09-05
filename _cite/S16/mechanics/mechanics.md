---
layout: cite
page: Mechanics
project: S16
title: Mechanics Summary
author: Denzel Beunafe
source: https://docs.google.com/document/d/15Mb3byA1BbSot5u1fLHHzQhG_gZKNPLVudQok1xxVZ0/edit?usp=sharing
---
Val is the only party member for the sake of streamlining the game. She has 6 stats:

- **Action(ACT)** meant to simulate how willing a person is to act upon their virtues; the attack; currently tied to Virtue as a modifier, since the more you adhere to a Virtue in general the more likely you are to act upon it.

- **Resilience(RES)** meant to simulate how well you resist things that oppose your virtues; the defense; also affects status effect resistance; currently tied to Virtue as a modifier, since the more you adhere to a Virtue in general the less likely you are to suffer damage because of it.

- **Focus(FOC)** how easily a person can focus on memories/feelings of specific virtues; healing stat; with Val as the only character, healing becomes very important and is implemented for the sake of preventing multi-vice/enemy battles from being too difficult; not tied to Virtue to make healing easier instead of lumping it with ACT or RES

- **Agility(AGI)** how quickly a person can move; determines turn speed, evasion, reaction timer; not tied to Virtue because it doesn’t make sense being tied to it; can be important when dealing with multiple enemies at once, balances out having a one-person party

- **Wisdom(WIS)** the baseline Virtue cap; simulates the experience a person gains and therefore has a greater ability to hold virtue within themselves; there are time when a person’s virtue shines more, so Virtue can go over the WIS cap; however, when it goes below the cap and a person heals, the highest they can go is up the baseline WIS

- **Virtue** the HP; Val has multiple Virtue HP bars to simulate how a person can have differing Virtues; multiple HP bars imitates the effect of having multiple party members and buffers against more difficult enemies; you gain Virtue by meditating(healing) in battle, healing at a save point, or taking an action (dialogue/quests); only the latter can boost Virtue beyond the WIS cap

Battles stick to this basic system. The further you are in the game, the battles become more challenging: multi-vice enemies are added, then multiple enemy battles. Status effects can also be included, representing difficulties encountered when dealing with terrible personalities. As the battles are represented by overworld sprites, some are avoidable for the sake of preventing the game from being too grindy. Like irl conflicts, most times you get to choose which battles you face and appeals to both casual and battle-oriented players.

After battle, you earn gold which you can use to purchase items and equipment to make battle easier. You also gain experience which you can level up with. When you level up, you can earn skill points which you can put towards one of 4 skill trees, which present in order to appeal to different play styles.

Current issues this model has includes:

- Terrible balance issues; the way the system is currently set up, a player might have too much or too little Virtue to effectively survive filler combat; granted, this forces players to keep an eye on all of the Virtues instead of just one just as the game’s philosophy is meant to, but is sacrificing playability for philosophy worth it?

- Healing’s importance forces players to sacrifice a turn as Val is the only character; this might extend battle unnecessarily by forcing players to heal constantly

> **Alternative Implementation of Virtue**
>
> Rather than HP, Virtue can be implemented as one of many MP bars that power all your skills so it can still be tied to attack somehow; however, that would quickly drain Virtue and would overthrow a lot of the philosophy. You don’t become less courageous after a show of bravery or less understanding after you displaying what you have learned about a topic.

Something that is a very radical overhaul of the Virtue-HP system is the Virtue-progress system. This changes not only the creatures found in each region but also battle and game progression. Each land has one Virtue they excel at and have a deficiency in all the others, with one being especially weak. This invites hostile spirits of all the other vices into the region. Virtue is not a battle stat; ACT, RES, and HP are all independent. Rather, Virtue is like a progress bar for restoring balance in a region. The more enemies of a certain vice you defeat, the more of its opposite Virtue increases in the region until the area’s balance is restored (palettes become brighter, npcs gain different dialogue, monsters of a vice eventually disappear from the minor dungeon). After restoring balance, you can then enter the major dungeon and face the boss. Issues with this system might make the story repetitive and not as flexible (unless restoring balance is applied in another way like granting an item or skill or something). Also makes the battle system similar to other turn based rpgs; not much is changed other than battles feel more mandatory storywise.

Virtue could also be implemented as an elemental rock-paper-scissors system like Pokemon; after all, each Virtue can defeat a vice that society has caused. For example, Fire’s vice is wrath. Wrath is defeated by Harmony, which is Nature’s Virtue. Therefore, Nature beats Fire. This could quickly get complex due to 13 elements and lead to match-ups that do not correspond to the classical pairs (i.e. normally Water beats Fire and Fire beats Nature, but here Water beats Light and Fire and Nature beats Fire).

Virtue as indication of your rapport with an enemy (helping the enemy to understand their problems) is another solution. Like in the original system, your Virtues are pitted against the enemy’s vices as HP. However, ACT and RES are not tied to the HP Virtue but instead to the other unused ones. The closer your Virtues match (i.e. enemy has high UND and low CRG and so do you = high match) the more effective your attacks are but the more effective the enemy’s attacks are as well (you both resonate with one another, so it’s easier to get a response). Vice versa, if your Virtues do not match up well your RES goes up but ACT decreases (your values do not match and so it’s easier to ignore the other). You can meditate to heal or increase a stat or forget to decrease a stat to better match your opponent. This involves a lot of strategizing: do you want the battle to be over quickly or guarantee a win over time? Do I decrease my stats now for an easy win but risk having too little HP next time an encounter a spirit? This can make battle increasingly tedious, but it imitates conflict between people whose ideals match or don’t. Status effects would be of greater importance in this kind of battle system. For an example of this in use, play [Taming Dreams](https://play.google.com/store/apps/details?id=air.com.alorafane.tamingdreams&hl=en) on the Android market, first 2 episodes are free.

Virtue is separate from mental stamina (HP) and it is simply an attack/defense modifier. Depending on the amount of the Virtue you have, the stronger or weaker you will be in battle. Virtue can increase or decrease based on external actions take in the Overworld or boosted by meditation in battle. Virtues are specialized attack/defense modifiers against an enemy of the opposite vice.

**Virtues as class:** Following specific Virtues encourage a particular style of fighting. For example, courage as a high DPS, air as primarily AGI focused, etc. Val would be your generic build-your-own character based on fighting style, with flexible skill trees. The problem then becomes how can we make it necessary to become well-rounded?

**Virtue should be:**

- Affected by story(can go up or down based on decisions taken by the player)

- Affected by battle(conflicts are based on ideological battles, therefore your virtues can change as can the enemies)

- The Virtue system should somehow encourage the player to become well-rounded in them by either benefitting the player; though deviation is allowed, extreme specialization in just one Virtue should somehow be punished by the gameplay
