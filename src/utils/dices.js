const throwDice = (dice) => 1 + Math.floor(Math.random() * dice)

const d4 = () => throwDice(4)
const d6 = () => throwDice(6)
const d8 = () => throwDice(8)
const d10 = () => throwDice(10)
const d12 = () => throwDice(12)
const d20 = () => throwDice(20)
const d100 = () => throwDice(100)

export { d4, d6, d8, d10, d12, d20, d100, throwDice }
