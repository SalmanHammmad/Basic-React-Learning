import { useState } from 'react'

const Form = () => {
    const [phone, setPhone] = useState('')
    const [registeration, setRegisteration ] = useState({ name: '', Email: '' })

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(registeration)
        setRegisteration({ name: '', Email: '' })
    }

    const handleName = (e) => setRegisteration({ ...registeration, name: e.target.value })


  return (
    <div>
        <h1>.netFlix</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input onChange={handleName} type="text" id="name" name="name" value={registeration.name} />
            <br /> <br />
            <label htmlFor="email">Email:</label>
            <input onChange={(e) =>setRegisteration({...registeration, Email: e.target.value}) } type="text" id="email" name="email" value={registeration.Email} />
            <br /> <br />
            <label htmlFor="phone">Phone:</label>
            <input onChange={(e) => setPhone(e.target.value)} type="text" id="phone" name="phone" value={phone} />
            <br /> <br />

            <button>Submit</button>
        </form>
    </div>
  )
}

export default Form
