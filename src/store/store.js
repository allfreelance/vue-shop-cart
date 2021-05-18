import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let cartItems = window.localStorage.getItem('cartItems');
let cartItemCount = window.localStorage.getItem('cartItemCount');

export const store = new Vuex.Store({
  state: {
    topRated: [
      {
        id: 1,
        name: 'Gioconda',
        price: 10,
        url: require('@/assets/gioconda.jpg'),
        desc: 'Very tasty Gioconda',
        rate: 4.1
      },
      {
        id: 2,
        name: 'Cake',
        price: 30,
        url: require('@/assets/cake.jpg'),
        desc: 'Very tasty gioconda',
        rate: 3.1
      },
      {
        id: 3,
        name: 'Croissant',
        price: 20,
        url: require('@/assets/croissant.jpg'),
        desc: 'Very tasty gioconda',
        rate: 5.0
      }
    ],
    allCategories: [
      {
        id: 4,
        name: 'Dumplings',
        price: 15,
        url: require('@/assets/dumplings.jpg'),
        desc: 'Very tasty dumplings',
        rate: 4.8
      },
      {
        id: 5,
        name: 'Barbecue',
        price: 30,
        url: require('@/assets/barbecue.jpg'),
        desc: 'Very tasty',
        rate: 3.1
      },
      {
        id: 6,
        name: 'Salad',
        price: 10,
        url: require('@/assets/salad.jpg'),
        desc: 'Very tasty',
        rate: 3.9
      }
    ],
    dishesNearYou: [
      {
        id: 7,
        name: 'Okroshka',
        price: 90,
        url: require('@/assets/okroshka.jpg'),
        desc: 'Very tasty Okroshka',
        rate: 4.7
      },
      {
        id: 8,
        name: 'Dessert',
        price: 10,
        url: require('@/assets/dessert.jpg'),
        desc: 'Very tasty',
        rate: 4.5
      },
      {
        id: 9,
        name: 'Pasta',
        price: 50,
        url: require('@/assets/pasta.jpg'),
        desc: 'Very tasty',
        rate: 4.0
      }
    ],
    
    cartItemCount: cartItemCount ? parseInt(cartItemCount) : 0,
    cartItems: cartItems ? JSON.parse(cartItems) : [],
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
        if (state.cartItems[itemIndex]["quantity"] === 0) {
          state.cartItems.splice(itemIndex, 1)
        }
      }
    },
    saveCart(state) {
      window.localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
      window.localStorage.setItem('cartItemCount', state.cartItemCount);
    },
    checkout(state) {
      state.cartItems = [];
      state.cartItemCount = 0;
      this.commit('saveCart');
    }
  },
  actions: {
    addToCart: (context, payload) => {
      context.commit('addToCart', payload)
      context.commit('saveCart', payload);
    },
    removeToCart: (context, payload) => {
      context.commit('removeToCart', payload)
      context.commit('saveCart', payload);
    }
  }
})