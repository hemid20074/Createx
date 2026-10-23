import { Route, Routes } from 'react-router-dom';
import { AuthModalProvider } from './context/AuthModalContext';
import Layout from './components/layout/Layout';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Courses from './pages/Courses/Courses';
import Course from './pages/Course/Course';
import Events from './pages/Events/Events';
import Event from './pages/Event/Event';
import Blog from './pages/Blog/Blog';
import Post from './pages/Post/Post';
import Contacts from './pages/Contacts/Contacts';
import NotFound from './pages/NotFound/NotFound';

export default function App() {
  return (
    <AuthModalProvider>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="courses" element={<Courses />} />
          <Route path="courses/:slug" element={<Course />} />
          <Route path="events" element={<Events />} />
          <Route path="events/:slug" element={<Event />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog/:slug" element={<Post />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </AuthModalProvider>
  );
}
