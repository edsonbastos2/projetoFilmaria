import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './Pages/Home';
import Filme from './Pages/Filmes';
import Header from './components/Header';
import Favoritos from './Pages/Favoritos'

export default function Router(){
    return(
        <BrowserRouter>
            <Header/>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/filme/:id" component={Filme}/>
                <Route exact path="/favoritos" component={Favoritos}/>
            </Switch>
        </BrowserRouter>
    )
}