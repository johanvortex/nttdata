import { BrowserRouter,Switch,Route } from "react-router-dom";
import { ClashOfClanesView } from '../Containers/Home/screen/ClashofClanesView';
const App =()=>{

    return(
        <>
         <BrowserRouter>
         <Switch>
         <Route exact path="/" component={ClashOfClanesView} />
         </Switch>
       </BrowserRouter>
        </>
    )



};
export default App;