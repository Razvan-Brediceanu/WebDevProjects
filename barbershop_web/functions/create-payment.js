const stripe = require('stripe')(
  'sk_test_51OSbm5AMGDZssiK7U9w7grJ9DyAVKet0Dk4REGBA6fsNbvVp0J2juxxYlKCe3S8CEJcR2ccGN4fTkNi7sXWDzNfy00vh5QcLYA'
)

exports.handler = async function (event, context) {
  try {
    console.log('Received request:', event)

    const requestBody = JSON.parse(event.body) // Parse the JSON string

    const paymentIntent = await stripe.paymentIntents.create({
      amount: requestBody.amount,
      currency: 'usd',
    })

    console.log('Payment intent created:', paymentIntent)

    return {
      statusCode: 200,
      body: JSON.stringify({ clientSecret: paymentIntent.client_secret }),
    }
  } catch (error) {
    console.error('Error creating payment intent:', error)

    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal Server Error' }),
    }
  }
}
