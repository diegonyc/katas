# Rock Paper Scissors		

The classical rock-papers-scissors game.

## Requirements
The kata is completed if it passes the following minimum acceptance tests:

> It has a Player vs computer mode.

In this mode, the player can play the computer by himself. In essence, this
is the single player version of the game.

> It has a computer vs computer mode.

This is the spectator mode of the game. Here the player does not participate.
Instead, both player choices/movements/weapons are auto selected. You can see
their accumulated scores in the game and each round.

> In-memory game state management.
This means that, as you play, you should be able to see basic game metrics.
For example, number of victories, games played until date, or a win/lose ratio
(similar to KDA in other games).

### Bonus Points
The following is a non-exhaustive list of tasks or indicators of a higher
quality implementation.

- documentation: build and usage instructions
- feature: nice user interface
- feature: additional nice-to-have game mechanics. Be creative!
- tests: not much to add.
- documentation: show the thought process inside the code in the form of
  internal documentation or comments. Which leads me to,
- documentation: of the public methods and functions of your code. One of the
  best ways to extend code--besides following the dependency inversion
  principle--is to have a great public-facing API. This allows anybody to
  grasp your code fast and even add plugins to it
- meta: any indication of uses of software design, such as design patterns. If
  you use a particular pattern, e.g. strategy; or an architectural principle,
  such as the open-closed principle of the SOLID principles.


## Programming muscles trained

This kata trains the following programming muscles:

- Polymorphism. The core of object oriented programming
  - Useful to create new types without much trouble. Unlike data structures,
  polymorphism and objects are great to add additional types that implement
  existing functionality in a decoupled way. The holy grail of many
  programming projects. Since we have different weapons (rock, paper, and
  scissors), polymorphism *may* be useful to implement the different aspects
  of weapons.
- Basic data structures. Such as maps and arrays.
- Functional programming higher-order functions.
 - Depending on the implementation, `map`, `filter`, and `reduce` can all be
 great assets while creating the game.