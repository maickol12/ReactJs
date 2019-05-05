import React,{Component} from 'react';
class TodoForm extends Component{
  constructor(){
    super();
    this.state = {
      title:"",
      responsible:"",
      description:"",
      priority:'low'
    };
    this.handleInput      = this.handleInput.bind(this);
    this.handleSubmit     = this.handleSubmit.bind(this);
  }

  handleInput(e){
    const {value,name} = e.target;
    this.setState({
      [name]:value
    })
  }
  handleSubmit(e){
    e.preventDefault();
    this.props.onAddToDo(this.state);
  }


  render(){
    return(
      <div className="card col-md-2 mt-3 ml-3">
        <form className="card-body" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="title"
              className="form-control"
              placeholder="title"
              onChange={this.handleInput}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="responsible"
              className="form-control"
              placeholder="responsible"
              onChange={this.handleInput}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="description"
              className="form-control"
              placeholder="description"
              onChange={this.handleInput}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="priority"
              className="form-control"
              placeholder="priority"
              onChange={this.handleInput}
            />
          </div>
          <div className="form-group">
            <button className="btn btn-primary">
              Save
            </button>
          </div>
        </form>

      </div>
    );
  }
}

export default TodoForm;
