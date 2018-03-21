import React, {Component} from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import {GridList, GridTile} from 'material-ui/GridList';
import Subheader from 'material-ui/Subheader';

import Philosopher from './Philosopher'
import '../../styles/All.css'

class AllPhilosophers extends Component {
  render(){
    const {allPhilosophers} = this.props.data
    
    return (!this.props.loading && allPhilosophers ) ? (
      <section className='list'>
        {PhilosopherGrid(allPhilosophers)}
      </section>
    ) : <div>loading</div>
  }
}

const PhilosopherGrid = (allPhilosophers) => (
  <GridList cols={5} cellHeight="auto" >
    <Subheader>Philosophers</Subheader>
    {allPhilosophers.map(philosopher =>(
      <GridTile className="tile">
        <Philosopher philosopher={philosopher} key={philosopher.id}/>
      </GridTile>
      
      )
    )}
  </GridList>
)

const ALL_PHILOSOPHERS_QUERY = gql`
  query{
    allPhilosophers {
      id
      name
      imgURL
      timePeriod
      region
      branch
      resource
    }
  }
`
export default graphql(ALL_PHILOSOPHERS_QUERY)(AllPhilosophers)
