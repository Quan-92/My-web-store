import React from 'react'

import { Route, Switch } from 'react-router-dom'

import Home from '../pages/Home'
import Catalog from '../pages/Catalog'
import Cart from '../pages/Cart'
import Product from '../pages/Product'

const Routes = () => {
  return (
    <Switch>
      <Route path='/' exact component={Home}/>
      <Route path='/Catalog/:slug' exact component={Product}/>
      <Route path='/Catalog' exact component={Catalog}/>
      <Route path='/Cart' exact component={Cart}/>
    </Switch>
  )
}

export default Routes