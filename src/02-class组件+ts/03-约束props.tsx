import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
        <Child id={1} />
      </div>
    );
  }
}

interface ChildProps {
  id: number;
}

interface ChildState {
  name: string;
}

class Child extends React.Component<ChildProps, ChildState> {
  state = {
    name: 'Child',
  };

  render() {
    return (
      <div>
        我的名字叫:{this.state.name}
        <br />
        我的id是：{this.props.id}
      </div>
    );
  }
}

export default App;
