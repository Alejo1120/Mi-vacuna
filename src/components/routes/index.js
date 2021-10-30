import { Switch , Route, } from 'react-router-dom'; 
import { HomePage } from '../../pages/home/home_page';



export default function Router(){
    return (
        <Switch>

            <Route exact path='/'  component={HomePage} />

        </Switch>

    );

}