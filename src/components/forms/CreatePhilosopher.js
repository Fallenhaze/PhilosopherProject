import React, {Component} from 'react'
import gql from 'graphql-tag'
import {graphql} from 'react-apollo'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

import '../../styles/Form.css'

class CreatePhilosopher extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: '',
      imgURL: '',
      timePeriod: '',
      region: '',
      branch: '',
      resource: ''
    }
  }
  render() {
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
        <h3>Create Philosopher</h3>
        <TextField floatingLabelText="Name"
                   onChange={e => this.setState({ name: e.target.value })}
                   required
        />
        <TextField floatingLabelText="Image-URL"
                   onChange={e => this.setState({ imgURL: e.target.value })}
        />
        <TextField floatingLabelText="Time Period"
                   onChange={e => this.setState({ timePeriod: e.target.value })}
                   required
        />
        <TextField floatingLabelText="Region"
                   onChange={e => this.setState({ region: e.target.value })}
                   required
        />
        <TextField floatingLabelText="Branch"
                   onChange={e => this.setState({ branch: e.target.value })}
                   required
        />
        <TextField floatingLabelText="Resources"
                   onChange={e => this.setState({ resource: e.target.value })}
                   required
        />
        <RaisedButton label="Create"
                      type="submit"
        />
      </form>
    );
  }
}

const CREATE_PHILOSOPHER_MUTATION = gql`
  mutation($name:String!, $imgURL:String!, $timePeriod:String!, $region: String, $branch:String, $resource:String!){
    createPhilosopher(
      name: $name,
      imgURL: $imgURL,
      timePeriod: $timePeriod,
      region: $region,
      branch: $branch,
      resource: $resource
    ){
      id
    }
  }
`
export default graphql(CREATE_PHILOSOPHER_MUTATION)(CreatePhilosopher)
