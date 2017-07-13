## JavaScript Project Proposal:
## Rico's Revenge

### Background

Rico's Revenge is a 2d side-scrolling shooter.  Rico, a rogue agent has been left for dead in enemy territory by his former partner Zindane.  Rico's only mission right now is to get out alive and face his demons and coward of a partner.

Rico is tough:

1) Rico will have 5 lives.
2) Rico will can be hit/shot 5 times before dieing.
3) Rico can gun upgrades throughout the level.
4) Rico can jump and crouch, and shoot during both actions.

There are many enemy soldiers and traps that rico must avoid in order to make it out alive..  
#
### Functionality & MVP

Users should be able to:

- [ ] Start and reset the game
- [ ] Shoot/Jump and progress through level
- [ ] Eliminate enemy targets
#
### Wireframe

This app will consist of a single screen with game view, instructions on how to play, mute sound button, and networking links such as my Portfolio, Github and LinkedIn.


![wireframe](https://github.com/codecrutch/RicosRevenge/blob/master/docs/wireframe/game.png)

### Architecture and Technologies

This project will be implemented with the following technologies:

- `JavaScript` for game logic
- `Webpack` to bundle js files
- `HTML Canvas` for displaying graphics

The hardest part will be figuring out how to animate sprites and how to get things to occur at the right time.  There will be a lot of time spent looking into ways to get the animations correct and keeping track of the timeline during the level.

#
### Implementation Timeline

**Day 1**:

- Setup webpack and directory structure
- Bundle all to `ricosrevenge.js`
- Get main page setup with Github/LinkedIn and centered canvas
- Gather sprites for character and background
- Learn how to get background and sprites rendering
- Be able to start and reset game

**Day 2**:
- Setup keyboard shortcuts, WASD and Arrow Keys 
- Player can move across screen
- Player can jump/crouch
- Be able to shoot bullets
- Bullets have collision detection/removed if off screen 

**Day 3**:
- Enemies populated and can fire back
- Setup player health and enemy health logic
- Implement score system
- Add music and sound effects
- Finishing touches on CSS

#
### Bonus features

There are many directions this cellular automata engine could eventually go.  Some anticipated updates are:

- [ ] Save Highscores
- [ ] Change terrain heights
- [ ] Difficulty levels
- [ ] Add Multiple levels
- [ ] Boss cutscene
- [ ] Multiplayer
