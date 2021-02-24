import { Card } from '../../../interfaces'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		en: "Skitty",
		fr: "Skitty",
	},
	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		300,
	],
	hp: 60,
	types: [
		"Colorless",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Fake Out",
				fr: "Bluff",
			},
			effect: {
				en: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c’est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
			},
			damage: 10,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
