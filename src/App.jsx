import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import TodoApp from "./components/todo/TodoApp";
import WeatherApp from "./components/weather/WeatherApp";
import TicTacToeApp from "./components/tictactoe/TicTacToeApp";
import NotFound from "./components/NotFound";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/todo-app" element={<TodoApp />} />
        <Route path="/weather-app" element={<WeatherApp />} />
        <Route path="/tictactoe-app" element={<TicTacToeApp />} />
      </Routes>
    </>
  );
}

export default App;
