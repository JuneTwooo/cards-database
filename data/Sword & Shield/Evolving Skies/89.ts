import { Card } from '../../../interfaces'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	name: {
		en: "Palpitoad",
		fr: "Batracné",
		es: "Palpitoad",
		it: "Palpitoad",
		pt: "Palpitoad",
		de: "Mebrana"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 100,
	types: ["Fighting"],
	stage: "Stage1",
	illustrator: "tetsuya koizumi",

	attacks: [{
		name: {
			en: "Stampede",
			fr: "Ruée",
			es: "Estampida",
			it: "Fuggi Fuggi",
			pt: "Stampede",
			de: "Zertrampeln"
		},

		damage: 20,
		cost: ["Fighting"]
	}, {
		name: {
			en: "Tongue Slap",
			fr: "Gros Coup de Langue",
			es: "Bofetón Lengua",
			it: "Linguasberla",
			pt: "Tongue Slap",
			de: "Zungenschelle"
		},

		damage: 50,
		cost: ["Fighting", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 3
}

export default card