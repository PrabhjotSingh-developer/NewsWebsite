import React, { useEffect, useState } from 'react'
import NewsItem from '../NewsItem/NewsItem';

const NewsBoard = ({category}) => {
    const [articles,setArticles] = useState([]);
    const [error,setError] = useState(null)
    const [loading,setLoading] = useState(true)

    useEffect(()=>{
      
       setLoading(true)
         const fetchNews = async () =>{
                try {
               
                let url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=f07539b22e844c90a9f1fefd1b1546f4`        
                const response = await fetch(url)
                 if(!response.ok)
                 {
                     throw new Error("Network response was not ok")
                 }
                const data = await response.json()
                setArticles(data.articles)
                    
                } catch (error) {
                   
                     setError(error.message)
                }
                finally{
                     setLoading(false);
                }
         }

         fetchNews()
    
    },[category])
    if(error)
        return <div className='flex items-center justify-center h-[90vh] '>
              <h2 className='text-[1.5rem]'>Cannot load the data</h2>
        </div>
    if(loading)
          return <div className='flex items-center justify-center h-[90vh]'>
                       <h2 className='text-[1.5rem]'>Loading...</h2>
          </div>
  return (
    <div className='flex items-center justify-center mt-4 flex-col z-[-10]'>
        <div className="heading">
              <h2 className='text-[1.4rem] capitalize'>{category=="General"?"Latest":category} <span className='bg-red-950 text-white'>News</span></h2>
        </div>
        <div className='flex  w-[100%] gap-10 justify-center md:justify-between  px-4 md:px-8  flex-wrap' >
                {
                    articles.map((item,index)=>(
                        <NewsItem item= {item} key={item.source.id + index}/>
                    ))
                }
        </div>

    </div>
  )
}

export default NewsBoard
