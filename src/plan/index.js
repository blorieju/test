import Vue from '../main'
import {router} from '../main'

const plans = {}

export default plans


plans.getServices = () => {
    return new Promise((resolve, reject) => {
        Vue.http({ url: 'plans', 'method' : 'GET'}).then(response => {
    		resolve(response.data.data)
        })
    })
}
