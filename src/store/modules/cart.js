import shop from '../../../api/shop'
export default {
	state:{
		added:[],
		checkoutStatus:null
	},
	mutations:{
		ADD_CART(state,{id}){
			state.lastCheckout=null
			const record=state.added.find(p=>p.id===id)
			if(!record){
				state.added.push({
					id,
					quantity:1
				})
			}else{
				record.quantity++
			}
		},
		CHECKOUT_REQUEST(state){
			//clear cart
			state.added=[]
			state.checkoutStatus=null
		},
		CHECKOUT_SUCESS(status){
			state.checkoutStatus='successfull'
		},
		CHECKOUT_FAILURE(state,{savedCartItems}){
			//rollback to the cart saved before sending the request 
			state.added=savedCartItems
			state.checkoutStatus='failed'
		}
	},
	actions:{
		checkout({commit,state},products){
			const savedCartItems=[...state.added]
			commit('CHECKOUT_REQUEST')
			shop.buyProducts(products,
				()=>commit('CHECKOUT_SUCESS'),
				()=>commit('CHECKOUT_FAILURE',{savedCartItems}))
		}
	},
	getters:{
		checkoutStatus:state=>state.checkoutStatus
	}
}