import { Card } from '../../../interfaces'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		en: "Hitmonchan",
		fr: "Tygnon",
	},
	illustrator: "Shigenori Negishi",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,

	hp: 120,
	types: [
		"Fightning",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Fightning",
			],
			name: {
				en: "Coordinated Beatdown",
				fr: "Dérouillée Coordonnée",
			},
			effect: {
				en: "If Hitmonlee is on your Bench, this attack does 20 more damage.",
				fr: "Si Kicklee est sur votre Banc, cette attaque inflige 20 dégâts supplémentaires.",
			},
			damage: "20+",

		},
		{
			cost: [
				"Fightning",
				"Fightning",
			],
			name: {
				en: "Mach Cross",
				fr: "Passage Éclair",
			},

			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
