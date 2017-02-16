import shop from '../../../api/shop'
export default {
	state:{
		all:[]
	},
	mutations:{
		RECIEVE_PRODUCTS(state,{products}){
			state.all=products;
		},
		ADD_CART(state,{id}){
			state.all.find(p=>p.id===id).inventory--
		}
	},
	actions:{
		getAllProducts({commit}){
			shop.getProducts(products =>{
				commit('RECIEVE_PRODUCTS',{products})
			})
		}
	},
	getters:{
		allProducts:state=>state.all
	}
}