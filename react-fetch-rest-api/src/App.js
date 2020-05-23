// import React from 'react';
import React, { Component } from 'react';

// import logo from './logo.svg';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

class App extends Component {
  state = {
    todos: []
  }
  // [...]
  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then((data) => {
      this.setState({ todos: data })
      console.log(this.state.todos)
    })
    .catch(console.log)
  }

  render() {

    return (
       <div className="container">
        <div className="col-xs-12">
        <h1>My Todos</h1>
        {this.state.todos.map((todo) => (
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{todo.title}</h5>
              <h6 className="card-subtitle mb-2 text-muted">
              { todo.completed &&
                <span>
                Completed
                </span>
              }
              { !todo.completed &&
                <span>
                  Pending
                </span>
              }              
              </h6>
            </div>
          </div>
        ))}
        </div>
       </div>
    );
  }
}

export default App;