import React, { Component } from 'react';

interface AppState {
  isShow: boolean;
}

export default class App extends Component<unknown, AppState> {
  state = {
    isShow: false,
  };

  render() {
    return (
      <div>
        <Navbar
          toggleShow={() => {
            this.setState({
              isShow: !this.state.isShow,
            });
          }}
        />
        {this.state.isShow && <Siderbar />}
      </div>
    );
  }
}

interface NavbarProps {
  toggleShow: () => void;
}

class Navbar extends React.Component<NavbarProps, unknown> {
  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.props.toggleShow();
          }}
        >
          click
        </button>
      </div>
    );
  }
}

class Siderbar extends React.Component {
  render() {
    return <div>Siderbar</div>;
  }
}
