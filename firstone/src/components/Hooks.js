import {useState} from 'react'; // Atualizar valores na exibição

const Hooks = () => {

    const [novaIdade, setNovaIdade] = useState(22); // dentro está o valor inicial
    const changeAge = () => {
        setNovaIdade(23);
    }
    return (
        <div>
            <p>Idade: {novaIdade}</p>
            <button onClick={changeAge}>nova idade</button>
        </div>
    )
}

export default Hooks