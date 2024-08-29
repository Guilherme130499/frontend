
export default function NumeroAleatorio() {
  
    const NumeroAleatorio = Math.floor(Math.random() * 100 ) + 1;
    console.log (NumeroAleatorio)
  
    return (

    <>
        <h2>Número Aleatorio: {NumeroAleatorio}</h2>
        <p></p>
    </>
    
  )
}
