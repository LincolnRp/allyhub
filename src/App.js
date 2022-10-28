import Router from "./routes/Router";
import { ChakraProvider } from "@chakra-ui/react";
import {DivContainerApp} from './pages/Home/style'
import  GlobalState from './global/GlobalState'
function App() {

  return (

    <GlobalState>
    <ChakraProvider>
    <Router/>
    </ChakraProvider>
    </GlobalState>
    
  );
}

export default App;
