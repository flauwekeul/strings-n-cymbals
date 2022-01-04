# Strings ’n’ Cymbals

🚧 **Work in progress** These are mainly ideas and may change radically 🚧

A card game where the player manages a band of 3 musicians. Each round the player chooses which cards are played from a drawn hand. Each band member has action points that are used to "pay" for cards. Some cards have an immediate effect, others represent an event where the player must choose an outcome. The band can gain idea cards that can be used to compose songs. The band can do shows where their songs are performed.

## Character creation

### Skills

* vocal
* strings (guitar and bass)
* percussion
* keys

### Traits
Traits have a positive, negative or no cost. When the trait has a positive effect, its cost is positive. Traits with negative effects have a negative cost. The player must choose a combination of traits (or no traits) that result in net 0 cost. Traits often introduce cards to the game. Traits can become manifest more in later phases of the game. E.g.: a junkie may have more energy in the beginning, but gets serious problems later.

[More inspiration](http://ideonomy.mit.edu/essays/traits.html).

#### Positive traits
* Educated
  * cards: CUSHY_JOB, PROMOTION, BOSS_WANTS_TO_SEE_YOU
  * excludes: Uneducated
* Special voice
  * cards: something for during shows
* Charming
  * cards: something to improve relations
* Flamboyant
  * cards: something for during shows / PR
  * excludes: Gloomy
* Organized
  * cards: EFFICIENCY
  * excludes: Chaotic, Tardy
* Poet
  * cards: something to improve Lyrics cards
* Dancer
  * cards: something for during shows
  * excludes: Clumsy
* Ascetic (practice, practice, practice)
  * cards:
* Good looking
  * cards:
* Cook
  * cards:
* Mechanic
  * cards:
* Sugardaddy
  * cards: CALL_PAPA, DISAPPROVAL

#### Neutral traits
* Perfectionist (goes the extra mile, but sometimes without results)
  * cards:
  * excludes: Tardy
* Sentimental (great for performing, but may get in the way)
  * cards:
  * excludes: Narcissist
* Activist (protest songs, political)
  * cards:
  * excludes: Frivolous

#### Negative traits
* Heavy drinker
  * cards: DRUNK, HUNGOVER
* Junkie
  * cards: JACKED, STONED, WITHDRAWAL
* Gloomy (depressing)
  * cards: DEPRESSED
  * excludes: Flamboyant
* Volatile
  * cards:
* Chaotic
  * cards: CHAOS
  * excludes: Organized
* Smoker
  * cards: PACK_O_SMOKES
* Tardy (being late often)
  * cards:
  * excludes: Organized
* Promiscuous (*very* sexually active)
  * cards: STD
* Frivolous (superficial)
  * cards:
  * excludes: Activist
* Sweater (sweats a lot)
  * cards:
* Passenger (can't drive vehicles)
  * cards:
* Clumsy
  * cards: OOPS
  * excludes: Dancer
* Insubordinate
  * effect: can't work

### Relations: band members, friends and acquaintances
Band members are often friends or siblings. Relations can be an acquaintance, friend, BFF or family. Acquaintances have some traits hidden; they can be discovered later. Band members can have annoyances with each other, too many of those and the relation needs to be mended.

## Stats

### Fame
This indicates how known/famous your band is. The band can achieve up to 10 (?) levels of fame (non-linear). Each level adds/removes cards from the game. The sooner you reach the max level, the better. Each level has its own goals.

0. Unknown
1. Beginner: do 1 show (3 fans)
2. Local: do 5 shows (10 fans)
3. Regional: do shows in 3 different venues (30 fans)
4. Ether: get played on the radio (100 fans)
5. TV: perform on a local tv station (300 fans)
6. Sensation: go viral (1k fans)
7. ? (5k fans)
8. ? (20k fans)
9. Superstars: perform in a stadium (100k fans)
10. Legend: have 1M fans

### Fans
See fame.

### APs (action points)
Used to "pay" for action cards. They represent the energy of each band member.

### Money
Needed to buy things and pay for recurring costs (rent, gas, cigarettes, booze).

### Inspiration
Can strongly fluctuate. Can boost/lessen the outcome of actions related to songwriting significantly.

Decide:
* Inspiration is needed to "pay for" idea cards? But inspiration can also be used to alter songs or ...?
* "Gain _n_ inspiration" is replaced by "Draw _n_ idea cards"?

## Cards
Can be upgraded (usually once). A lot of cards must be unlocked by playing the game (so they appear in later games). Cards have a rarity (common, uncommon, rare, unique(?)).

### Types

* Play cards
  * Action cards: see below
  * Event cards: cards that can't be played but cause an effect
  * Story cards: player must choose from multiple options, each with a different effect and cost
* Idea cards: see below

### Action cards
Are drawn from a deck into the hand each round. They have a cost of 0 or more action points. They're subdivided into categories:

* **Instant**: has immediately effect, may have secondary effects.
* **Passive**: has effect (positive/negative) that last multiple rounds. Are "attached" to band member.
* **Snag**: has negative effect; can't be played or must be played if a condition isn't met. Can also bloat the deck to prevent useful cards from being played.

### Event cards
~~Are drawn from a separate deck and can only be drawn when an action card permits it.~~ They can have any outcome (positive/negative). Event cards may result in a future event like a show, interview or recording. The player needs to prepare for these events in order to successfully complete them.

### Story cards


### Idea cards
Are composed (and only relevant) during songwriting into songs. The deck consists of 112 cards:

* 4 suits (Melody, Lyrics, Chords, Rhythm)
* each suit has 28 cards (7+6+5+4+3+2+1): 7 ones, 6 twos, 5 threes, etc. (7th triangular number) (average rank: 4)

Cards have to be arranged in a 3x3 grid to make horizontal, vertical and diagonal combos. A combo is any of these: same numbers, consecutive numbers or same suit. A supercombo is a either same numbers AND same suit or consecutive numbers AND same suit. The grid requires at least 1 card of each suit. A song's *potential* is calculated as follows:

* sum the numbers of all 9 cards
* multiply that by the amount of combos (horizontal, vertical and diagonal)
* if there are any supercombos: multiply that by twice the amount of supercombos
* `score = sum * combos * (supercombos * 2 || 1)`

Example:
```
 C3 | L3 | C3  Score:
----+----+----   - sum of all numbers: 3+3+3+2+4+4+1+5+5 = 30
 L2 | L4 | M4    - combos: 1 horizontal + 4 vertical + 1 diagonal = 6
----+----+----   - supercombos: 1
 L1 | L5 | R5  Total: 30 * 6 * 1 * 2 = 360
```

Min score:
```
 L1 | C1 | R2  Score:
----+----+----   - sum of all numbers: 1+1+2+1+2+1+2+1+1 = 12
 M1 | R2 | C1    - combos: 0 horizontal + 0 vertical + 1 diagonal = 1
----+----+----   - supercombos: 0
 C2 | L1 | L1  Total: 12 * 1 * 1 = 12
```

Max score:
```
 C5 | L5 | M5  Score:
----+----+----   - sum of all numbers: 5+5+5+6+6+6+7+7+7 = 54
 C6 | L6 | M6    - combos: 3 horizontal + 5 vertical + 2 diagonal = 10
----+----+----   - supercombos: 2
 R7 | L7 | M7  Total: 54 * 10 * 2 * 2 = 2160
```

#### Jargon that may be used to give cards some flavour

[Cadence](https://blog.landr.com/cadences-songwriting/), tuplets, augmented fifth, diminished seventh, [downbeat, upbeat, backbeat](https://en.wikipedia.org/wiki/Beat_(music)#Backbeat), circle of fifths, chromatic harmony, [diatonic scale](https://en.wikipedia.org/wiki/Diatonic_scale), diminished triad, half/double time, groove, inversion, lydian dominant, melodic minor, modulation, lick/riff, blue note, (tritone) substitution, syncopation, timbre, tonic minor, triad,

## Shows

Shows can be *auto-resolved* (to prevent it from being tedious). Then a chance of success is shown and a simple "die roll" determines the outcome. If the player chooses to play the show themselves:

TODO:

## End game
The game ends when either of these things happen:

* You achieve max fame
* You run out of money (for *n* days)
* When you reach 0 fame after your first show?
* Certain (story) cards can result in death or something else that ends your musical career

## Backlog

1. [ ] Deck of ~20 action cards
2. [ ] Deck of ~10 event cards
3. [ ] Basic UI (decks, hand, stats)
4. [ ] Shuffle deck, draw cards, play cards
5. [ ] Jamming: idea cards
6. [ ] Upcoming events
7. [ ] Shows
8. [ ] Character creation and traits
9. [ ] Relations
