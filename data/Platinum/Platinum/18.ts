import { Card } from '../../../interfaces'
import Set from '../Platinum'

const card: Card = {
	name: {
		en: "Altaria",
		fr: "Altaria",
	},
	illustrator: "Naoyo Kimura",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		334,
	],
	hp: 90,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Swablu",
		fr: "Tylton",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Midnight Eyes",
				fr: "Yeux de minuit",
			},
			effect: {
				en: "The Defending Pokémon is now Asleep.",
				fr: "Le Pokémon Défenseur est maintenant Endormi.",
			},
			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Perish Song",
				fr: "Requiem",
			},
			effect: {
				en: "If the Defending Pokémon is Asleep and was damaged or affected by Midnight Eyes during your last turn, the Defending Pokémon is Knocked Out.",
				fr: "Si le Pokémon Défenseur est Endormi et que l'attaque Yeux de minuit lui a infligé des dégâts lors de votre tour précédent, il est mis K.O.",
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Healing Song",
				fr: "Chanson guérisseuse",
			},
			effect: {
				en: "Remove 1 damage counter from each of your Pokémon.",
				fr: "Retirez à chacun de vos Pokémon 1 marqueur de dégât.",
			},
			damage: 40,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "+20"
		},
	],
	resistances: [
		{
			type: "Fightning",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
