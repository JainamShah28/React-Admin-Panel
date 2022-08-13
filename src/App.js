import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home.js';
import Login from './pages/Login.js';
import List from './pages/List.js';
import Single from './pages/Single.js';
import New from './pages/New.js';

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path='/'>
                    <Route element={<Home />} index />

                    <Route path='login' element={<Login />} />

                    <Route path='users'>
                        <Route element={<List />} index />
                        <Route path=':userID' element={<Single />} />
                        <Route path='new' element={<New />} />
                    </Route>
                </Route>
            </Routes>
        </div>
    );
}

export default App; 