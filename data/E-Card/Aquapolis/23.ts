import { Card } from '../../../interfaces'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		en: "Muk",
	},
	illustrator: "Hajime Kusajima",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		89,
	],
	hp: 70,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Grimer",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Heavyweight",
			},
			effect: {
				en: "As long as there is a Grass Energy attached to Muk, you must pay an additional ColorlessColorless to retreat it.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Burning Sludge",
			},
			effect: {
				en: "Flip a number of coins equal to the amount of Energy attached to Muk. If any of them are heads, the Defending Pokémon is now Poisoned and Burned.",
			},

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],





}

export default card
