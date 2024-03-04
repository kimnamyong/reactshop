import React from 'react'
import './TodoRoot.css'
import type * as types from './types'
import TodoInput from './TodoInput';
import TodoList from './TodoList';

type Props = {
  todoList: types.Todo[],
  addTodo: types.AddTodoFunc,
  toggleTodo: types.ToogleTodoFunc,
  deleteTodo: types.DeleteTodoFunc

}

function TodoRoot({ todoList, addTodo ,toggleTodo, deleteTodo }: Props) {
  return (
    <div className="todoRoot">
      <h1>할일</h1>
      <TodoInput addTodo={addTodo} />
      <TodoList todoList={todoList} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </div>
  )
}

export default TodoRoot;
