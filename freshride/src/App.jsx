import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import ProductCard from './components/ProductCard'

const products = [
  {
    id: 1,
    name: 'Coastal Cedar',
    price: 12,
    image: 'https://placehold.co/600x400/dce9df/193c30?text=Coastal+Cedar',
    description: 'Warm cedarwood meets a clean ocean breeze. A calm start to every drive.',
  },
  {
    id: 2,
    name: 'Citrus Run',
    price: 14,
    image: 'https://placehold.co/600x400/f4dfc8/533a20?text=Citrus+Run',
    description: 'Bright bergamot and sweet orange bring a little lift to the daily commute.',
  },
  {
    id: 3,
    name: 'After Rain',
    price: 12,
    image: 'https://placehold.co/600x400/dde5ed/283d50?text=After+Rain',
    description: 'Fresh green leaves, cool air, and the quiet feeling of a road after rain.',
  },
]

function App() {
  return (
    <div id="top" className="app">
      <Header storeName="freshride" />
      <Hero
        title="Make every drive feel like a getaway."
        subtitle="Thoughtful scents for the miles you make every day."
        ctaText="Find your fresh"
      />
      <main id="shop" className="shop-section">
        <div className="section-heading">
          <p className="eyebrow">Small-batch car fragrance</p>
          <h2>Pick your next favorite</h2>
          <p>Three considered scents. A better-feeling ride.</p>
        </div>
        <div className="product-grid">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </main>
      <Footer
        storeName="freshride"
        email="hello@freshride.com"
        location="Made for the open road."
      />
    </div>
  )
}

export default App
