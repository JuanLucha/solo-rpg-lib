import { d10, d100 } from '../utils/dices.js'
import { isOdd } from '../utils/helpers.js'

export const mythic = {
  chaosFactor: 4,
  setChaosFactor: function (chaosFactor) {
    const validatedChaosFactor =
      chaosFactor > 6 ? 6 : chaosFactor < 3 ? 3 : chaosFactor
    this.chaosFactor = validatedChaosFactor
  },
  increaseChaosFactor: function () {
    return this.setChaosFactor(this.chaosFactor + 1)
  },
  decreaseChaosFactor: function () {
    return this.setChaosFactor(this.chaosFactor - 1)
  },
  fateCheck: function (modifier) {
    const dice1 = d10()
    const dice2 = d10()
    const chaosDice = d10()

    let result = dice1 + dice2 + modifier < 10 ? 'No' : 'Yes'
    let randomEvent = false
    if (chaosDice <= this.chaosFactor) {
      if (isOdd(dice1) && isOdd(dice2)) {
        result = `Exceptional ${result.toLowerCase()}`
      } else if (!isOdd(dice1) && !isOdd(dice2)) {
        randomEvent = true
        result += ` and random event - `
      } else if (dice1 === dice2) {
        randomEvent = true
        result = `Exceptional ${result.toLowerCase()} and random event - `
      }
      if (randomEvent) {
        result += this.eventCheck()
      }
    }

    return result
  },
  eventCheck: function () {
    const die = d100()
    let randomEvent = ''
    if (die < 8) {
      randomEvent = 'Remove event: '
    } else if (die > 7 && die < 29) {
      randomEvent = 'NPC action: '
    } else if (die > 28 && die < 36) {
      randomEvent = 'Introduce a new NPC: '
    } else if (die > 35 && die < 46) {
      randomEvent = 'Move toward a thread: '
    } else if (die > 45 && die < 53) {
      randomEvent = 'Move away from a thread: '
    } else if (die > 52 && die < 56) {
      randomEvent = 'Close a thread: '
    } else if (die > 55 && die < 68) {
      randomEvent = 'PC negative: '
    } else if (die > 67 && die < 76) {
      randomEvent = 'PC positive: '
    } else if (die > 75 && die < 84) {
      randomEvent = 'Ambiguous event: '
    } else if (die > 83 && die < 93) {
      randomEvent = 'NPC negative: '
    } else if (die > 92 && die < 100) {
      randomEvent = 'NPC positive: '
    }

    randomEvent += this.getEventMeaning()

    return randomEvent
  },
  getEventMeaning: function () {
    return `${this.getActions()}, ${this.getDescriptors()}`
  },
  getActions: function () {
    return d10() > 5 ? eventActions1[d100() - 1] : eventActions2[d100() - 1]
  },
  getDescriptors: function () {
    return d10() > 5
      ? eventDescriptors1[d100() - 1]
      : eventDescriptors2[d100() - 1]
  },
  detailsCheck: function () {
    let dice = d10() + d10()
    dice += this.chaosFactor === 3 ? +2 : this.chaosFactor === 6 ? -2 : 0
    dice = dice < 4 ? 4 : dice > 18 ? 18 : dice
    return `${details[dice]}: ${this.getEventMeaning()}`
  },
}

// constants
const eventActions1 = [
  'Attainment',
  'Starting',
  'Neglect',
  'Fight',
  'Recruit',
  'Triumph',
  'Violate',
  'Oppose',
  'Malice',
  'Communicate',
  'Persecute',
  'Increase',
  'Decrease',
  'Abandon',
  'Gratify',
  'Inquire',
  'Antagonize',
  'Move',
  'Waste',
  'Truce',
  'Expose',
  'Haggle',
  'Imprison',
  'Release',
  'Celebrate',
  'Develop',
  'Travel',
  'Block',
  'Harm',
  'Debase',
  'Overindulge',
  'Adjourn',
  'Adversity',
  'Kill',
  'Disrupt',
  'Usurp',
  'Create',
  'Betray',
  'Agree',
  'Abuse',
  'Excitement',
  'Activity',
  'Assist',
  'Care',
  'Negligence',
  'Passion',
  'Work',
  'Control',
  'Attract',
  'Failure',
  'Pursue',
  'Vengeance',
  'Proceedings',
  'Dispute',
  'Punish',
  'Guide',
  'Transform',
  'Overthrow',
  'Oppress',
  'Change',
  'Release',
  'Befriend',
  'Judge',
  'Desert',
  'Dominate',
  'Procrastinate',
  'Praise',
  'Separate',
  'Take',
  'Break',
  'Heal',
  'Delay',
  'Stop',
  'Lie',
  'Return',
  'Imitate',
  'Struggle',
  'Inform',
  'Bestow',
  'Postpone',
  'Oppress',
  'Inspect',
  'Ambush',
  'Spy',
  'Attach',
  'Carry',
  'Open',
  'Carelessness',
  'Ruin',
  'Extravagance',
  'Trick',
  'Arrive',
  'Propose',
  'Divide',
  'Refuse',
  'Mistrust',
  'Deceive',
  'Cruelty',
  'Intolerance',
  'Trust',
]

