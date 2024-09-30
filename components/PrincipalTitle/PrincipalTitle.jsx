import React from 'react'
import useFormattedTitle from '@/hooks/useFormattedTitle'

const PrincipalTitle = ({title}) => {
    title = useFormattedTitle(title);

  return (
    <h2 className='home_title relative uppercase text-black'>{title}</h2>
  )
}

export default PrincipalTitle