import React from 'react'
import github from "../assets/github.png"
import facebook from "../assets/facebook.png"
import gmail from "../assets/gmail.png"
import twitter from "../assets/twitter.png"

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="my-0 mx-auto text-center">
        <div className='flex text-center items-center justify-center gap-3'>
            <a href='https://github.com/Jack-Dang-collab' target="_blank">
                <img className='w-8 h-8' src={github} alt="github personal page" />
            </a>
            <a href='https://mail.google.com/mail/u/1/?view=cm&fs=1&to=dangthanhtphcm95@gmail.com&tf=1' target="_blank">
                <img className='w-8 h-8' src={gmail} alt="gmail personal page" />
            </a>
            <a href='https://www.facebook.com/profile.php?id=100008805720855' target="_blank">
                <img className='w-8 h-8' src={facebook} alt="facebook personal page" />
            </a>
            <a href='https://twitter.com/JackDang777' target="_blank">
                <img className='w-8 h-8' src={twitter} alt="twitter personal page" />
            </a>
        </div>
        <p><small>Jack Dang &copy; {year}</small></p>
    </footer>
  )
}

export default Footer