import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_hDoP4plEeg7Vef3dYIxXmVDH00GOULZHd8'

    const onToken = token => {
        alert('Płatność zakończona pozytywnie!');
    }
    return (
        <StripeCheckout
            label='Zapłać Teraz'
            name="BARTŁOMIEJ STAWIARSKI"
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/HoH.svg'
            description={`Do zapłaty: ${price}PLN`}
            amount={priceForStripe}
            panelLabel='Zapłać Teraz!'
            token={onToken}
            stripeKey={publishableKey}

        />
    )
}

export default StripeCheckoutButton;