import React from 'react'
import crowdfunding from '../assets/crowdfunding.png'
import horoscope from '../assets/horoscope.png'
import market from '../assets/market.png'
import ai from '../assets/ai.png'
import airbnb from '../assets/airbnb.png'
import Project from './Project'

const Projects = () => {
  return (
    <section className='pt-[50px] px-[25px] pb-[25px]'>
        <h2 className='text-[42px] my-[25px] mx-auto text-center items-center justify-center font-bold'>My Projects</h2>

        <div className="flex flex-start flex-wrap gap-5 text-center items-center justify-center">
            <Project 
                name="Crowdfunding"
                image={crowdfunding}
                website="https://dapp-crowdfunding.netlify.app/"
                githubSite="https://github.com/Jack-Dang-collab/crowdfunding"
            />

            <Project 
                name="Horoscope"
                image={horoscope}
                website="https://horoscope999.netlify.app/"
                githubSite="https://github.com/Jack-Dang-collab/horoscope"
            />

            <Project 
                name="Web3Market"
                image={market}
                website="https://web3market.netlify.app/"
                githubSite="https://github.com/Jack-Dang-collab/web3market"
            />

            <Project 
                name="AI Summarizer"
                image={ai}
                website="https://ai-summarizer9999.netlify.app"
                githubSite="https://github.com/Jack-Dang-collab/ai_summarizer"
            />
            <Project 
                name="Airbnb Clone"
                image={airbnb}
                website="https://renting-clone.vercel.app/"
                githubSite="https://github.com/Jack-Dang-collab/airbnb-clone"
            />
        </div>
    </section>
  )
}

export default Projects