import { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import api from '../../services/api';
import './filme.css';

export default function Filme(){

    const [filme, setFilme] = useState([]);
    const {id} =  useParams();
    const [loading, setLoading] = useState(true);
    const history = useHistory();

    useEffect(() =>{
        async function loadFilme(){
            const {data} = await api.get(`r-api/?api=filmes/${id}`)

            if(data.length === 0){
                history.replace('/')
                return;
            }

            setFilme(data)
            setLoading(false)
        }

        loadFilme();
        return() => {
            console.log('Componente desmontado')
        }
    },[history,id])

    function salvaFilmes(){
        const minhaLista = localStorage.getItem('filmes')

        let filmesSalvo = JSON.parse(minhaLista) || []

        const hasFilme = filmesSalvo.some( (filmeSalvo) => filmeSalvo.id === filme.id)

        if(hasFilme){
            alert('Você já salvo esse filme!')
            return;
        }

        filmesSalvo.push(filme)
        localStorage.setItem('filmes',JSON.stringify(filmesSalvo))
        alert('Filme salvo com sucesso')
    }


    if(loading){
        return(
            <h1>Carregando seu Filme...</h1>
        )
    }

    return(
        <div className="info-filme">
            <h1>{filme.nome}</h1>
            <img src={filme.foto} alt={filme.nome} />
            <p>{filme.sinopse}</p>
            <div className="btn-infos">
            <button onClick={salvaFilmes} className="btn">Salvar</button>
            <a target="blank" className="btn" href={`https://www.youtube.com/results?search_query=${filme.nome} trailer`}>Trailer</a>
            </div>
        </div>
    )
}