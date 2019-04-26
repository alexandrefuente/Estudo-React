import React, { Component } from 'react'
import api from '../../services/api'

export default class Main extends Component {

    componentDidMount() {
        this.loadProducts()
    }

    loadProducts = async () => {
        const res = await api.get(`/products`)
        console.log(res.data.docs)
    }

    render() {
        return(
            <h1>Main</h1>
        )
    }
}