import React, { useEffect, useState } from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { Col, Row } from 'react-bootstrap';
import './Pymentpage.css';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal);
const Checkoutform = ({paymentdata}) => {
    const {price,username,_id,email} = paymentdata
 
    const stripe = useStripe();
    const elements = useElements();
    const[clientSecret , setClientSecret] = useState('')
    const [porcessing, setProcessing] = useState(false)
    const [success, setSuccess] = useState('')
    useEffect(() => {
        fetch('http://localhost:5000/create-payment-intent',{
            method: 'POST',
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify({price})
        })
        .then(res => res.json())
        .then(data => setClientSecret(data.clientSecret))
    },[price])
    const handleSubmit = async (e) => {
        e.preventDefault();
        if(!stripe || !elements)
        {
            return;
        }
        const card = elements.getElement(CardElement);
        if (card === null)
        {
            return ;
        }
        setProcessing(true)
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card
        });
        if(error)
        {
            setProcessing(false)
            setSuccess('')
            Swal.fire(
              `${error.message}`,
              '',
              'error'
            )
        }
        else{
            setProcessing(false)
            console.log(paymentMethod)
        }

        
         //payment intent
         const {paymentIntent, error: intentError} = await stripe.confirmCardPayment(
            clientSecret,
            { 
              payment_method: {
                card: card,
                billing_details: {
                  name: username,
                  email: email
                },
              },
            },
          );
          if(intentError)
          {
            setProcessing(false)
            setSuccess('')
            Swal.fire(
                `${intentError.message}`,
                '',
                'error'
              )
          }
          else{
            setSuccess('success')
            Swal.fire(
                'Payment Succesfull',
                '',
                'success'
              )
            setProcessing(false)
            const payment = {
                username: paymentIntent.name,
                paymentdate: new Date().toLocaleDateString(),
                amount: price,
                transaction: paymentIntent.client_secret.slice('_secret')[0]
             }

             //saving payment history database
             fetch(`http://localhost:5000/paymentdataupdating/${_id}`,{
                method: 'PUT',
                headers: {
                    'content-type':'application/json'
                },
                body: JSON.stringify(payment)
             })
             .then(res => res.json())
             .then(data => console.log(data))
          }

    }
    return (
        <div className="justify-content-center my-4 ">
            <Row className="d-flex justify-content-center align-items-center p-4"> 
                <Col lg={8} md={10} sm={12} className=" checkoutforms p-4 rounded">
                <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                    style: {
                        base: {
                        fontSize: '20px',
                        color: 'black',
                        '::placeholder': {
                            color: 'black',
                        },
                        },
                        invalid: {
                        color: '#9e2146',
                        },
                    },
                    }}
                />
                {
                    porcessing ? <p className="fw-bold text-primary">Processing...</p> :       <button className="btn btn-primary my-4" type="submit" disabled={!stripe || success}>
                    Pay $ {price}
                  </button>
                }

    </form>
                </Col>
            </Row>
        </div>
    );
};

export default Checkoutform;