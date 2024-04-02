
import './App.css';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import {Box} from '@mui/material'
import {Loading,Navbar,Feed,VideoDetails,ChannelDetails,SearchFeed} from './Components'
import {useState,useEffect} from 'react'

function App() {
  const [loading, setLoading] = useState(false);
 
  useEffect(() => {
      setLoading(true);
      setTimeout(() => { 
          setLoading(false);
      }, 3000);
  }, []);
  if (loading) return <Loading />;

  return (
    <div className="App">
      <BrowserRouter >
        <Box sx={{backgroundColor:"#000000"}}>
          <Navbar/>
        <Routes>
          <Route path="/" exact element={<Feed/>} />
          <Route path="/video/:id" element={<VideoDetails/>} />
          <Route path="/channel/:id" element={<ChannelDetails/>} />
          <Route path="/search/:searchItem" element={<SearchFeed/>} />
        
        </Routes>
        </Box>
      </BrowserRouter>

    </div>
  );
}

export default App;
