import React, {Component} from 'react'
import { ModalButton } from '../components/buttons'

import AllPhilosophers from '../components/philosophers/AllPhilosophers'
import CreatePhilosopher from '../components/forms/CreatePhilosopher'
import CreateUser from '../components/forms/CreateUser'
import Login from '../components/forms/Login'

export default class extends Component {
  render() {
    return (
      <div>
        <ModalButton label='Add Philosopher' display={<CreatePhilosopher/>}/>
        <ModalButton label='Create User' display={<CreateUser/>}/>
        <ModalButton label='Login' display={<Login/>}/>
        <AllPhilosophers/>
      </div>
    );
  }
}
