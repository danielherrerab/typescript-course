import React from "react"
import { Todo } from '../Models/Todo'

export interface TodoListProps {
  items: Todo[],
  onDeleteTodo: (todoId: string) => void
}
const TodoList: React.FC<TodoListProps> = ({ items, onDeleteTodo }) => {

  return (
    <div className="container">
      <div className="row">
        {items.map(item => (
          <div className="col" key={item.id}>
            <div className="card" style={{width: '100px',minHeight: '100px'}}>
              <div className="card-body">
                {item.text}
              </div>
              <div className="card-footer">
                <button 
                  className="btn btn-danger btn-sm"
                  onClick={onDeleteTodo.bind(null, item.id)}
                >
                  Delete
                </button>
              </div>
            </div>
            
          </div>
        ))}
      </div>
      
    </div>

  )
}
export default TodoList;
