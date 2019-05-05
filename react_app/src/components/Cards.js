import React,{Component} from 'react';

class Cards extends Component{
  constructor(){
    super();
    this.handleRemoveToDo = this.handleRemoveToDo.bind(this);
  }

  handleRemoveToDo(index){
    this.props.onRemoveToDoIndex(index);
  }
  render(){
    return(
      <div className="cards row ml-3 mr-3">
        {
          this.props.todos.todos.map(
            (todo,i)=>{
              return(
                <div className="col-md-4 mt-4" key={i}>
                  <div className="card">
                    <div className="card-header">
                      <h3>{todo.title}</h3>
                      <span className="badge badge-pill badge-danger ml-2">
                        {todo.priority}
                      </span>
                    </div>
                    <div className="card-body">
                      <p>{todo.description}</p>
                      <p><mark>{todo.reponsible }</mark></p>
                    </div>
                    <div className="card-footer">
                      <button className="btn btn-danger"
                        onClick={this.handleRemoveToDo.bind(this,i)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              )
            }
          )
        }
      </div>
    );
  }
}


export default Cards;
