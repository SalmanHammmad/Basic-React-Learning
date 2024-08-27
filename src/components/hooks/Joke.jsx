import { useState, useEffect } from 'react'

const Joke = () => {

    const url = 'https://api.chucknorris.io/jokes/random'
    const [joke, setJoke] = useState('')
    const [condition, setCondition] = useState(false)

    const fetchJoke = async () => {
        const res = await fetch(url)
        const data = await res.json()
        setJoke(data.value)
    }
    const Condition = () => {
        setCondition(!condition);
    }


    useEffect(() => {
        fetchJoke()
    }, [condition])

  return (
    <div>
      <h2>Refresh for new Jokes</h2>
    <button onClick={fetchJoke}>Get Joke</button>
    <button onClick={Condition}>Condition</button>
    <h3>{joke}</h3>

    </div>
  )
}

export default Joke
