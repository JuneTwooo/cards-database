import { Card } from '../../../interfaces'
import Set from '../Macdonald\'s Collection 2021'

const card: Card = {
	name: {
		en: "Turtwig",
	},
	illustrator: "OOYAMA",
	rarity: "None",
	category: "Pokemon",

	set: Set,
	dexId: [
		1,
	],
	hp: 80,
	types: [
		"Grass",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Tackle",
			},

			damage: 20,

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
			],
			name: {
				en: "Razor Leaf",
			},

			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "x2"
		},
	],

	retreat: 2,



}

export default card
