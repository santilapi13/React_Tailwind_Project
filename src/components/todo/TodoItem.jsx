function TodoItem({todo, onComplete, onDelete}) {
    return(
        <div className="font-medium text-2xl flex justify-center m-4">
            {todo.task}
            <button className='px-4 py-2 m-1 bg-blue-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out' onClick={() => onDelete(todo.id)}>DELETE</button>
        </div>
    );
}

export default TodoItem