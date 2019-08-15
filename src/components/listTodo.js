import React, { Component } from 'react'

class ListTodo extends Component {


    CovertDateTime(d) {
        let date = new Date(d);
        let y = date.getFullYear();
        let m = date.getMonth() + 1;
        let dd = date.getDate();
        let h = date.getHours();
        let mi = date.getMinutes();
        let ss = date.getSeconds();
        return `${dd}/${m}/${y} ${h}:${mi}:${ss}`;
    }



    LoadTodo = () => {
        return this.props.proTodoList.map((value, key) => {
            return (
                <tr key={key} className={this.props.proTodoChoose.key === key ? 'choose-this-tr' : ''}>
                    <td>{key}</td>
                    <td>{value.text}</td>
                    <td>{this.CovertDateTime(value.time)}</td>
                    <td>
                        <button
                            onClick={() => this.props.fuEditTodo(key)}
                            type="button"
                            className={this.props.proTodoChoose.key === key ? 'btn btn-outline-primary is-choose' : 'btn btn-outline-primary'}

                        >
                            Edit
                        </button>
                        <button
                            onClick={() => this.props.fuRemoveTodo(key)}
                            type="button"
                            className="btn btn-outline-danger ml-2"
                        >
                            Remove
                        </button>
                    </td>
                </tr>
            )
        })

    }


    render() {
        return (
            <div>
                <table className="table table-hover table-inverse">
                    <thead className="thead-inverse">
                        <tr>
                            <th>STT</th>
                            <th>Name</th>
                            <th>Time Create</th>
                            <th>Manage</th>
                        </tr>
                    </thead>

                    <tbody  >

                        {this.LoadTodo()}

                    </tbody>
                </table>
            </div>
        )
    }
}

export default ListTodo