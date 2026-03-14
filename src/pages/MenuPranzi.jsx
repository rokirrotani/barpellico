import MenuPage from '../components/MenuPage'

const categories = [
  {
    name: 'Insalate',
    photo: '/foto_inssalata_cesar.jpg',
    items: [
      { name: 'Nizzarda',      desc: 'Pomodori, acciughe, uova sode, olive taggiasche, sedano, cipolla rossa di Tropea, peperoni', price: '8,00 €' },
      { name: 'Caesar Salad', desc: 'Petto di pollo, crostini di pane, scaglie di parmigiano, salsa al tuorlo',                    price: '8,00 €' },
      { name: 'La Parma',     desc: 'Crudo, mozzarella, riduzione di aceto balsamico, julienne di carote, scaglie di grana',       price: '7,00 €' },
      { name: 'Red King',     desc: 'Salmone, avocado, valeriana',                                                                 price: '8,00 €' },
      { name: 'Val Varaita',  desc: 'Patate lesse, tomino fresco, speck',                                                          price: '8,00 €' },
      { name: 'La Farro',     desc: 'Farro, pomodorini, verdure di stagione, mais',                                                price: '7,00 €' },
    ],
  },
  {
    name: 'Focacce',
    photo: '/foto_fofacciae.jpg',
    items: [
        { name: 'Crudo di Parma e fior di latte',                          price: '8,00 €'  },
      { name: 'Manzo, rucola e parmigiano 12 mesi',                      price: '10,00 €' },
      { name: 'Salmone Red King e avocado',                              price: '11,00 €' },
      { name: 'Salsiccia di bra, crema di broccoli e ricotta salata',   price: '9,00 €'  },
      { name: 'Vitello tonnato con salsa della tradizione',              price: '8,00 €'  },
      { name: 'Blu di viso e pancetta montanara',                       price: '8,00 €'  },
      { name: 'Burro salato e acciughe Mar Cantabrico',                 price: '11,00 €' },
      { name: 'Burrata di bufala, crema al pistacchio e mortadella IGP', price: '11,00 €' },
    ],
  },
  {
    name: 'Antipasti',
    photo: '/foto_antipasto.jpg',
    items: [
      { name: 'Battuta di fassona con scaglie di grana e rucola',              price: '8,00 €' },
      { name: 'Vitello tonnato della tradizione',                              price: '8,00 €' },
      { name: 'Carpaccio di bresaola',                                         price: '7,00 €' },
      { name: 'Insalatina di finocchi con grana e salmone affumicato',        price: '8,00 €' },
      { name: 'Caprese classica',                                              price: '7,00 €' },
      { name: 'Insalatina Greca',                                              price: '8,00 €' },
    ],
  },
  {
    name: 'Primi',
    photo: '/foto_primi_pacchero.jpg',
    items: [
      { name: 'Paccheri pomodorini, gamberi e burrata',       price: '9,00 €' },
      { name: 'Chicche di montagna al Raschera',              price: '8,00 €' },
      { name: 'Ravioli ricotta e spinaci',                    price: '8,00 €' },
      { name: 'Agnolotti al sugo di arrosto',                 price: '8,00 €' },
      { name: 'Tajarin con pomodorini, basilico e burrata',  price: '8,00 €' },
    ],
  },
  {
    name: 'Secondi',
    photo: '/foto_piatto.jpg',
    items: [
        { name: 'Pollo in crosta/ai ferri',   price: '9,00 €'  },
      { name: 'Scamone scottato',           price: '10,00 €' },
      { name: 'Milanese di vitello',        price: '9,00 €'  },
      { name: 'Roast beef all\u2019inglese',    price: '9,00 €'  },
    ],
  },
  {
    name: 'Dolci del Giorno',
    items: [
        { name: 'Dolci del giorno', price: 'Dai 2,50 € ai 3,50 €' },
    ],
  },
]

export default function MenuPranzi() {
  return (
    <MenuPage
      label="Il Nostro Menù"
      title="Pranzi"
      subtitle="Cucina sincera di territorio: insalate fresche, focacce artigianali e piatti della tradizione piemontese ogni giorno."
      categories={categories}
    />
  )
}
