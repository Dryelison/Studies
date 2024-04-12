import UserContext from "./contexts/UserContext"
import Container from "./components/container"
import UserInfo from "./components/UserInfo"

export default function App(){
  const user = {
    name: "Jonh",
    email:"Jonh@gmail.com"
  }
  return (
    <>
      <UserContext.Provider value={user}> 
      <h1>Use Context</h1>
      <Container>
      <p>Este é o nosso app com contexto</p>
      </Container>
      <UserInfo/>
      </UserContext.Provider>
    </>
  )
}