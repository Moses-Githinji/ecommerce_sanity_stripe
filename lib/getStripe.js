import { loadStripe } from '@stripe/stripe-js';

// declare an empty stripe promise which is initially undefined
let stripePromise; 

const getStripe = () => {
    if(!stripePromise) {
        stripePromise = loadStripe(process.env.NEXT_STRIPE_PUBLISHABLE_KEY);
    }

    return stripePromise;
}

export default getStripe;