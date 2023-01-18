import { InfoBar } from "./components/InfoBar";
// import { Banner } from "./components/Banner";
import { Principal } from "./components/Principal";
import "./App.css";


function App() {
  return (
    <div className='App'>
      <InfoBar position={"top"} text='Ganhe R$ 10,00 de desconto no frete'/>
      <Principal />
      <InfoBar position={"bottom"} text='Todos os direitos reservados.'/>
    </div>
  );
}

export default App;
