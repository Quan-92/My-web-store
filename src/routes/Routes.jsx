import React from 'react'

import { Route, Switch } from 'react-router-dom'

import Home from '../pages/Home'
import Catalog from '../pages/Catalog'
import Cart from '../pages/Cart'
import Product from '../pages/Product'
import Account from '../pages/Account'

const Routes = () => {
  return (
    <Switch>
      <Route path='/' exact component={Home}/>
      <Route path='/Catalog/:slug' exact component={Product}/>
      <Route path='/Catalog' exact component={Catalog}/>
      <Route path='/Cart' exact component={Cart}/>
      <Route path='/Account' exact component={Account}/>
    </Switch>
  )
}

export default Routes