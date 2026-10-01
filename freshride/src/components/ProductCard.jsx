import './ProductCard.css'

function ProductCard({ name, price, image, description }) {
  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(price)

  return (
    <article className="product-card">
      <img className="product-image" src={image} alt={`${name} car air freshener`} />
      <div className="product-details">
        <p className="product-type">Vent clip fragrance</p>
        <h3 className="product-name">{name}</h3>
        <p className="product-description">{description}</p>
        <p className="product-price">{formattedPrice}</p>
      </div>
    </article>
  )
}

export default ProductCard