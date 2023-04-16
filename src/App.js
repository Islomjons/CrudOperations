import { Route } from 'react-router-dom';
import './App.css';
import CreatePost from './components/CreatePost/CreatePost';
import ReadPost from './components/ReadPost/ReadPost';
import UpdatePost from './components/updatePost/UpdatePost';

function App() {
  return (
    <div className='container'>
        <Route exact path="/">
            <CreatePost />
        </Route>
        <Route exact path="/readpost">
            <ReadPost />
        </Route>
        <Route exact path="/updatepost">
            <UpdatePost />
        </Route>
    </div>
  );
}

export default App;
