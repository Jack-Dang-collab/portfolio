import React from 'react'
import github from "../assets/github.png"
import facebook from "../assets/facebook.png"
import gmail from "../assets/gmail.png"
import twitter from "../assets/twitter.png"
import linkedin from "../assets/linkedin.png"
import LinkIcon from './LinkIcon'

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="my-0 mx-auto text-center">
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
        <p><small>Jack Dang &copy; {year}</small></p>
    </footer>
  )
}

export default Footer