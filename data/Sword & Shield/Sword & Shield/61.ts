import { Card } from '../../../interfaces'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		en: "Drednaw",
		fr: "Torgamord",
		es: "Drednaw",
		it: "Drednaw",
		pt: "Drednaw",
		de: "Kamalm"
	},

	illustrator: "Hitoshi Ariga",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	hp: 130,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Chewtle",
		fr: "Khélocrok",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Vise Bite",
				fr: "Étau Mordant",
				es: "Mordisco Atornillador",
				it: "Serramorso",
				pt: "Mordida Compressora",
				de: "Klammerbiss"
			},
			effect: {
				en: "This attack does 30 more damage for each Colorless in your opponent’s Active Pokémon’s Retreat Cost.",
				fr: "Cette attaque inflige 30 dégâts supplémentaires pour chaque Colorless dans le Coût de Retraite du Pokémon Actif de votre adversaire.",
				es: "Este ataque hace 30 puntos de daño más por cada Colorless en el Coste de Retirada del Pokémon Activo de tu rival.",
				it: "Questo attacco infligge 30 danni in più per ogni Colorless nel costo di ritirata del Pokémon attivo del tuo avversario.",
				pt: "Este ataque causa 30 pontos de dano a mais para cada Colorless no custo de Recuo do Pokémon Ativo do seu oponente.",
				de: "Diese Attacke fügt für jedes Colorless in den Rückzugskosten des Aktiven Pokémon deines Gegners 30 Schadenspunkte mehr zu."
			},
			damage: "60+",

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Jaw Lock",
				fr: "Croque Fort",
				es: "Presa Maxilar",
				it: "Morsostretto",
				pt: "Trava de Mandíbula",
				de: "Fesselbiss"
			},
			effect: {
				en: "During your opponent’s next turn, the Defending Pokémon can’t retreat.",
				fr: "Pendant le prochain tour de votre adversaire, le Pokémon Défenseur ne peut pas battre en retraite.",
				es: "Durante el próximo turno de tu rival, el Pokémon Defensor no puede retirarse.",
				it: "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può ritirarsi.",
				pt: "Durante o próximo turno do seu oponente, o Pokémon Defensor não poderá recuar.",
				de: "Während des nächsten Zuges deines Gegners kann sich das Verteidigende Pokémon nicht zurückziehen."
			},
			damage: 130,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 3,
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	description: {
		en: "This Pokémon rapidly extends its retractable neck to sink its sharp fangs into distant enemies and take them down."
	}
}

export default card
