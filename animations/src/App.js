import React, { Component } from 'react';
import { Transition, animated } from 'react-spring/renderprops'
import Component1 from './Components/Component1'
import Component2 from './Components/Component2'
import Component3 from './Components/Component3'
import './App.css';

export class App extends Component {
  state = {
    showComponent3: false
  }

  toggle = e => this.setState({ showComponent3: !this.state.showComponent3 })

  render() {
    return (
      <div className="App">
        <Component1 />
        <Component2 toggle={this.toggle} />
        <Transition
          native
          items={this.state.showComponent3}
          from={{ opacity: 0 }}
          enter={{ opacity: 1 }}
          leave={{ opacity: 0 }}
        >
          {show => show && (props => (
            <animated.div style={props}>
              <Component3/>
            </animated.div>
          ))}
        </Transition>
      </div>
    )
  }
}

export default App
