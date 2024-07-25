'use client'
import { usePathname, useSearchParams } from 'next/navigation'
import React from 'react'

const products = () => {

  const usePath = usePathname()
  console.log(usePath)

  // product?serach=vip&rondomvalue=1
  const useSearch = useSearchParams()
  console.log(useSearch.get('serach') , useSearch.get('rondomvalue'));


  return (
    <div>
        product page
      
    </div>
  )
}

export default products
