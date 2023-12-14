"use client";


import { ReactNode } from "react";
import { CartProvider as USCProvider } from "use-shopping-cart";


export default function CartProvider({ children }: { children: ReactNode }) {
   return (
     <USCProvider
       mode="payment"
       cartMode="client-only"
       stripe={process.env.Next_PUBLIC_STRIPE_KEY as string}
       successUrl="https://clothe-den.vercel.app/stripe/success"
       cancelUrl="https://clothe-den.vercel.app/stripe/error"
       currency="NGN"
       billingAddressCollection={false}
       shouldPersist={true}
       language="en-US"
       >
       {children}
     </USCProvider>
   );
}