import { HelloWorld as HelloWorldComponent, List as Lista } from "./components/"
import { eDeMaior as eMaioridade, agrupaPorMaiorEMenor } from "./modules/utils"
import pessoasMock from "../js/mock/pessoas"


// console.log('eDeMaior', eMaioridade(10))
// console.log('eDeMaior', eMaioridade(20))

// console.log(agrupaPorMaiorEMenor(pessoasMock))

const {maiores, menores} = agrupaPorMaiorEMenor(pessoasMock)

const html = `${HelloWorldComponent('Programador a Bordo')}
    <h3>Maiores</h3>
    ${Lista(maiores)}
    <h3>Menores</h3>
    ${Lista(menores)}
`

document.querySelector('#app').innerHTML = html
