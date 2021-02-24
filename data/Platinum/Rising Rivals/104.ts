import { Card } from '../../../interfaces'
import Set from '../Rising Rivals'

const card: Card = {
	name: {
		en: "Floatzel GL",
		fr: "Mustéflott  Niv. X",
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		419,
	],
	hp: 100,
	types: [
		"Water",
	],

	stage: "LEVEL-UP",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Water Rescue",
				fr: "Sauvetage nautique",
			},
			effect: {
				en: "Whenever any of your Water Pokémon (excluding any Floatzel ) is Knocked Out by damage from your opponent's attack, you may put that Pokémon and all cards that were attached to it from your discard pile into your hand.",
				fr: "Lorsque que n'importe lequel de vos Pokémon Water (tous les Mustéflott  mis K.O par les dégâts d'une attaque de votre adversaire exclus), vous pouvez placer ce Pokémon ainsi que toutes les cartes qui lui sont attachées de votre pile de défausse à votre main.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Water",
				"Water",
			],
			name: {
				en: "Energy Cyclone",
				fr: "Énergie Tourbillon",
			},
			effect: {
				en: "Choose as many Energy cards from your hand as you like and show them to your opponent. This attack does 20 damage times the number of Energy cards you chose. Put those Energy cards on top of your deck. Shuffle your deck afterward.",
				fr: "Choisissez autant de cartes Énergie de votre main que vous le voulez et montrez-les à votre adversaire. Cette attaque inflige 20 dégâts multipliés par le nombre de cartes Énergie que vous avez choisit. Placez ces cartes Énergie au dessus de votre deck. Ensuite, mélangez votre deck.",
			},
			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],





}

export default card
