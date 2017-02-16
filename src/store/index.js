import Vue from 'vue'
import Vuex from 'vuex'
import cart from './modules/cart'
import products from './modules/products'


Vue.use(Vuex)

export default new Vuex.Store({
	getters:{
		cartProducts:state =>state.cart.added.map(({id,quantity})=>{
				const product=state.products.all.find(p=>p.id===id)
				return{
					title:product.title,
					price:product.price,
					quantity
				}
			})
	},
	actions:{
		addToCart({commit}, product){
			if(product.inventory>0){
				commit('ADD_CART',{
					id:product.id
				})
			}
		}
	},

	modules:{
		cart,
		products

	}
})