import { createContext,useState,useEffect } from "react"
import useAxiosFetch from '../hooks/useAxiosFetch.js';
const DataContext=createContext({});

export const DataProvider=({children})=>{
    const [posts,setPost]=useState([])
    const [search, setsearch] = useState("");
    const [searchResults,setsearchResults]=useState([])
  const {data,fetchError,isLOading}=useAxiosFetch('http://localhost:3500/posts')
  
  useEffect(()=>{
  setPost(data);
  },[data])
  
    useEffect(() => {
      const FilteredResults=posts.filter(post=>
  ((post.body).toLowerCase()).includes(search.toLowerCase())
  ||
  ((post.title).toLowerCase()).includes(search.toLowerCase()));
      setsearchResults(FilteredResults.reverse());
    }, [posts,search])
    
      

    return (
        <DataContext.Provider value={{
 search,setsearch,searchResults,fetchError,isLOading,setPost,posts
        }}>{children}</DataContext.Provider>
    )
}
export default DataContext
