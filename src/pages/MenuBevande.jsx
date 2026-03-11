import MenuPage from '../components/MenuPage'

const categories = [
  {
    name: 'Bibite',
    photo: '/foto_analcolici_2.jpg',
    cols: 2,
    items: [
      { name: 'Acqua (bottiglia)',               price: '1,00 €' },
      { name: 'Acqua (bicchiere)',               price: '0,50 €' },
      { name: 'Coca Cola',                      price: '3,50 €' },
      { name: 'Fanta',                          price: '3,50 €' },
      { name: 'Sprite',                         price: '3,50 €' },
      { name: 'Chinotto',                       price: '3,50 €' },
      { name: 'Tè freddo pesca — limone',       price: '3,50 €' },
      { name: 'Red Bull',                       price: '4,00 €' },
      { name: 'Campari soda',                   price: '4,00 €' },
      { name: 'Aperol soda',                    price: '4,00 €' },
      { name: 'Crodino',                        price: '4,00 €' },
    ],
  },
  {
    name: 'Cocktail',
    photo: '/foto_spritz.jpg',
    items: [
      { name: 'Analcolico alla frutta',         price: '6,00 €' },
      { name: 'Spritz',                         price: '6,00 €' },
      { name: 'Spritz Hugo',                    price: '6,00 €' },
      { name: 'Spritz Violet',                  price: '6,00 €' },
      { name: 'Spritz Campari',                 price: '6,00 €' },
      { name: 'Negroni',                        price: '6,00 €' },
      { name: 'Negroni sbagliato',              price: '6,00 €' },
      { name: 'Americano',                      price: '6,00 €' },
      { name: 'Moscow Mule',                    price: '7,00 €' },
      { name: 'Mojito',                         price: '8,00 €' },
      { name: 'Daiquiri',                       price: '7,00 €' },
      { name: 'Margarita',                      price: '7,00 €' },
      { name: 'Long Island',                    price: '8,00 €' },
      { name: 'Vodka Sour',                     price: '7,00 €' },
      { name: 'Gin Tonic',                      price: '7,00 €' },
      { name: 'Gin Tonic Premium',              price: 'da 10 a 12 €' },
    ],
  },
  {
    name: 'Birra',
    items: [
      { name: 'Beck\u2019s Next alla spina',         desc: '0,40 l', price: '5,00 €' },
      { name: 'Birra Moretti Rossa alla spina', desc: '0,40 l', price: '5,00 €' },
      { name: 'Birra artigianale in bottiglia', desc: '0,33 l', price: '5,00 €' },
      { name: 'Birra in bottiglia',             desc: '0,33 l', price: '4,00 €' },
    ],
  },
  {
    name: 'Vini Bianchi',
    note: 'Calice di vino 5,00 € — Alta Langa calice 7,00 €',
    items: [
      { name: 'Roero Arneis',             producer: 'Renzo Seghesio',    price: '23,00 €' },
      { name: 'Chardonnay \u201cnaturalys\u201d',    producer: 'G\u00e9rard Bertrand',  price: '20,00 €' },
      { name: 'Langhe Favorita',          producer: 'Pelissero',          price: '23,00 €' },
      { name: 'Riesling Brut',            producer: 'Gut Hermannsberg',   price: '25,00 €' },
      { name: 'Gewurztraminer',           producer: 'Terlano',            price: '30,00 €' },
    ],
  },
  {
    name: 'Vini Rossi',
    items: [
      { name: 'Dolcetto d\u2019Alba \u201cMunfrina\u201d', producer: 'Pelissero',              price: '20,00 €' },
      { name: 'Barbera d\u2019Alba \u201cPiani\u201d',     producer: 'Pelissero',              price: '25,00 €' },
      { name: 'Langhe Nebbiolo',              producer: 'Pelissero',              price: '25,00 €' },
      { name: 'Nebbiolo',                     producer: 'Vajra',                  price: '30,00 €' },
      { name: 'Barbera d\u2019Asti',              producer: 'Frasca',                 price: '25,00 €' },
      { name: 'C\u00f4tes du Rh\u00f4ne \u201cSamorens\u201d',  producer: 'Ferraton P\u00e8re & Fils',  price: '25,00 €' },
    ],
  },
  {
    name: 'Bollicine',

    note: 'Franciacorta calice 7,00 €',
    items: [
      { name: 'Prosecco Superiore Extra Dry',            producer: 'BiancaVigna',        price: '20,00 €' },
      { name: 'Franciacorta Brut',                       producer: 'Vezzoli',            price: '25,00 €' },
      { name: 'Franciacorta Ros\u00e8',                       producer: 'Le Marchesine',      price: '35,00 €' },
      { name: 'Metodo Classico',                         producer: 'Paolo Manzone',      price: '35,00 €' },
      { name: 'Alta Langa Brut',                         producer: 'Tosti',              price: '30,00 €' },
      { name: 'Alta Langa Brut Ros\u00e8',                    producer: 'Tosti',              price: '33,00 €' },
      { name: 'Alta Langa Brut',                         producer: 'Paolo Berutti',      price: '33,00 €' },
      { name: 'Alta Langa Brut Ros\u00e8',                    producer: 'Paolo Berutti',      price: '35,00 €' },
      { name: 'Cremant de Bourgogne',                    producer: 'Baron Auguste',      price: '28,00 €' },
      { name: 'Champagne Mineralis Nature Grand Cr\u00fb',    producer: 'Missing',            price: '60,00 €', prestige: true },
      { name: 'Champagne Must Noir',                     producer: 'Nicolo e Paradis',   price: '65,00 €', prestige: true },
      { name: 'Champagne Vintage 2014',                  producer: 'Coutelas',           price: '70,00 €', prestige: true },
      { name: 'Champagne le Black Label',                producer: 'Lanson',             price: '75,00 €', prestige: true },
      { name: 'Champagne',                               producer: 'Bruno Paillard',     price: '80,00 €', prestige: true },
      { name: 'Champagne Millesimato 2012',              producer: 'Lanson',             price: '130,00 €', prestige: true },
    ],
  },
]

export default function MenuBevande() {
  return (
    <MenuPage
      label="Il Nostro Menù"
      title="Bevande"
      subtitle="Dalla bibita fresca al cocktail d\u2019autore, dalla birra artigianale allo Champagne d\u2019annata — per ogni momento il giusto calice."
      categories={categories}
    />
  )
}
