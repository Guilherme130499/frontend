export default function NumeroMaior(props) {

    const getMaior = () => {
        if(props.numA > props.numB){
            return props.numA
        } if(props.numB > props.numA){
            return props.numB
        }
    }
    
    return(
        <>
        <h2>componente Numero Maior</h2>
        <p>Numeros recebidos: {props.numA} e {props.numB}</p>
        <p>O numero maior é: {getMaior()} </p>
        <p>Propriedades Recebidas: {props.teste}</p>
        
        </>
    )
}