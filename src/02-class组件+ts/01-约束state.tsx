import React, { Component } from 'react';

interface IState {
  name: string;
}

// 泛型规范class类组件：<Props约束，State约束>
class App extends Component<any, IState> {
  state = {
    name: 'aaa',
  };

  render() {
    return (
      <div>
        <p>
          {this.state.name.substring(0, 1).toUpperCase() +
            this.state.name.substring(1)}
        </p>
        <button
          onClick={() => {
            this.setState({
              name: 'bbb',
            });
          }}
        >
          click
        </button>
      </div>
    );
  }
}

export default App;
