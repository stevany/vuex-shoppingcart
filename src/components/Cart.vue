<template>
	<div class="cart">
		<h2>Your cart</h2>
		<p v-show="!products.length"><i>Please add some products to cart.</i></p>
		<ul class="list-group">
			<li class="list-group-item" v-for="p in products">
				{{p.title}} - {{p.price | currency}} x {{p.quantity}}
			</li>
		</ul>
		<p>Total:{{total |currency}}</p>
		<div class="btn-group">
		<button :disabled=!products.length  @click="checkout(products)" class="btn-btn-default btn-sm">Checkout</button></p>
		<p v-show="checkoutStatus">Checkout{{checkoutStatus}}.</p>
	</div>
</template>
<script>
import {mapGetters} from 'vuex'

export default{
	computed:{
		...mapGetters({
			products:'cartProducts',
			checkoutStatus: 'checkoutStatus'
		}),
		total(){
			return this.products.reduce((total,p)=>{
				return total+p.price*p.quantity
			},0)
		}
	},
	methods:{
		checkout(products){
			this.$store.dispatch('checkout',products)
		}
	}
}
</script>