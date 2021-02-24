import { Card } from '../../../interfaces'
import Set from '../Vivid Voltage'

const card: Card = {
	name: {
		en: "Steelix V",
	},
	illustrator: "Satoshi Shirai",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,

	hp: 250,
	types: [
		"Metal",
	],




	attacks: [
		{
			cost: [
				"Metal",
				"Colorless",
			],
			name: {
				en: "Raging Hammer",
			},
			effect: {
				en: "This attack does 10 more damage for each damage counter on this Pokémon.",
			},
			damage: "30+",

		},
		{
			cost: [
				"Metal",
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Iron Tackle",
			},
			effect: {
				en: "This Pokémon also does 30 damage to itself.",
			},
			damage: 210,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Grass",
			value: "-30"
		},
	],
	retreat: 4,



}

export default card
