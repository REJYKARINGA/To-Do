
import './App.css';
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
// import Products from './components/Products/Products'
// import Effects from './components/Effects/Effects'
// import { Container } from 'react-bootstrap';
// import MainRouter from './components/ReactRouter/MainRouter';
import Todo from './components/Todoapp/Todo'
function App() { 
  return (
    
    <div className="App"> 
<Todo />
    {/* <MainRouter /> */}
    {/* <Effects /> */}
    {/* <Container>
    <Products />
    </Container> */}
    </div>
  );
}

export default App;
