import React, {useState} from 'react';

function TodoForm({addTodo}) {

    const [userInput, setUserInput] = useState('');

    const handleChange = (e) => {
        setUserInput(e.currentTarget.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (userInput.trim() !== '') {
            addTodo(userInput);
            setUserInput('');
        }
    }

    return (
        <form className="flex align-center justify-center" onSubmit={handleSubmit}>
            <input className="form-control px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none text-center" type="text" placeholder="Add a new task" value={userInput} onChange={handleChange} />
            <button className="px-6 py-2.5 ml-1 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" type="submit">Add</button>
        </form>
    );
}

export default TodoForm