import React, { useState, useEffect } from 'react'
// import formSchema from '../validation/formSchema'
import axios from 'axios'
import * as yup from 'yup'

function Form() {

const onSubmit = evt => {
    evt.preventDefault()
    submit(); // to add
}

const onCheckboxChange = evt => {
    const { name, checked } = evt.target
    onCheckboxChange(name, checked) // need to add to prop
}

const onInputChange = evt => {
    const { name, value } = evt.target
    inputChange(name, value) // need to add to prop
}

return(
    <form>
        <div>
            <div>
                <label>Name
                    <input
                    value={values.name}
                    onChange={''}
                    name='name'
                    type='text'
                    />
                </label>
            </div>

            {/* <div>
                <label>Email
                    <input/>
                </label>
            </div>

            <div>
                <label>Password
                    <input/>
                </label>
            </div>

            <div>
                <label>Terms of Service
                    <input/>
                </label>
            </div> */}

            <div>
                <button>Submit</button> 
                {/* need to disable */}
            </div>
        </div>
    </form>
)

}

export default Form;