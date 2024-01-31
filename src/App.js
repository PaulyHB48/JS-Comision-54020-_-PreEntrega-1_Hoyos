import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";

import "bootstrap/dist/css/bootstrap.css"

function App(){
  return(
    <div>
      <NavBar/>
      <ItemListContainer greeting={'¡Control your spaces!'}/>
    </div>
  ) 
}

export default App;