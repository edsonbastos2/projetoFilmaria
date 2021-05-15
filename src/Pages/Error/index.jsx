import bgErro from '../../assets/bgerro.svg';
import './erro.css';

export default function Error(){
    return(
        <div className="not-fount">
            <img src={bgErro} alt="" />
        </div>
    )
}