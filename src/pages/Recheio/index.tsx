import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import '../Recheio/index.scss';
import pizzaImg from '../../assets/images/pizza.jpg';
import api from '../../services/api';
import { BoxPizza } from './styles';

interface PropsRecheios {
    id: string,
    sabor: string,
    description: string,
}

function Recheio() {
    const history = useHistory();
    const [recheios, setRecheios] = useState<PropsRecheios[]>([]);
    const [selectedRecheio, setSelectedRecheio] = useState("");

    useEffect(() => {
        api.get('/recheios').then((response) => {
            setRecheios(response.data);
        })
    }, []);

    function handlePizzaSize() {
        history.push('/tamanho/new');
    }

    function handleSelectedRecheio(id: string) {
        setSelectedRecheio(id);
    }

    return (
        <div id="recheio-page">
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
                            <div className="bullet">3</div>
                        </div>

                    </div>

                </div>
            </header>
            <main>
                {recheios.map(({ sabor, description, id }) => (
                    <form>
                        <BoxPizza key={id} className="main-content" isActive={id !== selectedRecheio && selectedRecheio !== ""}>
                            <div className="radio-button">
                                <button type="button" className="select-button" onClick={() => handleSelectedRecheio(id)}>Selecionar</button>
                            </div>
                            <h2>Pizza de {sabor}</h2>
                            <div>
                                <div>
                                    <img src={pizzaImg} alt="Pizza Napolitana" />
                                </div>
                                <div>
                                    <h3>Pizza de:</h3>
                                    <p>{sabor}</p>
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
                    <button type="button" onClick={handlePizzaSize}>Próximo Step</button>
                </div>
            </footer>
        </div>
    );
}

export default Recheio;
