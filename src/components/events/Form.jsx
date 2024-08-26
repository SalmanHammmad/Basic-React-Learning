import React from 'react'

const Form = () => {

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(event.target.name.value);
        console.log(event.target.email.value);
        console.log(event.target.password.value);
        
    }

  return (
    <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" />
        <br />
        <label htmlFor="email">Email:</label>
        <input type="text" id="email" name="email" />
        <br />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" />
        <br />
        <button>Submit</button>
    </form>
  )
}

export default Form
