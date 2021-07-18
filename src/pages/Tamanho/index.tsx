import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import '../Tamanho/index.scss';
import pizzaImg from '../../assets/images/pizza.jpg';
import api from '../../services/api';
import { BoxPizza } from './styles';

interface PropsTamanho {
    id: string,
    tamanho: string,
    description: string,
}

function Tamanho() {
    const history = useHistory();
    const [tamanhos, setTamanhos] = useState<PropsTamanho[]>([]);
    const [selectedTamanho, setSelectedTamanho] = useState("");

    useEffect(() => {
        api.get('/tamanhos').then((response) => {
            setTamanhos(response.data);
        })
    }, []);

    function handleFinishOrder() {
        alert("Pedido Finalizado");
        history.push('/');
    }

    function handleSelectedTamanho(id: string) {
        setSelectedTamanho(id);
    }

    return (
        <div id="tamanho-page">
            <header>
                <div className="container">
                    <h1>Barra de Progresso</h1>
                    <div id="stepProgressBar">
                        <div className="step">
                            <p className="step-text">Passo 1</p>
                            <div className="bullet completed">1</div>
                        </div>
                        <div className="step">
                            <p className="step-text">Passo 2</p>
                            <div className="bullet completed">2</div>
                        </div>
                        <div className="step">
                            <p className="step-text">Passo 3</p>
                            <div className="bullet completed">3</div>
                        </div>

                    </div>

                </div>
            </header>
            <main>
                {tamanhos.map(({ tamanho, description, id }) => (
                    <form>
                        <BoxPizza key={id} className="main-content" isActive={id !== selectedTamanho && selectedTamanho !== ""}>
                            <div className="radio-button">
                                <button type="button" className="select-button" onClick={() => handleSelectedTamanho(id)}>Selecionar</button>
                            </div>
                            <h2>Massa: {tamanho}</h2>
                            <div>
                                <div>
                                    <img src={pizzaImg} alt="Pizza Napolitana" />
                                </div>
                                <div>
                                    <h3>Massa:</h3>
                                    <p>{tamanho}</p>
                                    <h3>Descrição:</h3>
                                    <p>{description}</p>
                                </div>
                            </div>
                        </BoxPizza>
                    </form>
                ))
                }
            </main>
            <footer>
                <div>
                    <button type="button" onClick={handleFinishOrder}>Finalizar Pedido</button>
                </div>
            </footer>
        </div>
    );
}

export default Tamanho;
