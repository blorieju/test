<template>
  <br />
  <hr />
      <form action="/charges" method="post" v-on:submit="stripe" v-for="plan in plans">
        <article>
          <label class="amount">
            <h4 >{{ plan.name | capitalize  }}</h4>
            <p>Description: <span>{{ plan.description | capitalize }}</span></p>
            <input type="hidden" v-model="name" value="{{ plan.plan }}">
            <input type="hidden" v-model="description" value="{{ plan.description }}">
            <input type="hidden" v-model="cost" value="{{ plan.cost }}">
            <span>Amount: ${{ plan.cost.toFixed(2) }}</span>
          </label>
        </article>
      <button type="submit">Purchase</button>
      <br />
      </form>
  <hr />
  <br />
</template>
<script>
import stripecontroller from '../stripe/'
import auth from '../auth/'
import plan from '../plan/'

  export default {
    data(){
      return {
        auth: auth,
        name: null,
        description: null,
        cost: null,
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
                  stripecontroller.stripe(this, this, token)
                }
            })
            handler.open({
              name: this.name,
              description: this.description,
              amount: this.cost
            })
      }
    },
    ready (){
      auth.check()
       plan.getServices().then(plans => {
            this.plans = plans
        })
    }
  }
</script>