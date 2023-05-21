import React from 'react'
import github from "../assets/github.png"
import facebook from "../assets/facebook.png"
import gmail from "../assets/gmail.png"
import twitter from "../assets/twitter.png"
import linkedin from "../assets/linkedin.png"
import LinkIcon from './LinkIcon'

const Header = () => {
  return (
    <section className='flex items-center flex-wrap text-center pt-[50px] px-[25px] pb-[25px]'>
        <img data-aos="slide-right" className="max-w-[300px] h-auto my-[20px] mx-auto rounded-full" src="/profileimg.jpg" alt="Jack Dang" />

        <div data-aos="slide-left" className='w-[400px] my-0 mx-auto'>
            <h1 className='font-bold text-[48px]'>Hi, I'm Thanh Dang</h1>
            <p className='font-bold text-[32px]'>Self-taught Developer</p>
            <div className='flex text-center items-center justify-center gap-3'>
                <LinkIcon 
                    link="https://github.com/Jack-Dang-collab"
                    image={github}
                />
                <LinkIcon 
                    link="https://mail.google.com/mail/u/1/?view=cm&fs=1&to=dangthanhtphcm95@gmail.com&tf=1"
                    image={gmail}
                />
                <LinkIcon 
                    link="https://www.facebook.com/profile.php?id=100008805720855"
                    image={facebook}
                />
                <LinkIcon 
                    link="https://www.linkedin.com/in/thanh-dang-1aa713262?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BDWFAFAr%2FQg2CZSBvGWzWwA%3D%3D"
                    image={linkedin}
                />
                <LinkIcon 
                    link="https://twitter.com/JackDang777"
                    image={twitter}
                />
            </div>
        </div>
    </section>
  )
}

export default Header