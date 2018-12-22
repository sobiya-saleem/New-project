import React, { Component } from 'react';
class Task extends Component {
    state = {
        Todo: {

        }
    }
    componentDidMount() {
        this.setState({
            Todo: this.props.Todos
        })
    }
    handleOnClick = () => {
        this.setState({
            Todo:
                {
                    ...this.state.Todo,
                    done: !this.state.Todo.done
                }
        })
    }
    render() {

        return (

            !!this.state.Todo &&
            <div className="Task">
                <span style={{ textDecoration: this.state.Todo.done ? 'line-through' : 'none' }}>
                    {this.state.Todo.value}
                    <button onClick={this.handleOnClick}>{this.state.Todo.done ?
                        'UNDO' : 'COMPLETE'}</button></span>
            </div>
        )
    }
}
export default Task;