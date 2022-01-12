import TodoListItem from '../todo-list-item/todo-list-item';

import './todo-list.css';

const TodoList = props => {
  const { data, deleteitem, onComplete } = props;

  const el = data.map(item => {
    const { id, ...itemProps } = item;

    return (
      <TodoListItem
        deleteitem={() => deleteitem(id)}
        onComplete={() => onComplete(id)}
        key={id}
        id={id}
        {...itemProps}
      />
    );
  });

  return <ul className='todo__list'>{el}</ul>;
};

export default TodoList;
