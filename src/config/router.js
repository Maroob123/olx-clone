import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "../Home";
import Post from "../comps/post";
// import ShowMore from "../comps/fullpage"

class AppRouter extends React.Component {
    render() {
        return (
            <Router>
                <Routes>
                    <Route path='/' exact element={<Home/>}  />
                    <Route path='/post' element={<Post/>}  />
                    {/* <Route path='/ShowMore' component={ShowMore} /> */}
                </Routes>
            </Router>
        )
    }
}

export default AppRouter;