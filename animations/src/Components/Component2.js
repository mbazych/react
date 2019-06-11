import React, { Component } from 'react'
import { Spring } from 'react-spring/renderprops'

export class Component2 extends Component {
    render() {
        return (
            <Spring
                from={{ opacity: 0 }}
                to={{ opacity: 1 }}
                config={{ delay: 1000, duration: 1000 }}
            >
                {props => (
                    <div style={props}>
                        <div style={c2Style}>
                            <h1>Component2</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed semper, arcu vel pulvinar porttitor, mauris felis rhoncus est, at tristique dolor est sit amet purus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris quis convallis metus. Ut nec sapien a neque elementum accumsan eu pellentesque lorem. Sed orci odio, elementum sed finibus id, fermentum sed ligula. Etiam quis condimentum leo. Ut suscipit tristique urna eget lacinia. Proin leo dui, viverra sit amet elementum non, facilisis in urna. Etiam interdum, elit non finibus aliquam, magna metus maximus massa, ac pellentesque ipsum mi non odio. In id nibh a lacus venenatis egestas fermentum vel nibh. Nullam sed ultricies justo. Vivamus quis massa et massa feugiat aliquam. Fusce et aliquam dolor.</p>
                            <button style={btn} onClick={this.props.toggle}>Toggle Component 3</button>
                        </div>
                    </div>
                )}
            </Spring>
        )
    }
}

const c2Style = {
    background: 'slateblue',
    color: 'white',
    padding: '1.5rem'
}

const btn = {
    background: '#333',
    color: '#fff',
    padding: '1rem 2rem',
    border: 'none',
    textTransform: 'uppercase',
    margin: '15px 0'
}

export default Component2
