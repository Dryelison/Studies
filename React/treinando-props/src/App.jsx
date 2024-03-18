import Pessoa from "./components/Pessoa"
import Title from "./components/title"

function App(){
  return(
    <div className="App">
      <Pessoa name="Dryelison"/>
      <Pessoa idade="28" />
      <Title interagir= "Pessoas"/>

    </div>

  )
}

export default App