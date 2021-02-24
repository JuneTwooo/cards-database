import { Card } from '../../../interfaces'
import Set from '../Dragons Exalted'

const card: Card = {
	name: {
		en: "Garchomp",
		fr: "Carchacrok",
	},
	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		445,
	],
	hp: 140,
	types: [
		"Dragon",
	],
	evolveFrom: {
		en: "Gabite",
		fr: "Carmache",
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Fightning",
			],
			name: {
				en: "Mach Cut",
				fr: "Coupe Vive",
			},
			effect: {
				en: "Discard a Special Energy attached to the Defending Pokémon.",
				fr: "Défaussez une Énergie spéciale attachée au Pokémon Défenseur.",
			},
			damage: 60,

		},
		{
			cost: [
				"Water",
				"Fightning",
			],
			name: {
				en: "Dragonblade",
				fr: "Draco-Lame",
			},
			effect: {
				en: "Discard the top 2 cards of your deck.",
				fr: "Défaussez les 2 cartes du dessus de votre deck.",
			},
			damage: 100,

		},
	],
	weaknesses: [
		{
			type: "Dragon",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
