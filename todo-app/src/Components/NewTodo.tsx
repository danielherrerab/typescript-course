import React, { useRef } from "react";

type NewTodoProps = {
  onAddTodo: (todoText: string) => void;
};

const NewTodo: React.FC<NewTodoProps> = ({ onAddTodo }, ...props) => {
  const textInputRef = useRef<HTMLInputElement>(null)
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = textInputRef.current!.value;
    onAddTodo(enteredText);
  }
  return (
    <form onSubmit={submitHandler}>
      <div className="mb-3">
        <label htmlFor="todo-text" className="form-label">New Todo</label>
        <input type="text" className="form-control" id="todo-text" placeholder="name@example.com" ref={textInputRef} />
      </div>
      <button className="btn btn-primary" type="submit">
        Add TODO
      </button>
    </form>
  )
}

export default NewTodo;
