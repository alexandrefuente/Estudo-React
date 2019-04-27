import React, { Component } from 'react'
import api from '../../services/api'
import ListProducts from './ListProducts'
import './main.css'

export default class Main extends Component {

    state = {
        products: [],
        productInfo: {},
        page: 1
    }

    componentDidMount() {
        this.loadProducts()
    }

    loadProducts = async (page = 1) => {
        const res = await api.get(`/products?page=${page}`)
        const { docs, ...productInfo } = res.data
        this.setState({ products: docs, productInfo, page })
    }

    prevPage = () => {
        const { page } = this.state

        if (page === 1) {
            return
        }
        const pageNumber = page -1
        this.loadProducts(pageNumber)
    }

    nextPage = () => {
        const { page, productInfo } = this.state

        if (page === productInfo.pages) {
            return
        }

        const pageNumber = page + 1
        this.loadProducts(pageNumber)
    }

    render() {
        const { products, page, productInfo } = this.state
        return(
            <ListProducts 
                products={products} 
                page={page} 
                productInfo={productInfo}
                prevPage={this.prevPage}
                nextPage={this.nextPage}
                ></ListProducts>
        )
    }
}