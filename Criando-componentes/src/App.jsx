import HelloWorld from './components/HelloWorld'
import Pessoa from './components/Pessoa'
import SayMyName from './components/SayMyName'
import Frase from './components/frase'
import List from './components/list'
import Evento from './components/evento'
import Form from './components/form'

function App() {
  const name = 'Dryelison'
  const newName = name.toUpperCase()
  const nome = "Keyla"


  function sum(a, b) { 
    return a + b
    }
    
    const url = 'http://via.placeholder.com/150'
    
    return (
      <div className="App">
        <h1>Testando CSS</h1>
        <h2>Alterando o JSX</h2>
        <p>Olá, {newName}</p>
        <p>Soma: {sum(1, 2)}</p>
        <img src={url}alt="Minha Imagem" />
        <Frase/>
        <Frase/>
        <HelloWorld/>
        <SayMyName nome="Dryelison"/>
        <SayMyName nome="Jhony"/>
        <SayMyName nome={nome}/>
        <Pessoa
        nome= "Dryelison"
        idade="33"
        profissao="Advogado"
        foto="http://via.placeholder.com/150"
        />
      
        <List/>
        <Evento numero="1"/>
        <Evento numero= "2"/>
        < Form/>

      </div>
    )

}



export default App 
