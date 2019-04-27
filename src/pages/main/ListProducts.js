import React from 'react'
import { Link } from 'react-router-dom'

const ListProducts = (props) => (
    <div className="product-list">
        { props.products.map(product => (
            <article key={ product._id }>
                <strong>{ product.title }</strong>
                <p>{ product.description }</p>
                <Link to={ `/product/${ product._id }` }>Detalhe</Link>
            </article>
        ))}
        <div className="actions">
            <button disabled={ props.page === 1 } onClick={ props.prevPage }>Anterior</button>
            <button disabled={ props.page === props.productInfo.pages } onClick={ props.nextPage }>Próxima</button>
        </div>
        <p>Total de produtos: { props.products.length }</p>
    </div>
)

export default ListProducts