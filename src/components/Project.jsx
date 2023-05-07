import React from 'react'

const Project = ({ name, image, website, githubSite }) => {
  return (
    <div className="hover:-translate-y-1 duration-300 max-w-[350px] p-5 border border-solid border-[#0088BB] rounded-lg bg-gray-900 bg-opacity-50">
      <h3 className='text-[32px] font-semibold mb-[10px]'>{name}</h3>
      <img src={image} alt="Crowdfunding Landing Page" />

      <a href={website} target="_blank" className="my-[10px] mx-[5px] mb-0 border bg-cyan-800 hover:bg-cyan-500 text-white p-2 rounded-md inline-block font-semibold">Site</a>
      <a href={githubSite} target="_blank" className="my-[10px] mx-[5px] mb-0 border bg-cyan-800 hover:bg-cyan-500 text-white p-2 rounded-md inline-block font-semibold">Code</a>
    </div>
  )
}

export default Project