const eventActions2 = [
  'Goals',
  'Dreams',
  'Environment',
  'Outside',
  'Inside',
  'Reality',
  'Allies',
  'Enemies',
  'Evil',
  'Good',
  'Emotions',
  'Opposition',
  'War',
  'Peace',
  'Innocent',
  'Love',
  'Spirit',
  'Intellect',
  'Ideas',
  'Joy',
  'Advice',
  'Plot',
  'Competition',
  'Prison',
  'Illness',
  'Food',
  'Attention',
  'Success',
  'Failure',
  'Travel',
  'Jealousy',
  'Dispute',
  'Home',
  'Investment',
  'Suffering',
  'Wishes',
  'Tactics',
  'Stalemate',
  'Randomness',
  'Misfortune',
  'Victory',
  'Dispute',
  'Riches',
  'Normal',
  'Technology',
  'Hope',
  'Magic',
  'Illusions',
  'Portals',
  'Danger',
  'Weapons',
  'Animals',
  'Weather',
  'Elements',
  'Nature',
  'Masses',
  'Leadership',
  'Fame',
  'Anger',
  'Information',
  'Messages',
  'Energy',
  'Balance',
  'Tension',
  'Friendship',
  'Physical',
  'Project',
  'Pleasures',
  'Pain',
  'Possessions',
  'Benefits',
  'Plans',
  'Lies',
  'Expectations',
  'Legal',
  'Bureaucracy',
  'Business',
  'Path',
  'News',
  'Exterior',
  'Death',
  'Disruption',
  'Power',
  'Burden',
  'Intrigues',
  'Fears',
  'Ambush',
  'Rumor',
  'Wounds',
  'Extravagance',
  'Representative',
  'Adversities',
  'Opulence',
  'Liberty',
  'Military',
  'Mundane',
  'Trials',
  'Masses',
  'Vehicle',
  'Art',
]

const eventDescriptors1 = [
  'Abnormally',
  'Adventurously',
  'Aggressively',
  'Angrily',
  'Anxiously',
  'Awkwardly',
  'Beautifully',
  'Bleakly',
  'Boldly',
  'Bravely',
  'Busily',
  'Calmly',
  'Carefully',
  'Carelessly',
  'Cautiously',
  'Ceaselessly',
  'Cheerfully',
  'Combatively',
  'Coolly',
  'Crazily',
  'Fully',
  'Generously',
  'Gently',
  'Gladly',
  'Gracefully',
  'Gratefully',
  'Happily',
  'Hastily',
  'Healthily',
  'Helpfully',
  'Helplessly',
  'Hopelessly',
  'Innocently',
  'Intensely',
  'Interestingly',
  'Irritatingly',
  'Jovially',
  'Joyfully',
  'Judgementally',
  'Kindly',
  'Peacefully',
  'Perfectly',
  'Playfully',
  'Politely',
  'Positively',
  'Powerfully',
  'Quaintly',
  'Quarrelsomely',
  'Quietly',
  'Roughly',
  'Rudely',
  'Ruthlessly',
  'Slowly',
  'Softly',
  'Swiftly',
  'Threateningly',
  'Very',
  'Violently',
  'Wildly',
  'Yieldingly',
  'Curiously',
  'Daintily',
  'Dangerously',
  'Defiantly',
  'Deliberately',
  'Delightfully',
  'Dimly',
  'Efficiently',
  'Energetically',
  'Enormously',
  'Enthusiastically',
  'Excitedly',
  'Fearfully',
  'Ferociously',
  'Fiercely',
  'Foolishly',
  'Fortunately',
  'Frantically',
  'Freely',
  'Frighteningly',
  'Kookily',
  'Lazily',
  'Lightly',
  'Loosely',
  'Loudly',
  'Lovingly',
  'Loyally',
  'Majestically',
  'Meaningfully',
  'Mechanically',
  'Miserably',
  'Mockingly',
  'Mysteriously',
  'Naturally',
  'Neatly',
  'Nicely',
  'Oddly',
  'Offensively',
  'Officially',
  'Partially',
]

const eventDescriptors2 = [
  'Abandoned',
  'Abnormal',
  'Amusing',
  'Ancient',
  'Aromatic',
  'Average',
  'Beautiful',
  'Bizarre',
  'Classy',
  'Clean',
  'Cold',
  'Colorful',
  'Creepy',
  'Cute',
  'Damaged',
  'Dark',
  'Defeated',
  'Delicate',
  'Delightful',
  'Dirty',
  'Graceful',
  'Hard',
  'Harsh',
  'Healthy',
  'Heavy',
  'Historical',
  'Horrible',
  'Important',
  'Interesting',
  'Juvenile',
  'Lacking',
  'Lame',
  'Large',
  'Lavish',
  'Lean',
  'Less',
  'Lethal',
  'Lonely',
  'Lovely',
  'Macabre',
  'Remarkable',
  'Rotten',
  'Rough',
  'Ruined',
  'Rustic',
  'Scary',
  'Simple',
  'Small',
  'Smelly',
  'Smooth',
  'Soft',
  'Strong',
  'Tranquil',
  'Ugly',
  'Valuable',
  'Warlike',
  'Warm',
  'Watery',
  'Weak',
  'Young',
  'Disagreeable',
  'Disgusting',
  'Drab',
  'Dry',
  'Dull',
  'Empty',
  'Enormous',
  'Exotic',
  'Faded',
  'Familiar',
  'Fancy',
  'Fat',
  'Feeble',
  'Feminine',
  'Festive',
  'Flawless',
  'Fresh',
  'Full',
  'Glorious',
  'Good',
  'Magnificent',
  'Masculine',
  'Mature',
  'Messy',
  'Mighty',
  'Military',
  'Modern',
  'Extravagant',
  'Mundane',
  'Mysterious',
  'Natural',
  'Nondescript',
  'Odd',
  'Pale',
  'Petite',
  'Poor',
  'Powerful',
  'Quaint',
  'Rare',
  'Reassuring',
]

const details = [
  'Anger',
  'Sadness',
  'Fear',
  'Disfavors Thread',
  'Disfavors PC',
  'Focus NPC',
  'Favors NPC',
  'Focus PC',
  'Disfavors NPC',
  'Focus Thread',
  'Favors PC',
  'Favors Thread',
  'Courage',
  'Happiness',
  'Calm',
]