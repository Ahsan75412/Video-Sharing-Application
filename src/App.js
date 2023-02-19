import { Grid } from '@mui/material';
import './App.css';
import Youtube from './api/Youtube';
import SearchBar from './components/SearchBar';
import { useState } from 'react';
import VideoDetail from './components/VideoDetail';

function App() {
  const [videos , setVideos] = useState([]);
  const [selectedVideo, setSelectedVideos] = useState({id: {} ,snippet: {} });


  return (
    <Grid style={{justifyContent: "center"}} container spacing={10}>
      <Grid item xs={11}>
          <Grid container spacing={10}>
            <Grid item xs={12}>
              <SearchBar onSubmit={handleSubmit}/>
            </Grid>
            <Grid item xs={8}>
              <VideoDetail video={selectedVideo}/>
            </Grid>
            <Grid item xs={4}>
              {/* {VideoList} */}
            </Grid>

          </Grid>
      </Grid>
    </Grid>
  );

  async function handleSubmit(searchItem){
    const {data: {items: videos}} = await Youtube.get("search" , {
      params: {
        part: "snippet",
        maxResults: 5,
        key: "AIzaSyBXPPZ9GZnKKMRbnWyESe8w5I9smRisrkg",
        q: searchItem,
      }
    });

    setVideos(videos);
    setSelectedVideos(videos[0]);
    // console.log(response);

  }
}

export default App;
