import { Card } from '../../../interfaces'
import Set from '../Great Encounters'

const card: Card = {
	name: {
		en: "Beedrill",
		fr: "Dardargnan",
	},
	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		15,
	],
	hp: 110,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Kakuna",
		fr: "Coconfort",
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Band Attack",
				fr: "Attaque de groupe",
			},
			effect: {
				en: "Does 30 damage times the number of Beedrill you have in play.",
				fr: "Inflige 30 dégâts multipliés par le nombre de Dardargnan que vous avez en jeu.",
			},
			damage: 30,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Twineedle",
				fr: "Double-dard",
			},
			effect: {
				en: "Flip 2 coins. This attack does 50 damage times the number of heads.",
				fr: "Lancez 2 pièces. Cette attaque inflige 50 dégâts multipliés par le nombre de faces.",
			},
			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "+30"
		},
	],





}

export default card
