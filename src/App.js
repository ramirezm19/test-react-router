import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useRouteMatch,
  Routes
} from 'react-router-dom';

export default function App() {
  const posts = [
    {
      id: 1,
      title: 'My first Post',
      date: '4-7-2020',
      content: 'This is my first post!'
    },
    {
      id: 2,
      title: 'Checking in',
      date: '4-8-2020',
      content: 'Yesterday was a good day, looking forward to another!'
    },
    {
      id: 3,
      title: 'Vacation time!',
      date: '4-9-2020',
      content: 'Finally time to head to Cancun for our trip!'
    }
  ];

  return(
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/friends">Friends</Link>
          </li>
          <li>
            <Link to="/posts">Posts</Link>
          </li>
        </ul>
        <Routes>
          <Route path='/posts'>
            <Posts posts={posts} />
          </Route>
          <Route path='/friends'>
            <Friends names={['Tom', 'Sally', 'Samantha']} />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Routes>
      </div>
    </Router>
  )
}

function Home() {
  return <h2>Home</h2>
}

function Friends() {
  return <h2>Friends</h2>
}

function Posts() {
  return <h2>Posts</h2>
}