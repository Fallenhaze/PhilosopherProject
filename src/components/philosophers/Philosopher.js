import React, {Component} from 'react'
import Paper from 'material-ui/Paper'
import gql from 'graphql-tag'
import {graphql} from 'react-apollo'
import RaisedButton from 'material-ui/RaisedButton'

import {ModalButton} from '../buttons'
import UpdatePhilosopher from '../forms/UpdatePhilosopher'

class Philosopher extends Component {
  render(){
    const {philosopher} = this.props
    const DeletePhilosopher = () => (
      <RaisedButton label='Confirm Delete'
                    onClick={handleClick}
      />
    )
    const handleClick = async (e) => {
      e.preventDefault()
      await this.props.mutate()
      window.location.replace('/')
    }
    return(
      <Paper className='philosopher' zDepth={2}>
        <h2>{philosopher.name}</h2>
        <img src={philosopher.imgURL} alt={'Not Available'}/>
        <h4>{philosopher.timePeriod}</h4>
        <h4>{philosopher.region}</h4>
        <h4>{philosopher.branch}</h4>
        <h4>{philosopher.resource}</h4>
        <ModalButton label="Update"
                     display={<UpdatePhilosopher
                       color="primary"
                       philosopher={philosopher}/>}/>
        <ModalButton label="Delete"
                     display={<DeletePhilosopher
                     color="secondary"/>}/>
      </Paper>
    )
  }
}
const DELETE_PHILOSOPHER_MUTATION = gql`
  mutation($id: ID!) {
    deletePhilosopher(
      id: $id
    ){
      id
    }
  }
`
export default graphql(DELETE_PHILOSOPHER_MUTATION,
  {options: (props) => ({variables: {id: props.philosopher.id}})}
)(Philosopher)
