
import MeuComponente from './MeuComponente'
import NumeroMaior from './NumeroMaior'

export default  function FundamentosPage() {
    return (<>
        <h1>Página Fundamentos</h1>
        <hr />

        <MeuComponente />
        <hr />

        <NumeroMaior numA={2} numB={10} />
        
        
    </>)
}