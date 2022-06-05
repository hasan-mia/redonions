import React, { useEffect, useState } from 'react'
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import { toast } from 'react-toastify'

const CheckoutForm = ({ order }) => {
  const stripe = useStripe()
  const elements = useElements()
  const [cardError, setCardError] = useState('')
  const [success, setSuccess] = useState('')
  const [processing, setProcessing] = useState(false)
  const [transactionId, setTransactionId] = useState('')
  const [clientSecret, setClientSecret] = useState('')

  const { _id, name, title, ordernumber, price, total, email } = order

  useEffect(() => {
    fetch('http://localhost:5000/payment-intent', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        authorization: `token ${localStorage.getItem('accessToken')}`
      },
      body: JSON.stringify({ total })
    })
      .then(res => res.json())
      .then(data => {
        if (data?.clientSecret) {
          setClientSecret(data.clientSecret)
        }
      })
  }, [total])

  const handleSubmit = async event => {
    event.preventDefault()

    if (!stripe || !elements) {
      return
    }

    const card = elements.getElement(CardElement)

    if (card === null) {
      return
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card
    })

    setCardError(error?.message || '')
    setSuccess('')
    setProcessing(true)
    // Confirm card payment
    const {
      paymentIntent,
      error: intentError
    } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: card,
        billing_details: {
          name: name,
          email: email
        }
      }
    })

    if (intentError) {
      setCardError(intentError?.message)
      setProcessing(false)
      toast.success(intentError?.message)
    } else {
      setCardError('')
      setTransactionId(paymentIntent.id)
      setSuccess('Success! Your payment is completed.')
      toast.success('Congrats! Your order is placed')

      //====Store Payment on Database=======
      const payment = {
        order: _id,
        transactionId: paymentIntent.id
      }
      fetch(`http://localhost:5000/order/${_id}`, {
        method: 'PATCH',
        headers: {
          'content-type': 'application/json',
          authorization: `token ${localStorage.getItem('accessToken')}`
        },
        body: JSON.stringify(payment)
      })
        .then(res => res.json())
        .then(data => {
          setProcessing(false)
          console.log(data)
        })
    }
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '20px',
                padding: '20px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4'
                }
              },
              invalid: {
                color: '#9e2146'
              }
            }
          }}
        />
        <button
          className='block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-2 mt-8 font-semibold'
          type='submit'
          disabled={!stripe || !clientSecret || success}
        >
          <i className='fab fa-stripe-s text-lg'></i>{' '}
          <span className='text-xl font-bold'>Pay Now</span>
        </button>
      </form>
      {cardError && <p className='text-red-500'>{cardError}</p>}
      {success && (
        <div className='text-green-500'>
          <p>{success} </p>
          <p>
            Your transaction Id:{' '}
            <span className='text-orange-500 font-bold'>{transactionId}</span>{' '}
          </p>
        </div>
      )}
    </>
  )
}

export default CheckoutForm
