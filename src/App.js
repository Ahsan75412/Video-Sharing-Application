import { Grid } from '@mui/material';
import './App.css';
import Youtube from './api/Youtube';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <Grid style={{justifyContent: "center"}} container spacing={10}>
      <Grid item xs={11}>
          <Grid container spacing={10}>
            <Grid item xs={12}>
              <SearchBar onSubmit={handleSubmit}/>
            </Grid>
            <Grid item xs={8}>
              {/* {VideoDetail} */}
            </Grid>
            <Grid item xs={4}>
              {/* {VideoList} */}
            </Grid>

          </Grid>
      </Grid>
    </Grid>
  );
  async function handleSubmit(searchItem){
    const response = await Youtube.get("search" , {
      params: {
        part: "snippet",
        maxResults: 5,
        key: "AIzaSyBXPPZ9GZnKKMRbnWyESe8w5I9smRisrkg",
        q: searchItem,
      }
    });
    console.log(response);
  }
}

export default App;
