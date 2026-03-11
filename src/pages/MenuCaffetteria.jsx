import MenuPage from '../components/MenuPage'

const categories = [
  {
    name: 'Caffetteria',
    photo: '/macchina_caffe.jpg',
    cols: 2,
    items: [
      { name: 'Caff\u00e8',                      price: '1,20 \u20ac' },
      { name: 'Caff\u00e8 macchiato',            price: '1,20 \u20ac' },
      { name: 'Caff\u00e8 shakerato',            price: '2,50 \u20ac' },
      { name: 'Caff\u00e8 corretto',             price: '2,00 \u20ac' },
      { name: 'Marocchino',                  price: '1,50 \u20ac' },
      { name: 'Marocchino con Nutella',      price: '2,00 \u20ac' },
      { name: 'Cappuccino',                  price: '1,50 \u20ac' },
      { name: 'Caff\u00e8 latte',               price: '1,80 \u20ac' },
      { name: 'Caff\u00e8 dek',                 price: '1,20 \u20ac' },
      { name: 'Ginseng',                     price: '1,50 \u20ac' },
      { name: 'Orzo',                        price: '1,50 \u20ac' },
      { name: 'T\u00e8 caldo \u2014 Tisana',  price: '3,50 \u20ac' },
      { name: 'Cioccolata calda',            price: '4,00 \u20ac' },
      { name: 'Cioccolata calda con panna',  price: '4,50 \u20ac' },
    ],
  },
]

export default function MenuCaffetteria() {
  return (
    <MenuPage
      label="Il Nostro Menù"
      title="Caffetteria"
      subtitle="Dal primo espresso del mattino alla pausa pomeridiana: ogni tazza è un piccolo rito di piacere."
      categories={categories}
    />
  )
}
