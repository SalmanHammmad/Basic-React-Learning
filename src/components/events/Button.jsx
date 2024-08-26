import React from 'react'

const Button = () => {

    const handleClick = (event) => {
        console.log(event)
        alert('Button clicked')
    }

    const handleDClick = (event) => {
        console.log(event)
        alert('Double clicked')
    }

  return (
    <>
    <button onClick={handleClick}>
        Click me
    </button>

    <br /> <br />

    <button onDoubleClick={handleDClick}>
        Double Click me
    </button>


    <p onMouseOver={()=>alert('hovered')}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui aliquid aliquam repudiandae maxime sint? Eos quisquam ducimus quis, aliquam necessitatibus corrupti labore libero cum ratione consequatur esse maxime amet aperiam!</p>
    </>

  )
}

export default Button
