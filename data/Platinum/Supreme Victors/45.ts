import { Card } from '../../../interfaces'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		en: "Solrock",
		fr: "Solaroc",
	},
	illustrator: "Naoyo Kimura",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		338,
	],
	hp: 80,
	types: [
		"Psychic",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Sunshine Fate",
				fr: "Destin ensoleillé",
			},
			effect: {
				en: "Once during your turn (before your attack), if you have Lunatone in play, you may look at the top 3 cards of your deck and put them back on top of your deck in any order. This power can't be used if Solrock is affected by a Special Condition.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), si vous avez un Seleroc en jeu, vous pouvez regarder les 3 cartes du dessus de votre deck et les replacer au-dessus de votre deck dans n'importe quel ordre. Ce pouvoir ne peut pas être utilisé si Solaroc est affecté par un État Spécial.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Luna Turn",
				fr: "Tour lunaire",
			},
			effect: {
				en: "If Lunatone is in your discard pile, this attack does 30 damage plus 30 more damage. Then, search your discard pile for Lunatone, show it to your opponent, and shuffle it into your deck.",
				fr: "Si Seleroc se trouve dans votre pile de défausse, cette attaque inflige 30 dégâts plus 30 dégâts supplémentaires. Ensuite, cherchez Seleroc dans votre pile de défausse, montrez-le à votre adversaire et mélangez-le à votre deck.",
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "+20"
		},
	],

	retreat: 1,



}

export default card
