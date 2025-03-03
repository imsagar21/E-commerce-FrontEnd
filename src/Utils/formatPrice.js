import React from 'react'

const formatPrice = (number) => {
  const indianAmount = new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR" },{ maximumSignificantDigits: 3 }).format
  (number)
  return indianAmount
}

export default formatPrice
