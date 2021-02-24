import { Card } from '../../../interfaces'
import Set from '../Promos'

const card: Card = {
	name: {
		en: "Buzzwole-GX",
	},
	illustrator: "5ban Graphics",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		794,
	],
	hp: 190,
	types: [
		"Fightning",
	],


	suffix: "GX",

	attacks: [
		{
			cost: [
				"Fightning",
			],
			name: {
				en: "Jet Punch",
			},
			effect: {
				en: "This attack does 30 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			},
			damage: 30,

		},
		{
			cost: [
				"Fightning",
				"Fightning",
				"Fightning",
			],
			name: {
				en: "Knuckle Impact",
			},
			effect: {
				en: "This Pokémon can't attack during your next turn.",
			},
			damage: 160,

		},
		{
			cost: [
				"Fightning",
				"Fightning",
				"Fightning",
			],
			name: {
				en: "Absorption-GX",
			},
			effect: {
				en: "This attack does 40 damage for each of your remaining Prize cards. (You can't use more than 1 GX attack in a game.)",
			},
			damage: 40,

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
