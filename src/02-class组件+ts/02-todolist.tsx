import React, { Component } from 'react';

interface IState {
  text: string;
  list: Array<string>;
}
class App extends Component<any, IState> {
  state = {
    text: '',
    list: [],
  };

  myRef = React.createRef<HTMLInputElement>();

  render() {
    return (
      <div>
        {/* 1.受控写法 */}
        {/* <input
          value={this.state.text}
          onChange={(evt) => {
            this.setState({
              text: evt.target.value,
            });
          }}
        />
        <button
          onClick={() => {
            console.log(this.state.text);
          }}
        >
          click
        </button> */}
        {/* 2.ref写法 */}
        <input ref={this.myRef} />
        <button
          onClick={() => {
            // console.log(this.myRef.current?.value);
            console.log((this.myRef.current as HTMLInputElement).value);
            this.setState({
              list: [
                ...this.state.list,
                (this.myRef.current as HTMLInputElement).value,
              ],
            });
          }}
        >
          click
        </button>
        <ul>
          {this.state.list.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
