import express from 'express'
import cors from 'cors'
import Stripe from 'stripe'

 const stripe =Stripe('sk_test_51PajTf2MNT6jkFgY3TyW3BAAC7kGVV0N0hnpLfDt70zJ3KvY278PupdS2PW5tMgZAhaGtexLFVYG81BtVYJcQBU600mLPIGQeQ')
const app = express()

app.use(express.json())
app.use(cors())


// check out 

app.post('/api/create-checkout-session',async(req,res)=>{
    const {products} = req.body;
    const lineitems = products.map((product)=>({
        price_data:{
            currency:'inr',
            product_data:{
                name:product.dish,

            },
            unit_amount:product.price * 100 
        },
        quantity:product.qnty
    }))
    const session = await stripe.checkout.sessions.create({
        payment_method_types:['card'],
        line_items:lineitems,
        mode:'payment',
        success_url:'http://localhost:3000/success',
        cancel_url:'http://localhost:3000/cancel'
    })
    res.status(200).json({id:session.id})

})

app.listen(7000,()=>{
    console.log('Server started')
})