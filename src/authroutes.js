import React from 'react'
import { Route, Switch } from 'react-router-dom'

//components
import Basket from './components/Basket'
import NewListForm from './components/NewListForm'
import Navbar from './components/Navbar'

const AuthRoutes = () => {

    return <div>
        <Navbar />
        <Switch>
            <Route exact path="/home" component={Basket} />
            <Route exact path="/add_new_list" component={NewListForm} />
        </Switch>
    </div>
}

export default AuthRoutes