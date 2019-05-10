import React,{Component} from 'react';
import { render } from 'react-dom';

class App extends Component{
    constructor(){
        super();
        this.state = {
            titulo:"",
            descripcion:"",
            tasks: [],
            _id:''
        }
        this.addTask        = this.addTask.bind(this);
        this.handleChange   = this.handleChange.bind(this);
        this.fetchTasks     = this.fetchTasks.bind(this);
    }
    addTask(e){        
        if(this.state._id == ''){
            fetch('/api/tasks',{
                method: 'POST',
                body: JSON.stringify(this.state),
                headers:{
                    "Accept":"application/json",
                    "Content-Type":"application/json"
                }
             }).
             then(res => res.json()).
             then(data => {
                 M.toast({html:"Task Saved"});
                 this.setState({titulo:"",descripcion:""});
                 this.fetchTasks();
             }).
             catch(res => console.log(res));
        }else{
            fetch('/api/tasks/'+this.state._id,{
                method: 'PUT',
                body:JSON.stringify(this.state),
                headers:{
                    "Accept":"application/json",
                    "Content-Type":"application/json"
                }
            }).
            then(res => res.json()).
            then(data => {
                this.fetchTasks();
                M.toast({html:"Task Update"});
                this.setState({titulo:'',descripcion:'',_id:''});
            });
        }
        e.preventDefault();
    }
    
    componentDidMount(){
        this.fetchTasks();
    }

    fetchTasks(){
        fetch('/api/tasks').
        then(res => res.json()).
        then(data => {
            this.setState({tasks:data});
            console.log(this.state.tasks);
        });
    }
    deleteTask(idTask){
        if(confirm("Are you sure?")){
            fetch("/api/tasks/"+idTask,
            {
                method:"DELETE",
                headers:{
                    "Accept":"application/json",
                    "Content-Type":"application/json"
                }
            }).
            then(res => res.json()).
            then(data => {
                M.toast({html:"Task Delete"})
                this.fetchTasks();
            });
        }
    }
    editTask(idTask){
        fetch("/api/tasks/"+idTask).
        then(res => res.json()).
        then(data => {
            this.setState({
                titulo:data.titulo,
                descripcion:data.descripcion,
                _id:data._id
            }); 
        });
    }
    handleChange(e){
        const {name,value} = e.target;
        this.setState({
            [name]: value
        });
    }

    render(){
        return(
            <div>
                <nav className="light-blue darken-4">
                    <div className="container">
                        <a className="brand-logo">
                            MERM STACK
                        </a>
                    </div>
                </nav>
                <div className="container">
                    <div className="row">
                        <div className="col s5">
                            <div className="card">
                                <div className="card-content">
                                    <form onSubmit={this.addTask}>
                                        <div className="row">
                                            <div className="input-field col s12">
                                                <input type="text" onChange={this.handleChange} placeholder="Task Title" name="titulo" value={this.state.titulo}/>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="input-field col s12">
                                                <textarea type="text" onChange={this.handleChange} placeholder="Task Description" className="materialize-textarea" name="descripcion" value={this.state.descripcion}></textarea>
                                            </div>
                                        </div>
                                        <button type="submit" className="btn light-blue darken-4">
                                            Send
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col s7">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Titulo</th>
                                        <th>Descripcion</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.tasks.map(task => {
                                            return [
                                                <tr key={task._id}>
                                                    <td>{task.titulo}</td>
                                                    <td>{task.descripcion}</td>
                                                    <td>
                                                        <button onClick={ ()=> this.editTask(task._id) } style={{margin:'4px'}} className="btn light-blue darken-4"><i className="material-icons">edit</i></button>
                                                        <button onClick={ ()=> this.deleteTask(task._id) } className="btn light-blue darken-4"><i className="material-icons">delete</i></button>
                                                    </td>
                                                </tr>
                                            ]
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default App;