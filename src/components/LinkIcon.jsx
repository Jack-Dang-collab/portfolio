import React from 'react'

const LinkIcon = ({ link, image }) => {
  return (
    <a href={link} target="_blank">
      <img className='w-8 h-8 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300' src={image} alt={`${image} personal page`} />
    </a>
  )
}

export default LinkIcon