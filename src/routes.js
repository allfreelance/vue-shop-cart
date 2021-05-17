import Home from '../src/components/Home'
import Card from '../src/components/Card'
import FoodDetails from '../src/components/FoodDetails'

export default [
  {
    path: '/',
    component: Home
  },
  {
    path: '/card',
    component: Card
  },
  {
    path: '/food-details',
    component: FoodDetails
  }
]