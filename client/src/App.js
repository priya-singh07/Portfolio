import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/homepages/header';
import Navbar from './components/homepages/navbar';
import About from './components/homepages/about';
import Education from './components/homepages/education';
// import Experience from './components/homepages/experience';
import Projects from './components/homepages/project';
import Contact from './components/homepages/contact';
import Footer from './components/homepages/footer';
import Login from './components/homepages/login';

//admin components
import Admin from './components/adminComponent/admin';

//edit components
import EditAbout from './components/editComponent/editAbout';
import EditEducation from './components/editComponent/editEducation';
import EditProjects from './components/editComponent/editProject';
// import EditExperience from './components/editComponent/editExperience';

import './App.css';



function App() {
  return (
   
     <div className="App" >
       <Router>

<Navbar />

  <Routes>
    <Route exact path="/" element = {[<Header/>,<About/>,<Education/>,<Projects/>,<Contact/>]} /> 

    {/* <Route exact path="/login" element = {<Login />} > </Route>

    <Route exact path="/admin" element = {<Admin />} /> */}

    <Route exact path="/editAbout/:id" element = {<EditAbout />} />

    <Route exact path="/editEducation/:id" element = {<EditEducation />} />

    <Route exact path="/editProject/:id" element = {<EditProjects />} />

    {/* <Route exact path="/editExperience/:id" element = {<EditExperience />} /> */}

    </Routes>

    <Footer />

    </Router>
</div>

    
  );
}

export default App;
