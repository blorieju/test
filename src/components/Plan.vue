<template>
  <br />
  <hr />
      <form action="/charges" method="post" v-on:submit="stripe">
      <article v-for="plan in plans">
        <label class="amount">
          <span>Amount: $5.00</span>
        </label>
      </article>
    <button type="submit">Purchase</button>
    </form>
  <hr />
  <br />
</template>
<script>
import stripecontroller from '../stripe/'
import auth from '../auth'
import plan from '../plan'

  export default {
    data(){
      return {
        auth: auth,
        plans: null
      }
    },
    methods: {
      stripe(e){
          e.preventDefault()
            var handler = StripeCheckout.configure({
                key: 'pk_test_6pRNASCoBOKtIshFeQd4XMUh',
                image: 'https://stripe.com/img/documentation/checkout/marketplace.png',
                locale: 'auto',
                token: function(token) {
                  console.log(token)
                  // stripecontroller.stripe(this, token)
                }
            })
            handler.open({
              name: 'Stripe.com',
              description: '2 widgets',
              amount: 2000
            })
      }
    },
    ready (){
      plan.getServices.then(plans => {
        this.plans = plans
        console.log(plans)
      })
    }
  }
</script>
