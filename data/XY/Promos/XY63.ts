import { Card } from '../../../interfaces'
import Set from '../Promos'

const card: Card = {
	name: {
		en: "M Absol-EX",
		fr: "M Absol-EX",
	},
	illustrator: "5ban Graphics",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		359,
	],
	hp: 210,
	types: [
		"Darkness",
	],
	evolveFrom: {
		en: "Absol-EX",
		fr: "Absol-EX",
	},
	stage: "MEGA",


	attacks: [
		{
			cost: [
				"Darkness",
				"Darkness",
			],
			name: {
				en: "Disaster Wing",
				fr: "Règle des Méga-Évolutions",
			},
			effect: {
				en: "Discard the top card of your opponent's deck. If that card is a Trainer card, this attack does 80 more damage.",
			},
			damage: 80,

		},
		{
			cost: [
				"Darkness",
				"Darkness",
			],
			name: {
				fr: "Aile du Désastre",
			},
			effect: {
				fr: "Défaussez la carte du dessus du deck de votre adversaire. Si c'est une carte Dresseur, cette attaque inflige 80 dégâts supplémentaires.",
			},
			damage: "80＋",

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],
	retreat: 2,



}

export default card
