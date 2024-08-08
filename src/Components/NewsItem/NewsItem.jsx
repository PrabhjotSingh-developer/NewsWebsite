import React from 'react'

const NewsItem = ({item}) => {
     const {title,description, urlToImage,url} = item
  return (
   <div className='md:W-[45%] lg:w-[30%] mt-7 p-4 border-[ bg-slate-900] border-2 border-solid gap-4 flex flex-col items-start' >
          <div className="img">
               <img src={urlToImage||""} alt="" />
          </div>
          <h6 className='text-[1.3rem] font-semibold'>{title}</h6>
          <p>{description?.slice(0,100)}</p>
           <a href={url}>Read More</a>
   </div>
  )
}

export default NewsItem
