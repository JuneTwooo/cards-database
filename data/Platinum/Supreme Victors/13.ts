import { Card } from '../../../interfaces'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		en: "Venusaur",
		fr: "Florizarre",
	},
	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		3,
	],
	hp: 140,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Ivysaur",
		fr: "Herbizarre",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Green Aroma",
				fr: "Arôme vert",
			},
			effect: {
				en: "Remove all Special Conditions from each of your Grass Pokémon. Each of your Grass Pokémon can't be affected by any Special Conditions.",
				fr: "Retirez à chacun de vos Pokémon Grass tous leurs États Spéciaux. Aucun de vos Pokémon Grass ne peut être affecté par un État Spécial.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Desperate Pollen",
				fr: "Pollen désespéré",
			},
			effect: {
				en: "If Venusaur already has 8 or more damage counters on it, the Defending Pokémon is now Burned, Confused, and Poisoned.",
				fr: "Si Florizarre possède déjà au moins 8 marqueurs de dégât, le Pokémon Défenseur est maintenant Brûlé, Confus et Empoisonné.",
			},
			damage: 30,

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Special Reaction",
				fr: "Réaction spéciale",
			},
			effect: {
				en: "If the Defending Pokémon is affected by any Special Conditions, this attack does 40 damage plus 40 more damage for each of those Special Conditions.",
				fr: "Si le Pokémon Défenseur est affecté par des États Spéciaux, cette attaque inflige 40 dégâts plus 40 dégâts supplémentaires pour chacun de ces États Spéciaux.",
			},
			damage: 40,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "+40"
		},
	],

	retreat: 4,



}

export default card
