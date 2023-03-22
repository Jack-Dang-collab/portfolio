import React from 'react'
import github from "../assets/github.png"
import facebook from "../assets/facebook.png"
import gmail from "../assets/gmail.png"
import twitter from "../assets/twitter.png"

const Header = () => {
  return (
    <section className='flex items-center flex-wrap text-center pt-[50px] px-[25px] pb-[25px]'>
        <img className="max-w-[300px] h-auto my-[20px] mx-auto rounded-full" src="/profileimg.jpg" alt="Jack Dang" />

        <div className='w-[400px] my-0 mx-auto'>
            <h1 className='font-bold text-[48px]'>Hi, I'm Jack Dang</h1>
            <p className='font-bold text-[32px]'>Blockchain Developer</p>
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
        </div>
    </section>
  )
}

export default Header