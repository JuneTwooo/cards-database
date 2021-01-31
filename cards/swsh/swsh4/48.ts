import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/swsh/swsh4'


const card: Card = {
	// Card Global Informations
	id: "swsh4-48",

	localId: 48,

	name: {
		en: "Zapdos",
	},

	tags: [
	],

	illustrator: "AKIRA EGAWA",

	rarity: Rarity.RARE, 

	category: Category.POKEMON, 

	set,


	// Card Pokémon Informations



	hp: 110,

	type: [
		Type.LIGHTNING,
	],


	attacks: [
		{
			cost: [
				Type.COLORLESS,
			],

			name: {
				en: "Drill Peck",
			},


			damage: 20,

		},
		{
			cost: [
				Type.LIGHTNING,
				Type.LIGHTNING,
				Type.COLORLESS,
			],

			name: {
				en: "Thunder Snipe",
			},

			text: {
				en: "Discard all Energy from this Pokémon, and this attack does 160 damage to 1 of your opponent’s Pokémon V or Pokémon-GX. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
			},


		},
	],

	weaknesses: [
		{
			type: Type.LIGHTNING, 

			value: "×2",

		},
	],

	resistances: [
		{
			type: Type.FIGHTING, 

			value: "-30",

		},
	],

	retreat: 1,


	// Card Trainer/Energy informations

}

export default card