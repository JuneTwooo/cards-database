import { Card } from '../../../interfaces'
import Set from '../Unseen Forces'

const card: Card = {
	name: {
		en: "Ho-Oh",
	},
	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		250,
	],
	hp: 80,
	types: [
		"Fire",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Gust",
			},

			damage: 20,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Sacred Fire",
			},
			effect: {
				en: "Flip a coin. If heads, choose 1 of your opponent's Pokémon. This attack does 60 damage to that Pokémon. This attack's damage isn't affected by Weakness or Resistance.",
			},

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],





}

export default card
