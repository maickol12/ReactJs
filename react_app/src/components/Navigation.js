import React,{Component} from 'react';

class Navigation extends Component{
  render(){
    return (
        <nav className="navbar navbar-dark bg-dark">
          <a className="text-white">
            React
            <span className="badge badge-pill badge-light ml-2">
              {this.props.todos.todos.length}
            </span>
          </a>
        </nav>
    );
  }
}

export default Navigation;
