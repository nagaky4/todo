import React, { Component } from 'react'

class TodoController extends Component {

    constructor(props) {
        super(props)
        this.state = {
            newText: this.props.proTodoChoose.text
        }
    }


    ExecuteSubmit = (event) => {
        if (!this.props.proIsEdit) {
            this.props.fuInsertTodo(event, this.state.newText);
        } else {
            this.props.fuSaveTodoChange(event, this.state.newText)
        }
        this.setState({
            newText: ''
        })
    }


    GetValueEdit = (event) => {
        this.setState({
            newText: event.target.value
        })
    }

    ShowAccordinglyForm = () => {


        if (!this.props.proIsEdit) {
            return (
                <form onSubmit={(event) => this.ExecuteSubmit(event)}>
                    <div className="form-group" >
                        <input value={this.state.newText} type="text" className="form-control" placeholder="New todo" aria-describedby="helpId"
                            onChange={(event) => this.GetValueEdit(event)}
                        />
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-outline-primary">Add+</button>
                    </div>
                </form>
            )
        } else {

            return (
                <form onSubmit={(event) => this.ExecuteSubmit(event)}>
                    <div className="form-group" >
                        <input type="text" className="form-control" aria-describedby="helpId"
                            value={this.state.newText}
                            onChange={(event) => this.GetValueEdit(event)}
                        />
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-outline-primary">Save</button>
                        <button onClick={()=>this.props.fuCancelEdit()}  type="button" className="btn btn-outline-warning ml-3">Cancel</button>

                    </div>
                </form>
            )
        }
    }

    render() {
        return (
            <div>
                {this.ShowAccordinglyForm()}
            </div>
        )
    }
}

export default TodoController