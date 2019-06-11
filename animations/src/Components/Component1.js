import React, { Component } from 'react'
import { Spring } from 'react-spring/renderprops'
export class Component1 extends Component {
    render() {
        return (
            <Spring 
                from={{ opacity: 0, marginTop: -500 }}
                to={{ opacity: 1, marginTop: 0}}
            >
                {props => (
                    <div style={props}>
                        <div style={c1Style}>
                            <h1>Component1</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed semper, arcu vel pulvinar porttitor, mauris felis rhoncus est, at tristique dolor est sit amet purus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris quis convallis metus. Ut nec sapien a neque elementum accumsan eu pellentesque lorem. Sed orci odio, elementum sed finibus id, fermentum sed ligula. Etiam quis condimentum leo. Ut suscipit tristique urna eget lacinia. Proin leo dui, viverra sit amet elementum non, facilisis in urna. Etiam interdum, elit non finibus aliquam, magna metus maximus massa, ac pellentesque ipsum mi non odio. In id nibh a lacus venenatis egestas fermentum vel nibh. Nullam sed ultricies justo. Vivamus quis massa et massa feugiat aliquam. Fusce et aliquam dolor.</p>
                            <Spring
                                from={{number: 0 }}
                                to={{number: 10 }}
                                config={{duration: 5000}}
                            >
                                {props => (
                                    <div style={props}>
                                        <h1 style={counter}>
                                            {props.number.toFixed()}
                                        </h1>
                                    </div>
                                )}
                            </Spring>
                        </div>
                    </div>
                )}
            </Spring>

        )
    }
}

const counter = {
    background: '#333',
    textAlign: 'center',
    width: '100px',
    borderRadius: '50%',
    margin: '1rem auto'
}

const c1Style = {
    background: 'steelblue',
    color: 'white',
    padding: '1.5rem'
}

export default Component1
