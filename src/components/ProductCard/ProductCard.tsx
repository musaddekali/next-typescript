import Link from 'next/link'

const ProductCard = ({ id, image, title, price, desc }) => {
    return (
        <Link href={`/ProductDetails/${id}`} >
            <div className="card cursor_pointer rounded shadow-sm">
                <img
                    style={{ backgroundColor: 'orange' }}
                    src={image} alt={title}
                    className="card-img"
                />
                <div className="card-body">
                    <h3 className="card-title">{`${title.toString(0, 50)}...`}</h3>
                    <h4 className="card_price card-title">${price}</h4>
                    <p className="card-text">{`${desc.toString(0, 50)}...`}</p>
                </div>
            </div>
        </Link>
    )
}

export default ProductCard;