import StatusText from "./StatusText"
import { Subtitle } from "./SubTitle"
import Title from "./Title"


// Usar PascalCase no React = letra maiuscula no começo e no inicio de cada nova palavra


export default function App() {
 

  return (
    <div style={{
      backgroundColor: "#2c2c9c",
      display: 'grid',
      minHeight: '100vh',
      placeContent: 'center',
      textAlign: 'center'
    }
    }>
    
      <Title/>   
      <Subtitle/>
      <StatusText/>
      <img src="https://i.pinimg.com/originals/ba/94/64/ba9464145eba8762f6286a3c8387c951.jpg" alt="imagem" />
    </div>

  )
}