import Home from '../src/components/Home'
import Cart from '../src/components/Cart'
import FoodDetails from '../src/components/FoodDetails'

export default [
  {
    path: '/',
    component: Home
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/food-details/:name',
    name: 'food-details',
    component: FoodDetails
  }
]