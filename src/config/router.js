import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from "../Home";
import post from "../comps/post";
// import ShowMore from "../comps/fullpage"

class AppRouter extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/post' component={post} />
                    {/* <Route path='/ShowMore' component={ShowMore} /> */}
                </Switch>
            </Router>
        )
    }
}

export default AppRouter;