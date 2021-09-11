import { d6 } from '../utils/dices.js'

const odds = {
  likely: 1,
  even: 0,
  unlikely: -1,
}

const throwSecondDie = (firstDie) => {
  const secondTry = d6()
  return firstDie < secondTry ? secondTry : firstDie
}

export const recluse = {
  // likely is 0 for even checks, 1 for 'likely' checks and -1 for 'unlikely' checks
  check: (likely = odds.even) => {
    let whiteDie = d6()
    if (likely === odds.likely) whiteDie = throwSecondDie(whiteDie)

    let blackDie = d6()
    if (likely === odds.unlikely) blackDie = throwSecondDie(blackDie)

    let response = whiteDie > blackDie ? 'Yes' : 'No'
    response += whiteDie < 4 && blackDie < 4 ? ' but...' : ''
    response += whiteDie > 3 && blackDie > 3 ? ' and...' : ''
    response = whiteDie === blackDie ? 'The question was wrong! Why?' : response

    return response
  },
}
