---
layout: cite
page: Mechanics
project: F15
title: Systems
author: [Caleb Pond, Aamir Syed, Ed Stevenson, Tomer Braff]
media: Text
source: https://docs.google.com/document/d/1GjwVWnLeDUU-r5PCRACQ6vopf6BhAnov4TLLJ_v56yo/edit?usp=sharing
---
### Overarching Systems
Travel

- Open world

- Restrictions on traveling will by placed with in-world/game things/reasons

- Fast travel will be with boats, airships, etc.

Movement

Speed = `min(s * h * ds * b, max*b)`

- `s` = Base land speed

- `h` = hardiness coefficient

- `ds` = decrease in speed due to armour

- `b` = bonus modifier to speed

Jumping

- No mid air direction change

- Speed is affected by armour, jump height is constant

- Fixed jump (no hold for higher jump)

Dialogue Trees

- Morality System

    - Vertical Axis Good/Bad that is universal for all factions

    - Horizontal Axis of Famous/Infamous that is specific on a faction per faction basis

        - Ex. Bandits attack villagers. If you kill all the bandits, you become infamous with the bandits, famous with the villagers, and bad with both.

Inventory/Loot

- Items are limited by weight

- Accessed via menu (not list)

### Combat

Player vs. Enemy AI

Player Specific Combat:

- Like Dragons Dogma ( All specifications )

- "Light Attacks" (Name not Final) is Comboable and Cancellable

- "Heavy Attack/Ability" Non Combable/Canceable

    - After attack player always returns to nuetral state

- Ranged attacks have two modes

    - "Quickfire" launches projectile in direction of movement a set distance

    - "Aiming" draws camera in close and creates reticle

    - Thrown projectiles have fixed distance, arc depends on which way player is facing while aiming

    - Path is not plotted during the throw

- Items used during combat are instantaneous and don’t leave player vulnerable

- Health regen will have a "Soft Cap", where health will regenerate quickly to a certain midpoint, than start regenerating much slower

- Abilities/mechanics are going to be unlocked through narrative progression (Think Legend of Zelda)

- When player is hit they flinch. Flinches make player immobile briefly and small knockback.

    - Flinch is affected by how hard the player is hit and their strength stat.

Party Based Combat:

Base Stats

- Strength

    - Effects encumbrance

    - Combat capabilities

        - Flat damage

        - Health

        - Effects flinch

        - Allows character to lift heavier weapons

    - Charisma

        - Effects dialogue tree options

        - Increases ability for negotiations to be successful, and the end result

    - Speed

        - Faster combo chains/attack speed

        - Movespeed

    - Intelligence

        - Ability to operate machinery

            - Limit or increase options for machine interactions

            - Allow access to more mechanistic weapons

### Quest

Time-limited

- Quests are the main determining factor for ending

### Individual Character Systems

Different Status bar per character

- Troop Morale

    - Combat/Decisions before each encounter

    - Recruitment

- Reputation

    - Traveling Merchant/Supply & Demand

    - Ship System

- Survival

    - ???

    - Flying/divebomb

    - Allies

- Political Support

    - Bribing People/Giving Speeches

Mavrock - King

- Tree of Influence - Main system for Mavrock

    - Visualized as a tree whose nodes consist of all characters Mavrock can interact with. It begins with all except a few nodes greyed out.

    - Mavrock can collect bit of information in his journal (some menu type ui). Collecting info on specific characters unlocks that characters node in the tree.

    - When a node in the tree is unlocked, it results in either a new ability for Mavrock (ability to build helper robots in combat, etc.), new dialog options for Mavrock when talking to certain characters (telling guards who are loyal to a noble who under your influence to do an action, etc.), or story progression.

    - The "Influence" bar for Mavrock fills as more nodes in the Tree of Influence are unlocked.
