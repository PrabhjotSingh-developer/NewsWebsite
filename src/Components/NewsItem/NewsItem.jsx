import React from 'react'

const NewsItem = ({item}) => {
     const {title,description, urlToImage,url} = item
  return (
   <div className='md:W-[45%] lg:w-[30%] mt-10 w-[100%] p-4 border-[ bg-slate-900] border-2 border-solid gap-4 flex flex-col items-start' >
        
           <div className='w-[100%] h-[200px]  bg-slate-900 mx-auto flex items-center justify-center' >
               {urlToImage ?
                   <img src={urlToImage} alt="" /> :
                 <h2 className='text-white text-[40px]'>News</h2>
               }
           </div>
        
         
          <h6 className='text-[1.3rem] font-semibold'>{title}</h6>
          <p>{description?.slice(0,100)}</p>
           <a href={url} target='_blank' className='bg-slate-700 py-2 px-4 text-white rounded-[10px]'>Read More</a>
   </div>
  )
}

export default NewsItem
