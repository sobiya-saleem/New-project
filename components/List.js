import React, {Component} from 'react';
import Task from './Task';
class List extends Component{
   
    render(){
        return(
           <div className="List">
            {this.props.Todos.map((Todos, index) =>{
              return(
                  <Task 
                  key ={index}
                  index ={index}
                  handleClick ={this.props.handleClick}
                  Todos={Todos}
                  />
              )
           })
               
             }

           </div>
        )
    }
}
export default List;