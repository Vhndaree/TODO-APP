import React from 'react';

class TodoItem extends React.Component {

  render() {
    const { id, title, completed, starred } = this.props.todo;
    return (
      <>
        <li >
          <span className="input">
            <button className={(starred) ? 'btn starred' : 'btn star'} onClick={this.props.toggleStar.bind(this, id)}>
              <i className="fa fa-star" aria-hidden="true"></i>
            </button>
            <input type="checkbox" className="checkbox" onChange={this.props.toggleCompleted.bind(this, id)} checked={completed} />
          </span>
          <div className="detail-wrapper">
            <span className={(completed) ? 'detail strike' : 'detail'}>{title}</span>
            <span className={(completed) ? 'date strike' : 'date'}>{new Date(id).toLocaleString()}</span>
          </div>
          <span className="option-wrapper">
            <button className="btn delete" onClick={this.props.deleteTodo.bind(this, id)}>
              <i className="fa fa-trash" aria-hidden="true"></i>
            </button>
            <button className="btn edit">
              <i className="fa fa-pencil" aria-hidden="true"></i>
            </button>
          </span>
        </li>
      </>
    )
  }
}

export default TodoItem;