import { Provider } from 'react-redux';
import TodoList from './features/TodoList.jsx';
import { store } from './app/store.js';

function App() {
  return (
    <Provider store={store}>
      <TodoList />
    </Provider>
  );
}

export default App;