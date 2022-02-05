import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import DangerButton from "../../components/DangerButton";
import { logoutUser } from "../../redux/auth/actions";
import { fetchMovies } from "../../redux/imdb/actions";
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from "@mui/material/ListItemText";
import { Avatar, ListItemIcon } from "@mui/material";

function Home() {
  const token = useSelector(({ authUser }) => authUser.token)
  const movies = useSelector(({ imdb }) => imdb.movies)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMovies())
  }, [dispatch])

  return <div>
    <h1>Welcome home, your token is {token}</h1>
    <List>
      {
        movies.map(movie => (
          <ListItem key={movie.id}>
            <ListItemIcon>
              <img style={{ height: 220, width: '100%' }} src={movie.image} />
            </ListItemIcon>
            <ListItemText sx={{ 'span': { fontWeight: 700 } }} className="ml-5" primary={movie.title} />
          </ListItem>
        ))
      }
    </List>
    <DangerButton
      name="Logout"
      onClick={() => dispatch(logoutUser())}
    />
  </div>;
}

export default Home;
