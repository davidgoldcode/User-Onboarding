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

  const postUsers = newUser => {
    axios.post('https://reqres.in/api/users', newUser)
      .then(res => {
        debugger
        setUsers([...users, res.data])
      })
      .catch(err => {
        console.log(err, 'error')
      })
      .finally(() => {
        setFormValues(initialFormValues)
      })
  }

  const inputChange = (name, value) => {
    //yup to go here

    setFormValues({
      ...formValues,
      [name]: value,
    })
  }

  const checkboxChange = (name, checked) => {
    setFormValues({
      ...formValues,
      [name]: checked,
    })
  }

  const submit = evt => {
    const newUser = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
      termsOfService: formValues.termsOfService, // to edit
    }

    postUsers(newUser);

  }

  return (
    <div className="App">
      <header className="App-header"><h1>User Onboarding</h1>
      <Form 
      checkboxChange={checkboxChange}
      inputChange={inputChange}
      submit={submit}
      values={formValues}
      disabled={disabled}
      errors={formErrors}
      /> 
      </header>
    </div>
  );
}

export default App;
