(function(t){function e(e){for(var s,c,n=e[0],o=e[1],l=e[2],d=0,m=[];d<n.length;d++)c=n[d],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&m.push(r[c][0]),r[c]=0;for(s in o)Object.prototype.hasOwnProperty.call(o,s)&&(t[s]=o[s]);u&&u(e);while(m.length)m.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],s=!0,n=1;n<a.length;n++){var o=a[n];0!==r[o]&&(s=!1)}s&&(i.splice(e--,1),t=c(c.s=a[0]))}return t}var s={},r={app:0},i=[];function c(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.m=t,c.c=s,c.d=function(t,e,a){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)c.d(a,s,function(e){return t[e]}.bind(null,s));return a},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/vue-shop-cart/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],o=n.push.bind(n);n.push=e,n=n.slice();for(var l=0;l<n.length;l++)e(n[l]);var u=o;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";a("85ec")},"096e":function(t,e,a){t.exports=a.p+"img/breakfast.c94907e5.png"},"144f":function(t,e,a){t.exports=a.p+"img/dumplings.d4de5a15.jpg"},"1a01":function(t,e,a){},"1da8":function(t,e,a){"use strict";a("889a")},"23dd":function(t,e,a){"use strict";a("3d90")},"26fd":function(t,e,a){t.exports=a.p+"img/cake.bc422fb3.jpg"},2817:function(t,e,a){},"2f5c":function(t,e,a){t.exports=a.p+"img/barbecue.8d866934.jpg"},"309c":function(t,e,a){t.exports=a.p+"img/salad.7e2f8138.jpg"},"3d90":function(t,e,a){},"45a8":function(t,e,a){t.exports=a.p+"img/pasta.2eceabce.jpg"},"52be":function(t,e,a){t.exports=a.p+"img/gioconda.74705af0.jpg"},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},i=[],c={name:"App"},n=c,o=(a("034f"),a("2877")),l=Object(o["a"])(n,r,i,!1,null,null,null),u=l.exports,d=a("8c4f"),m=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"wrapper"},[a("Header"),a("div",{staticClass:"content mt-4"},[a("div",{staticClass:"container mb-5 text-center"},[a("h4",{staticClass:"my4 fw-600 d-blue"},[t._v("Top rated")]),a("div",{staticClass:"row justify-content-between mb-4"},t._l(t.topRated,(function(e){return a("div",{key:e.id,staticClass:"col-md-6 col-lg-4 pointer",on:{click:function(a){return t.foodDetails(e)}}},[a("img",{staticClass:"content-img",attrs:{src:e.url,alt:""}}),a("h5",{staticClass:"fw-600 black"},[t._v(t._s(e.name))])])})),0),a("h4",{staticClass:"my4 fw-600 d-blue"},[t._v("All Categories")]),a("div",{staticClass:"row justify-content-between mb-4"},t._l(t.allCategories,(function(e){return a("div",{key:e.id,staticClass:"col-md-6 col-lg-4 pointer",on:{click:function(a){return t.foodDetails(e)}}},[a("img",{staticClass:"content-img",attrs:{src:e.url,alt:""}}),a("h5",{staticClass:"fw-600 black"},[t._v(t._s(e.name))])])})),0),a("h4",{staticClass:"my4 fw-600 d-blue"},[t._v("Dishes Near You")]),a("div",{staticClass:"row justify-content-between mb-4"},t._l(t.dishesNearYou,(function(e){return a("div",{key:e.id,staticClass:"col-md-6 col-lg-4 pointer",on:{click:function(a){return t.foodDetails(e)}}},[a("img",{staticClass:"content-img",attrs:{src:e.url,alt:""}}),a("h5",{staticClass:"fw-600 black"},[t._v(t._s(e.name))])])})),0)])]),a("Footer")],1)},f=[],p=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},v=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",[a("div",{staticClass:"footer"},[a("div",{staticClass:"footer-wrapper"},[a("h4",{staticClass:"fw600"},[t._v("Sweet Dish")])]),a("div",{staticClass:"about-us"},[a("div",[a("h5",{staticClass:"fw-600"},[t._v("About Us")])]),a("div",[a("h5",{staticClass:"fw-600"},[t._v("T & C")])]),a("div",[a("h5",{staticClass:"fw-600"},[t._v("Privacy Policy")])]),a("div",[a("h5",{staticClass:"fw-600"},[t._v("Contact Us")])])])])])}],C={name:"Footer"},h=C,b=(a("726b"),Object(o["a"])(h,p,v,!1,null,"dfee3262",null)),_=b.exports,y=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("header",{staticClass:"d-flex justify-content-between"},[s("div",{staticClass:"header",on:{click:function(e){return t.goto("home")}}},[s("h4",{staticClass:"sweet"},[t._v("Sweet Dish")]),s("img",{staticClass:"header-img",attrs:{src:a("096e"),alt:""}})]),s("div",{staticClass:"d-flex right"},[s("div",{staticClass:"d-flex cart",on:{click:function(e){return t.goto("cart")}}},[s("b-icon-cart",{staticClass:"cart-icon"}),s("span",{staticClass:"cart-count"},[t._v(t._s(t.cartItemCount))])],1),t._m(0)])])},g=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"d-flex"},[a("h5",{staticClass:"login"},[t._v("Login")]),a("h5",{staticClass:"register"},[t._v("Sign Up")])])}],w={name:"Header",computed:{cartItemCount:function(){return this.$store.state.cartItemCount}},methods:{goto:function(t){"home"===t?this.$router.push("/"):this.$router.push("/cart")}}},I=w,x=(a("5c06"),Object(o["a"])(I,y,g,!1,null,"7ae7163b",null)),k=x.exports,j={components:{Footer:_,Header:k},computed:{topRated:function(){return this.$store.state.topRated},allCategories:function(){return this.$store.state.allCategories},dishesNearYou:function(){return this.$store.state.dishesNearYou}},methods:{foodDetails:function(t){this.$router.push({name:"food-details",params:t})}}},$=j,S=(a("9e84"),Object(o["a"])($,m,f,!1,null,"adaa392e",null)),O=S.exports,T=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"d-flex cart-outer-div"},[a("Header"),a("div",{staticClass:"cart-body"},[t.totalPrice>0?a("div",{staticClass:"container mb-5"},[a("h4",{staticClass:"my-r my-cart"},[t._v("My Cart")]),a("div",{staticClass:"d-flex cart-body-wrapper"},[a("Summary",{attrs:{totalPrice:t.totalPrice}}),a("div",{staticClass:"row cart-info-wrapper justify-content-end"},[a("div",{staticClass:"cart-info col-md-12"},[a("h4",{staticClass:"fw-600"},[t._v("Cart")]),a("ul",t._l(t.cartItems,(function(e){return a("li",{key:e.id,staticClass:"cart-info-li"},[a("div",{staticClass:"cart-items"},[a("img",{staticClass:"cart-info-li-img",attrs:{src:e.url,alt:""}}),a("h6",{staticClass:"mt-15 cart-item-name"},[t._v(t._s(e.name))]),a("div",{staticClass:"cart-item-qnt-block"},[a("div",{staticClass:"d-flex mt-10"},[a("button",{staticClass:"remove",attrs:{type:"button"},on:{click:function(a){return t.removeItems(e)}}},[t._v("-")]),a("span",{staticClass:"cart-quantity"},[t._v(t._s(e.quantity))]),a("button",{staticClass:"add",attrs:{type:"button"},on:{click:function(a){return t.addItems(e)}}},[t._v("+")])]),a("h6",{staticClass:"mt-15 text-end cart-item-price"},[t._v(t._s(e.price*e.quantity)+" $")])])]),a("div",{staticClass:"line"})])})),0),a("div",{staticClass:"checkout-btn d-flex justify-content-end"},[a("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.checkout}},[t._v("Checkout")])])])])],1)]):a("EmptyCart")],1),a("Footer")],1)},P=[],E=(a("d81d"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row summary-wrapper"},[a("h4",{staticClass:"fw-600 summary-title"},[t._v("Summary")]),t._m(0),a("div",{staticClass:"col-md-4 summary-item"},[a("h6",[t._v("Rs "+t._s(t.totalPrice))]),a("h6",[t._v("SWEETDISH")]),a("h6",[t._v("Rs 50:")]),a("div",{staticClass:"my-3 line w-60"}),a("h6",[t._v("Rs "+t._s(t.totalPrice+50))])])])}),D=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-md-4 summary-item"},[a("h6",[t._v("Total: ")]),a("h6",[t._v("Promo Code:")]),a("h6",[t._v("Shipping:")]),a("div",{staticClass:"my-3 line w-120"}),a("h6",[t._v("Subtotal:")])])}],N={name:"Summary",props:["totalPrice"]},q=N,R=(a("becd"),Object(o["a"])(q,E,D,!1,null,"0dbdc4a6",null)),V=R.exports,F=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"empty-cart container my-5"},[a("b-icon-cart",{staticClass:"cart-icon"}),t._m(0)],1)},H=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mt-4"},[a("h4",{staticClass:"orange-red fw-600"},[t._v("Your cart is empty")]),a("h5",{staticClass:"darkblue fw-600"},[t._v("You can go to home page to view more food items")])])}],J={name:"EmptyCart"},Y=J,A=(a("23dd"),Object(o["a"])(Y,F,H,!1,null,"4d3b6627",null)),M=A.exports,G=a("1940"),U=a.n(G),B={name:"Cart",components:{Summary:V,EmptyCart:M,Footer:_,Header:k},computed:{cartItems:function(){return this.$store.state.cartItems},totalPrice:function(){var t=0;return this.$store.state.cartItems.map((function(e){t+=e["quantity"]*e["price"]})),t}},methods:{removeItems:function(t){this.$store.dispatch("removeToCart",t)},addItems:function(t){this.$store.dispatch("addToCart",t)},checkout:function(){U()("Good Job!","Success").then((function(t){t&&window.location.reload()}))}}},L=B,W=(a("1da8"),Object(o["a"])(L,T,P,!1,null,"ee252284",null)),z=W.exports,K=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"d-flex food-details-outer"},[a("Header"),a("div",{staticClass:"food-details"},[a("div",{staticClass:"container mb-5"},[a("h4",{staticClass:"my-4 fw600"},[t._v("Add item to cart")]),a("div",{staticClass:"row food-details-wrapper"},[a("div",{staticClass:"col-md-4 food-img-wrapper"},[a("img",{staticClass:"food-img",attrs:{src:t.details.url,alt:""}})]),a("div",{staticClass:"col-md-4 food-data"},[a("h5",{staticClass:"my-4 fw-600"},[t._v("Name: "+t._s(t.details.name))]),a("h5",{staticClass:"my-4 fw-600"},[t._v("Price: "+t._s(t.details.price))]),a("h5",{staticClass:"my-4 fw-600"},[t._v("Description: "+t._s(t.details.desc))]),a("h5",{staticClass:"my-4 fw-600"},[t._v("Rating: "+t._s(t.details.rate))]),a("div",[a("button",{staticClass:"btn btn-primary",on:{click:t.goToCart}},[t._v("Go to cart")]),a("button",{staticClass:"btn btn-success",on:{click:t.addToCart}},[t._v("Add item")]),a("button",{staticClass:"btn btn-danger",on:{click:t.removeToCart}},[t._v("Remove item")])])])])])]),a("Footer")],1)},Q=[],X={name:"FoodDetails",components:{Footer:_,Header:k},data:function(){return{details:this.$route.params}},methods:{goToCart:function(){this.$router.push("/cart")},addToCart:function(){this.$store.dispatch("addToCart",this.details)},removeToCart:function(){this.$store.dispatch("removeToCart",this.details)}},created:function(){void 0!==this.$route.params.id&&localStorage.setItem("details",JSON.stringify(this.$route.params))},mounted:function(){this.details=JSON.parse(localStorage.getItem("details"))}},Z=X,tt=(a("b8cc"),Object(o["a"])(Z,K,Q,!1,null,"17160569",null)),et=tt.exports,at=[{path:"/",component:O},{path:"/cart",component:z},{path:"/food-details/:name",name:"food-details",component:et}],st=a("5f5b"),rt=a("b1e0"),it=(a("f9e3"),a("2dd8"),a("94ea")),ct=a("5530");a("c740"),a("a434");s["default"].use(it["a"]);var nt=window.localStorage.getItem("cartItems"),ot=window.localStorage.getItem("cartItemCount"),lt=new it["a"].Store({state:{topRated:[{id:1,name:"Gioconda",price:10,url:a("52be"),desc:"Very tasty Gioconda",rate:4.1},{id:2,name:"Cake",price:30,url:a("26fd"),desc:"Very tasty gioconda",rate:3.1},{id:3,name:"Croissant",price:20,url:a("fdab"),desc:"Very tasty gioconda",rate:5}],allCategories:[{id:4,name:"Dumplings",price:15,url:a("144f"),desc:"Very tasty dumplings",rate:4.8},{id:5,name:"Barbecue",price:30,url:a("2f5c"),desc:"Very tasty",rate:3.1},{id:6,name:"Salad",price:10,url:a("309c"),desc:"Very tasty",rate:3.9}],dishesNearYou:[{id:7,name:"Okroshka",price:90,url:a("f17c"),desc:"Very tasty Okroshka",rate:4.7},{id:8,name:"Dessert",price:10,url:a("ccf7"),desc:"Very tasty",rate:4.5},{id:9,name:"Pasta",price:50,url:a("45a8"),desc:"Very tasty",rate:4}],cartItemCount:ot?parseInt(ot):0,cartItems:nt?JSON.parse(nt):[]},mutations:{addToCart:function(t,e){if(e=Object(ct["a"])(Object(ct["a"])({},e),{},{quantity:1}),t.cartItems.length>0){var a=t.cartItems.findIndex((function(t){return t.id===e.id}));a>=0?t.cartItems[a]["quantity"]+=1:t.cartItems.push(e)}else t.cartItems.push(e);t.cartItemCount++,this.commit("saveCart")},removeToCart:function(t,e){if(t.cartItems.length>0){var a=t.cartItems.findIndex((function(t){return t.id===e.id}));a>=0&&t.cartItemCount>0&&(t.cartItems[a]["quantity"]-=1,t.cartItemCount--),0===t.cartItems[a]["quantity"]&&t.cartItems.splice(a,1)}this.commit("saveCart")},saveCart:function(t){window.localStorage.setItem("cartItems",JSON.stringify(t.cartItems)),window.localStorage.setItem("cartItemCount",t.cartItemCount)}},actions:{addToCart:function(t,e){t.commit("addToCart",e)},removeToCart:function(t,e){t.commit("removeToCart",e)}}});s["default"].use(st["a"]),s["default"].use(rt["a"]),s["default"].config.productionTip=!1,s["default"].use(d["a"]),s["default"].use(it["a"]);var ut=new d["a"]({routes:at});new s["default"]({router:ut,store:lt,render:function(t){return t(u)}}).$mount("#app")},"5c06":function(t,e,a){"use strict";a("2817")},"726b":function(t,e,a){"use strict";a("9c43")},"779f":function(t,e,a){},"85ec":function(t,e,a){},"889a":function(t,e,a){},"9c43":function(t,e,a){},"9e84":function(t,e,a){"use strict";a("eb6c")},b8cc:function(t,e,a){"use strict";a("1a01")},becd:function(t,e,a){"use strict";a("779f")},ccf7:function(t,e,a){t.exports=a.p+"img/dessert.8b7b7f75.jpg"},eb6c:function(t,e,a){},f17c:function(t,e,a){t.exports=a.p+"img/okroshka.50e95e1d.jpg"},fdab:function(t,e,a){t.exports=a.p+"img/croissant.d78fba82.jpg"}});
//# sourceMappingURL=app.b43e288e.js.map