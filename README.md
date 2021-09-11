# Solo RPG Lib

## The library of tools to play roleplaying games solo

### Oracles included

- Mythic (all types of checks but the behavior one)
- Recluse (only the basic check)

### How to use

First, install the library in your project:

```
npm install --save solo-rpg-lib

or

yarn add solo-rpg-lib
```

Then you can include the oracles in your code and use them like this:

```
import { mythic, recluse } from 'solo-rpg-lib'

console.log(recluse.check()) // params -1, 0 or 1 for unlikely, even or likely
console.log(mythic.chaosFactor)
console.log(mythic.setChaosFactor(5)) // param from 3 to 6
console.log(mythic.increaseChaosFactor())
console.log(mythic.decreaseChaosFactor())
console.log(mythic.fateCheck(2)) // param modifier, from -8 to +8 for 'impossible' to 'has to be'
console.log(mythic.eventCheck())
console.log(mythic.getEventMeaning())
console.log(mythic.getActions())
console.log(mythic.getDescriptors())
console.log(mythic.getDetailsCheck())
```

TODO: a proper doc for the library :D

### Special thanks to

- Tana Pigeon, for letting me include her Mythic system into this library (buy her amazing products in [Word Mill Games](https://www.wordmillgames.com/))
- Jose from [RPGTips](https://rpg-tips.github.io/crimsonscholar/), for inspiring this library and letting me use some of his arrays of words.

### TODO:

- almost everything, including a proper README file :D
