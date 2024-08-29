
import Cabecalho from './Cabecalho'
import Familia from './Familia'
import Filho from './Filho'
import MeuComponente from './MeuComponente'
import NumeroAleatorio from './NumeroAleatorio'
import NumeroMaior from './NumeroMaior'

export default  function FundamentosPage() {
    return (
    <>
        
        <Cabecalho titulo= "Fundamentos" descricao= "Pagina de fundamentos de React/Next"/>
        <hr />

        <MeuComponente />
        <hr />

        <NumeroMaior numA={2} numB={10} />
        <hr />

        <NumeroAleatorio />
        <hr />
        
        <Cabecalho />
        <hr />

        <Familia nomeFamilia="sousa">
            <Filho nome="Gui" sobreNome="Sousa" />
            <Filho nome="a" sobreNome="d" />
            <Filho nome="b" sobreNome="j" />
            <Filho nome="c" sobreNome="f" />
        </Familia>
        <hr />

        <Filho />
    </>)
    
}