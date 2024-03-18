import Card from "./components/Card"
import swPosterImg from "./assets/sw-poster.jpg"
import esbPosterImg from "./assets/esb-poster.jpg"
import rotjPosterImg from "./assets/rotj-poster.jpg"

export default function App() {
  return (
    <div> {/*No lugar da Div podemos usar o Fragment <> que é uma forma mais limpa e semântica de agrupar elementos */}
      <Card title="Pôster: Star Wars (1977)" posterImg={swPosterImg}/>
      <Card title="Pôster: Empire Stikes Back (1980)" posterImg={esbPosterImg} />
      <Card title="Pôster: Return of the jedi (1983"posterImg={rotjPosterImg}/>   
    </div>
  )
}




