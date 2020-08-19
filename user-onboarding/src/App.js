import React, { useState, useEffect } from 'react'
// import formSchema from '../validation/formSchema'
import axios from 'axios'
import * as yup from 'yup'
import Form from './Form'

const initialFormValues = {
  name: '',
  email: '',
  password: '',
  termsOfService: false,
}

const initialFormErrors = {
  name: '',
  email: '',
  password: '',
  termsOfService: '',
}

const initialUsers = [];
const initialDisabled = true;

function App() {
  const [users, setUsers] = useState(initialUsers)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)

  const getUsers = () => {
    axios.get('https://reqres.in/api/users')
      .then(res => {
        debugger
        setUsers(res.data)
      })
      .catch(err => {
        debugger
        console.log(err, 'error!')
      })
  }

  const sendUsers = () => {

  }

  return (
    <div className="App">
      <header className="App-header"><h1>User Onboarding</h1>
      <Form /> 
      </header>
    </div>
  );
}

export default App;
