import { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import Api from '../../services/api';
import './home.css';

export default function Home(){

    const [filmes, setFilmes] = useState([])

    useEffect(() =>{
        // https://sujeitoprogramador.com/r-api/?api=filmes

        async function loadFilme(){
            const {data } = await Api.get('r-api/?api=filmes')
            setFilmes(data)
        }

        loadFilme();
    },[])
    return(
        <div className="container">
            <div className="list-filmes">
                {
                    filmes.map( filme => {
                        return(
                            <article key={filme.id}>
                                <strong>{filme.nome}</strong>
                                <img src={filme.foto} alt={filme.nome} />
                                <Link to={`/filme/${filme.id}`}>Acessar</Link>
                            </article>
                        )
                    })
                }
            </div>
        </div>
    )
}