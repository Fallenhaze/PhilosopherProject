import React, {Component} from 'react'
import gql from 'graphql-tag'
import {graphql} from 'react-apollo'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

import '../../styles/Form.css'

class UpdatePhilosopher extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: props.philosopher.name,
      imgURL: props.philosopher.imgURL,
      timePeriod: props.philosopher.timePeriod,
      region: props.philosopher.region,
      branch: props.philosopher.branch,
      resource: props.philosopher.resource
    }
}
render () {
  const handleSubmit = async (e) => {
    e.preventDefault()
      await this.props.mutate({
        variables: {
          name: this.state.name,
          imgURL: this.state.imgURL,
          timePeriod: this.state.timePeriod,
          region: this.state.region,
          branch: this.state.branch,
          resource: this.state.resource
        }
      })
      window.location.replace('/')
  }
  return (
    <form className="flexBox"
          onSubmit={handleSubmit}>
      <h3>Update Philosopher</h3>
      <TextField floatingLabelText="Name"
                 value={this.state.name}
                 onChange={e => this.setState({ name: e.target.value })}
                 required
      />
      <TextField floatingLabelText="Image-URL"
                 value={this.state.imgURL}
                 onChange={e => this.setState({ imgURL: e.target.value })}
      />
      <TextField floatingLabelText="Time Period"
                 value={this.state.timePeriod}
                 onChange={e => this.setState({ timePeriod: e.target.value })}
                 required
      />
      <TextField floatingLabelText="Region"
                 value={this.state.region}
                 onChange={e => this.setState({ region: e.target.value })}
                 required
      />
      <TextField floatingLabelText="Branch of Philosophy"
                 value={this.state.branch}
                 onChange={e => this.setState({ branch: e.target.value })}
                 required
      /><TextField floatingLabelText="Resources"
                   value={this.state.resource}
                   onChange={e => this.setState({ resource: e.target.value })}
                   required
    />
      <RaisedButton label="Update"
                    type="submit"
      />
    </form>
  );
  }
}

const UPDATE_PHILOSOPHER_MUTATION = gql`
  mutation($id: ID!, $name:String!, $imgURL:String!, $timePeriod: DateTime!, $region: String, $branch:String, $resource:String!){
    updatePhilosopher(
      id: $id
      name: $name,
      imgURL: $imgURL,
      timePeriod: $timePeriod,
      branch: $branch,
      resource: $resource
    ){
      id
    }
  }
`
export default graphql(UPDATE_PHILOSOPHER_MUTATION,
  { options:(props) => ( {variables: {id: props.philosopher.id}})}
)(UpdatePhilosopher)
