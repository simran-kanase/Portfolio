// import Home from './components/Home';
// import Navbar from './components/Navbar';
// import About from './components/About';
// import Skills from './components/Skills';
// import Contact from './components/Contact';
// import Project from './components/Project';
// import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';

// const App = () => {
//   // Define your project data here
//   const projects = [
//     { title: 'Project 1', description: 'Description of the first project.' },
//     { title: 'Project 2', description: 'Description of the second project.' },
//     { title: 'Project 3', description: 'Description of the third project.' },
//     { title: 'Project 4', description: 'Description of the fourth project.' },
//   ];

//   return (
    
      

//       <Router>
//         <div>

//           <Navbar/>
//           <Routes>
//             <Route path='/' element ={<Home/>}  />
//             <Route path='/about' element ={<About/>}  />
//             <Route path='/skills' element ={<Skills/>}  />
//             <Route path='/contact' element ={<Contact/>}  />

//             <Route path='/project' element ={<Project projects={projects} /> }  />
            
//           </Routes>

//         </div>
//       </Router>
        

    


    

//   );
// };

// export default App;

import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Project from './components/Project';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/project' element={<Project />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

