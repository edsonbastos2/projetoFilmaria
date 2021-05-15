import { useEffect, useState } from "react";
import {Link} from 'react-router-dom';
import './favoritos.css';

export default function Favoritos(){

    const [filme, setFilme] = useState([])

    useEffect(() => {
        const minhaLista = localStorage.getItem('filmes');
        setFilme(JSON.parse(minhaLista) || [])
    },[])

    function handleDelete(id){
        const filtroFilmes = filme.filter((filme) => {
            return (filme.id !== id)
        })

        setFilme(filtroFilmes)
        localStorage.setItem('filmes', JSON.stringify(filtroFilmes))
    }

    return(
        <div className="meus-filmes">
            <h1>Meu Filmes</h1>
            <ul>
                {filme.map(item => {
                    return(
                        <li>
                            <span>{item.nome}</span>
                            <div className="btnFavoritos">
                                <Link to={`/filme/${item.id}`}>Ver detalhes</Link>
                                <button onClick={() => handleDelete(item.id)}>Excluir</button>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}