import { Card } from '../../../interfaces'
import Set from '../Triumphant'

const card: Card = {
	name: {
		en: "Kricketot",
		fr: "Crikzik",
	},
	illustrator: "Tomokazu Komiya",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		401,
	],
	hp: 50,
	types: [
		"Grass",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Beat",
				fr: "Bataille",
			},

			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
