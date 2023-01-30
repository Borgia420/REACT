import logo from './logo.svg';
import './App.css';
import Saludo from './components/pure/saludo';
import SaludoF from './components/pure/saludoF';
import TaskListComponent from './components/container/task_list';
import ContactComponent from './components/container/contact_component';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      {/*componente propio saludo.jsx */}
      {/*<Saludo name="borgia"></Saludo>*/}
      {/*<SaludoF name="borgia"></SaludoF>*/}
      {/* <TaskListComponent></TaskListComponent> */}
      <ContactComponent></ContactComponent>
      </header>
    </div>
  );
}

export default App;
