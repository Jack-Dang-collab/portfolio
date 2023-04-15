import React from 'react'
import crowdfunding from '../assets/crowdfunding.png'
import horoscope from '../assets/horoscope.png'
import market from '../assets/market.png'

const Projects = () => {
  return (
    <section className='pt-[50px] px-[25px] pb-[25px]'>
        <h2 className='text-[42px] my-[25px] mx-auto text-center items-center justify-center font-bold'>My Projects</h2>

        <div className="flex flex-start flex-wrap gap-5 text-center items-center justify-center">

            <div className="max-w-[350px] p-5 border border-solid border-[#0088BB] rounded-lg bg-gray-900 bg-opacity-50">
                <h3 className='text-[32px] font-semibold mb-[10px]'>Crowdfunding</h3>
                <img src={crowdfunding} alt="Crowdfunding Landing Page" />

                <a href="https://storied-squirrel-56d6c6.netlify.app/" target="_blank" className="my-[10px] mx-[5px] mb-0 border bg-cyan-800 hover:bg-cyan-500 text-white p-2 rounded-md inline-block font-semibold">Site</a>
                <a href="https://github.com/Jack-Dang-collab/crowdfunding" target="_blank" className="my-[10px] mx-[5px] mb-0 border bg-cyan-800 hover:bg-cyan-500 text-white p-2 rounded-md inline-block font-semibold">Code</a>
            </div>

            <div className="max-w-[350px] p-5 border border-solid border-[#0088BB] rounded-lg bg-gray-900 bg-opacity-50">
                <h3 className='text-[32px] font-semibold mb-[10px]'>Horoscope</h3>
                <img src={horoscope} alt="Horoscope Landing Page" />

                <a href="https://radiant-caramel-065e0d.netlify.app/" target="_blank" className="my-[10px] mx-[5px] mb-0 border bg-cyan-800 hover:bg-cyan-500 text-white p-2 rounded-md inline-block font-semibold">Site</a>
                <a href="https://github.com/Jack-Dang-collab/horoscope" target="_blank" className="my-[10px] mx-[5px] mb-0 border bg-cyan-800 hover:bg-cyan-500 text-white p-2 rounded-md inline-block font-semibold">Code</a>
            </div>

            <div className="max-w-[350px] p-5 border border-solid border-[#0088BB] rounded-lg bg-gray-900 bg-opacity-50">
                <h3 className='text-[32px] font-semibold mb-[10px]'>Web3Market</h3>
                <img src={market} alt="Web3Market Landing Page" />

                <a href="https://lighthearted-boba-4175c7.netlify.app/" target="_blank" className="my-[10px] mx-[5px] mb-0 border bg-cyan-800 hover:bg-cyan-500 text-white p-2 rounded-md inline-block font-semibold">Site</a>
                <a href="https://github.com/Jack-Dang-collab/web3market" target="_blank" className="my-[10px] mx-[5px] mb-0 border bg-cyan-800 hover:bg-cyan-500 text-white p-2 rounded-md inline-block font-semibold">Code</a>
            </div>
        </div>
    </section>
  )
}

export default Projects