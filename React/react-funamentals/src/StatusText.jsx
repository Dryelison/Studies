export default function StatusText () { 

 const status = true
 return <h2>Current status: {status ? "ON" : "OFF"}</h2>
}