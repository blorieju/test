import Vue from '../main'
import {router} from '../main'

export default {
    credentials(){
        return 'pk_test_6pRNASCoBOKtIshFeQd4XMUh'
    },
    stripe(context, object, stripeObject){
        Vue.http({
            url: 'subscription',
            method: 'POST',
            data: {
                plan: 'small',
                tokenId: stripeObject.id,
                cardId: stripeObject.card.id
            }
        }).then(response => {
            console.log(response);
        })
    }

}
