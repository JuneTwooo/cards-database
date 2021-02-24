import { Card } from '../../../interfaces'
import Set from '../Triumphant'

const card: Card = {
	name: {
		en: "Nidoking",
		fr: "Nidoking",
	},
	illustrator: "match",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		34,
	],
	hp: 140,
	types: [
		"Fightning",
	],
	evolveFrom: {
		en: "Nidorino",
		fr: "Nidorino",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Pheromone Stamina",
				fr: "Endurance aux phéromones",
			},
			effect: {
				en: "Nidoking gets +20 HP for each Nidoqueen you have in play.",
				fr: "Nidoking reçoit +20 PV pour chacun de vos Nidoqueen en jeu.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fightning",
				"Fightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Venomous Horn",
				fr: "Corne venimeuse",
			},
			effect: {
				en: "The Defending Pokémon is now Poisoned.",
				fr: "Le Pokémon Défenseur est maintenant Empoisonné.",
			},
			damage: 80,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Lightning",
			value: "-20"
		},
	],
	retreat: 3,



}

export default card
