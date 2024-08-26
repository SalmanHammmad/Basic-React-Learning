import { useState } from "react"

const Ludo = () => {

    const [moves, setMoves] = useState({blue: 0, red: 0})
    const [record, setRecord] = useState(['-'])
    


    function changeState(c)  {

        if(c == 'blue'){
            setMoves((prevMoves) => ({...prevMoves, blue: prevMoves.blue + 1}))
        }else{
            setMoves(prevState=>({...prevState, red: prevState.red + 1}))
        }

        setRecord((prevRecord) => [...prevRecord, `${c} moved`])
    }

    const updateBlue = () => {
        changeState('blue')
    }


  return (
    <div>
        <h1>Ludo</h1>
        <h3>Blue: {moves.blue}</h3>
        <button onClick={updateBlue}>Move Blue</button>
        <h3>Red: {moves.red}</h3>
        <br /><br />
        
        <button onClick={() =>changeState('red')}>Move Red</button>
        <h3>Record : {record}</h3>

    </div>
  )
}

export default Ludo
