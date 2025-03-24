import './App.css';
import RegistrationForm from './components/RegistrationForm';
import Todolist from './components/TodoList';

function App() {
  return (
    <div className="App">
      <div>
<RegistrationForm/>
</div>
<div>
  <Todolist/>
</div>
    </div>
  );
}

export default App;
