import { useDispatch, useSelector } from 'react-redux';
import { addTodo, toggleTodo, removeTodo } from './todoSlice';
import { useState } from 'react';

export default function TodoList() {
  const [text, setText] = useState('');
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (text.trim()) {
      dispatch(addTodo(text));
      setText('');
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleAdd();
  };

  return (
    <div className="p-8 max-w-xl mx-auto bg-white rounded-xl shadow-lg mt-10 animate-fade-in">
      <h1 className="text-3xl font-extrabold mb-6 text-blue-700 flex items-center gap-2">
        <span role="img" aria-label="todo">📝</span> Redux Todo List
      </h1>
      <div className="flex gap-2 mb-6">
        <input
          className="border-2 border-blue-200 focus:border-blue-500 px-4 py-2 w-full rounded-lg outline-none transition duration-200 shadow-sm focus:shadow-md"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Add a new task"
          aria-label="Add a new task"
        />
        <button
          onClick={handleAdd}
          className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-6 py-2 rounded-lg font-semibold shadow-md transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Add
        </button>
      </div>
      <ul className="space-y-3">
        {todos.length === 0 && (
          <li className="text-gray-400 italic text-center">No tasks yet. Add your first one!</li>
        )}
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex justify-between items-center p-3 border rounded-lg bg-gray-50 hover:bg-blue-50 transition group shadow-sm animate-fade-in"
          >
            <span
              onClick={() => dispatch(toggleTodo(todo.id))}
              className={`cursor-pointer select-none transition text-lg ${todo.completed ? 'line-through text-gray-400' : 'hover:text-blue-600'}`}
              tabIndex={0}
              onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && dispatch(toggleTodo(todo.id))}
              aria-label={todo.completed ? 'Mark as incomplete' : 'Mark as complete'}
            >
              {todo.text}
            </span>
            <button
              onClick={() => dispatch(removeTodo(todo.id))}
              className="text-red-500 hover:text-white hover:bg-red-500 border border-red-200 px-3 py-1 rounded-lg transition group-hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-red-300"
              aria-label="Delete task"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}