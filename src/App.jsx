import './App.css';
import React, {
  useEffect, createContext, useReducer, useContext,
} from 'react';
import {
  BrowserRouter, Route, Routes, useNavigate,
} from 'react-router-dom';
import Home from './components/pages/home';
import { reducer, initialState } from './reducers/userReducer';

export const UserContext = createContext();

const Routing = () => {
  const navigate = useNavigate();
  /* eslint-disable */
  const { state, dispatch } = useContext(UserContext);
  /* eslint-enable */

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      dispatch({ type: 'USER', payload: user });
    } else {
      navigate('/');
    }
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <UserContext.Provider value={{ state, dispatch }}>
      <BrowserRouter>
        <Routing />
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
