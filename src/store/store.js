import Vue from 'vue'
import Vuex from 'vuex'

// import gioconda from '../assets/gioconda.jpg'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    topRated: [
      {
        id: 1,
        name: 'Gioconda',
        price: 100,
        url: require('@/assets/gioconda.jpg'),
        desc: 'Very tasty Gioconda',
        rate: 4.1
      },
      {
        id: 2,
        name: 'Cake',
        price: 300,
        url: require('@/assets/cake.jpg'),
        desc: 'Very tasty gioconda',
        rate: 3.1
      },
      {
        id: 3,
        name: 'Croissant',
        price: 200,
        url: require('@/assets/croissant.jpg'),
        desc: 'Very tasty gioconda',
        rate: 5.0
      }
    ],
    allCategories: [
      {
        id: 4,
        name: 'Dumplings',
        price: 100,
        url: require('@/assets/dumplings.jpg'),
        desc: 'Very tasty dumplings',
        rate: 4.8
      },
      {
        id: 5,
        name: 'Barbecue',
        price: 300,
        url: require('@/assets/barbecue.jpg'),
        desc: 'Very tasty',
        rate: 3.1
      },
      {
        id: 6,
        name: 'Salas',
        price: 90,
        url: require('@/assets/salad.jpg'),
        desc: 'Very tasty',
        rate: 3.9
      }
    ],
    dishesNearYou: [
      {
        id: 7,
        name: 'Okroshka',
        price: 190,
        url: require('@/assets/okroshka.jpg'),
        desc: 'Very tasty Okroshka',
        rate: 4.7
      },
      {
        id: 8,
        name: 'Dessert',
        price: 310,
        url: require('@/assets/dessert.jpg'),
        desc: 'Very tasty',
        rate: 4.5
      },
      {
        id: 9,
        name: 'Pasta',
        price: 500,
        url: require('@/assets/pasta.jpg'),
        desc: 'Very tasty',
        rate: 4.0
      }
    ],
    
    cartItemCount: 0,
    cartItems: []
  },
  mutations: {
    addToCart(state, payload) {
      payload = {...payload, quantity: 1}
      if (state.cartItems.length > 0) {
        let itemIndex = state.cartItems.findIndex(i => i.id === payload.id)
        if (itemIndex >= 0) {
          state.cartItems[itemIndex]["quantity"] += 1;
          
        } else {
          state.cartItems.push(payload)
        }
      } else {
        state.cartItems.push(payload)
      }
      state.cartItemCount++;
    },
    removeToCart(state, payload) {
      if (state.cartItems.length > 0) {
        let itemIndex = state.cartItems.findIndex(i => i.id === payload.id)
        if (itemIndex >= 0 && state.cartItemCount > 0) {
          state.cartItems[itemIndex]["quantity"] -= 1;
          state.cartItemCount--;
        }
      }
    }
  },
  actions: {
    addToCart: (context, payload) => {
      context.commit('addToCart', payload)
    },
    removeToCart: (context, payload) => {
      context.commit('removeToCart', payload)
    }
  }
})