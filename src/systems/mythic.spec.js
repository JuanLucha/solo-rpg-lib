import { mythic } from './mythic.js'
import { expect } from 'chai'

describe('Mythic GM Emulator', () => {
  describe('Chaos factor', () => {
    it('sets the chaos factor inside boundaries', () => {
      const cases = [
        { input: 1, output: 3 },
        { input: 2, output: 3 },
        { input: 3, output: 3 },
        { input: 4, output: 4 },
        { input: 5, output: 5 },
        { input: 6, output: 6 },
        { input: 7, output: 6 },
        { input: 8, output: 6 },
        { input: 9, output: 6 },
      ]

      cases.forEach((useCase) => {
        mythic.setChaosFactor(useCase.input)
        expect(mythic.chaosFactor).to.equal(useCase.output)
      })
    })
  })
})
