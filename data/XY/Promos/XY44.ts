import { Card } from '../../../interfaces'
import Set from '../Promos'

const card: Card = {
	name: {
		en: "M Diancie-EX",
		fr: "M Diancie-EX",
	},
	illustrator: "5ban Graphics",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		719,
	],
	hp: 190,
	types: [
		"Fairy",
	],
	evolveFrom: {
		en: "Diancie-EX",
		fr: "Diancie-EX",
	},
	stage: "MEGA",


	attacks: [
		{
			cost: [
				"Fairy",
				"Fairy",
				"Colorless",
			],
			name: {
				en: "Diamond Force",
				fr: "Règle des Méga-Évolutions",
			},
			effect: {
				en: "During your opponent's next turn, prevent all damage done to each of your Pokémon by attacks from your opponent's Pokémon-EX. (If this Pokémon is no longer your Active Pokémon, this effect ends.)",
			},
			damage: 100,

		},
		{
			cost: [
				"Fairy",
				"Fairy",
				"Colorless",
			],
			name: {
				fr: "Force Diamant",
			},
			effect: {
				fr: "Pendant le prochain tour de votre adversaire, évitez tous les dégâts infligés à chacun de vos Pokémon par les attaques des Pokémon-EX de votre adversaire. (Si ce Pokémon n'est plus votre Pokémon Actif, cet effet se termine.)",
			},
			damage: 100,

		},
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Darkness",
			value: "-20"
		},
	],
	retreat: 2,



}

export default card
