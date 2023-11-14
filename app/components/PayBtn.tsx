import React, { useState } from 'react'
import { PaystackButton } from 'react-paystack'

function PayBtn() {
    const publicKey = "pk_test_03a7b764afcb17e8aa5804299398ac4a846dfd80"
    const amount = 1000000 
    const [email, setEmail] = useState("tchfrnkln@gmail.com")
    const [name, setName] = useState("Tochukwu")
    const [phone, setPhone] = useState("08153244501")


    interface PaystackMetadata {
        name: string;
        phone: string;
        custom_fields: Array<{ display_name: string; variable_name: string; value: string }>;
      }
      
      interface ComponentProps {
        email: string;
        amount: number;
        metadata: PaystackMetadata; 
        publicKey: string;
        text: string;
        onSuccess: () => void;
        onClose: () => void;
      }
      
      const componentProps: ComponentProps = {
        email,
        amount,
        metadata: {
          name,
          phone,
          custom_fields: [] 
        },
        publicKey,
        text: "Pay Now",
        onSuccess: () =>
          alert("Thanks for doing business with us! Come back soon!!"),
        onClose: () => alert("Wait! You need this oil, don't go!!!!"),
      };

  return (
    <main>
        <PaystackButton className='w-[150px] px-5 p-3 bg-gradient-to-br from-purple-900 to-green-500 text-xs rounded my-6 font-bold transform hover:-translate-y-2 transition-transform duration-300 ease-in-out' {...componentProps} />
    </main>
  )
}

export default PayBtn