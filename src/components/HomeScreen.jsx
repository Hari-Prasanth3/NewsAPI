import {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { fetch } from '../slices/newsApiSlice';
import SearchBox from './SearchBox';

const HomeScreen = () => {

  const dispatch = useDispatch();
  const {news, loading, error} = useSelector(state => state.news);

  useEffect(() => {
    dispatch(fetch())
  },[])

const data = news.articles

const [search, setSearch] = useState('')
const searchNews = (query) => {
  setSearch(query)
}

let filteredData = data
if (search) {
  filteredData = data.filter(article => article.title.toLowerCase().includes(search.toLowerCase()))
}
if  (filteredData){
  filteredData = filteredData.slice(0,12)
 
if (loading) 
return <h1>Loading...</h1>

if (error)
return <h1>Error: {error.message}</h1>

if (!data)
return <h1>Data Not Found</h1>

  return (
   <>
    <SearchBox searchNews={searchNews} />
    
   <h2 className='sideHeading'>Top News From India</h2>
   
   <div className='interFace'>
        
       {filteredData.map((data,index) => (
        <div key={index}  className='containers'>
          <img src={data.urlToImage} alt='/' className='image'/>
          <h3>{data.title}</h3>
          <h4>{data.description}</h4>

          <h3>Read full articles <a href={data.url}>➙</a> </h3>
         
        </div>
       ))}
      </div>
   
   </>
  )
}
}

export default HomeScreen;