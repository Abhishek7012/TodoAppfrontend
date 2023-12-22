import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './TodoApp.css';
import CardCarousel from '../CardCarousel/CardCarousel';
import Navbar from '../Nav/Navbar';
const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [editingTodoId, setEditingTodoId] = useState(null);
  const [editingTodoText, setEditingTodoText] = useState('');

  const addTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, { id: Date.now(), text: newTodo }]);
      setNewTodo('');
    }
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
    if (editingTodoId === id) {
      setEditingTodoId(null);
      setEditingTodoText('');
    }
  };

  const startEditing = (id, text) => {
    setEditingTodoId(id);
    setEditingTodoText(text);
  };

  const updateTodo = () => {
    const updatedTodos = todos.map((todo) =>
      todo.id === editingTodoId ? { ...todo, text: editingTodoText } : todo
    );
    setTodos(updatedTodos);
    setEditingTodoId(null);
    setEditingTodoText('');
  };

  return (
    <>
      <Navbar />

      <div className="container todo-app">
        <h1 className="text-center mb-4">To Do's</h1>

        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Add a new todo"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
          />
          <div className="input-group-append">
            <button className="btn btn-primary" type="button" onClick={addTodo}>
              Add
            </button>
          </div>
        </div>

        <CardCarousel
          cardsData={todos}
          renderCard={(todo) => (
            <div key={todo.id} className={`card ${editingTodoId === todo.id ? 'editing' : ''}`}>
              <div className="cross-icon" onClick={() => deleteTodo(todo.id)}>
                &#10006;
              </div>
              <div className="edit-icon" onClick={() => startEditing(todo.id, todo.text)}>
                &#9998;
              </div>
              {editingTodoId === todo.id ? (
                <div>
                  <input
                    type="text"
                    className="form-control"
                    value={editingTodoText}
                    onChange={(e) => setEditingTodoText(e.target.value)}
                  />
                  <button className="btn btn-success" onClick={updateTodo}>
                    Update
                  </button>
                </div>
              ) : (
                <div onClick={() => startEditing(todo.id, todo.text)}>{todo.text}</div>
              )}
            </div>
          )}
        />
      </div>
    </>
  );
};

export default TodoApp;
