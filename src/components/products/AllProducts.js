import React, {Component} from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import {GridList, GridTile} from 'material-ui/GridList';
import Subheader from 'material-ui/Subheader';

import Product from './Product'
import '../../styles/All.css'

class AllProducts extends Component {
  render(){
    const {allProducts} = this.props.data
    
    return (!this.props.loading && allProducts ) ? (
      <section className='list'>
        {ProductGrid(allProducts)}
      </section>
    ) : <div>loading</div>
  }
}

const ProductGrid = (allProducts) => (
    <GridList cols={4} cellHeight="auto" >
      <Subheader>Products</Subheader>
      {allProducts.map(product =>(
          <GridTile className="tile">
              <Product cartView={false} product={product} key={product.id}/>
          </GridTile>
        )
      )}
    </GridList>
)

const ALL_PRODUCTS_QUERY = gql`
  query{
    allProducts {
      id
      name
      imgURL
      desc
      price
    }
  }
`

export default graphql(ALL_PRODUCTS_QUERY)(AllProducts)
