import { Card } from '../../../interfaces'
import Set from '../Promos'

const card: Card = {
	name: {
		en: "Ho-Oh BREAK",
		fr: "Ho-Oh TURBO",
	},
	illustrator: "5ban Graphics",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		250,
	],
	hp: 150,
	types: [
		"Fire",
	],
	evolveFrom: {
		en: "Ho-Oh",
		fr: "Ho-Oh",
	},
	stage: "BREAK",


	attacks: [
		{
			cost: [
				"Fire",
				"Fire",
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Shining Flame",
				fr: "Règle des Évolutions TURBO",
			},
			effect: {
				en: "This Pokémon can't use Shining Flame during your next turn.",
			},
			damage: 160,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				fr: "Flamme Brillante",
			},
			effect: {
				fr: "Ce Pokémon ne peut pas utiliser Flamme Brillante pendant votre prochain tour.",
			},
			damage: 160,

		},
	],






}

export default card
