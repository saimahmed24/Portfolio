
import './App.css';
import React, { useState } from 'react';
import Navbar from './Components/Navbar';
import TextArea from './Components/TextForm';
import About from './Components/About';
import Alert from './Components/Alert';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


function App() {

  const [theme, setTheme] = useState('light');
  const [themeLabel, setThemeLabel] = useState('Enable Dark Mode');
  const [alert, setAlert] = useState();

  const invert = () => {
    const icons = document.getElementsByClassName('accordion-button');


    // Loop through the collection and add the class to each element
    for (let i = 0; i < icons.length; i++) {
      icons[i].classList.add('custom-class');
    }
  };
  const invertInvert = () => {
    const icons = document.getElementsByClassName('accordion-button');

    for (let i = 0; i < icons.length; i++) {
      icons[i].classList.remove('custom-class');
    }
  };

  const toggleTheme = () => {
    let button = document.getElementById("flexSwitchCheckDefault");
    button.disabled = true;
    setTimeout(() => {
      button.disabled = false;
    }, 1000);
    let documentT = document.querySelector('title').textContent;


    if (theme === 'light') {


      setTheme('dark');
      setThemeLabel('Disable Dark Mode');
      document.body.style.backgroundColor = "#3a4348";
      document.title = `${documentT} - Dark Mode`;

      setTimeout(() => {
        document.title = documentT;
      }, 1000);
      invert();


    }
    else {
      setTheme('light');
      setThemeLabel('Enable Dark Mode');
      document.body.style.backgroundColor = "white";
      document.title = `${documentT} - Light Mode`;
      invertInvert();

      setTimeout(() => {
        document.title = documentT;
      }, 1000);

    }

  }
  const router = createBrowserRouter([
    {
      path: '/',
      element: <><Navbar title="Text Utils" theme={theme} toggleTheme={toggleTheme} themeLabel={themeLabel} />
        <Alert alert={alert} /><div className='container my-3'>
          <TextArea heading="Enter text below to analyze" theme={theme} setAlert={setAlert} />
        </div></>
    },
    {
      path: '/About',
      element: <> <Navbar title="Text Utils" theme={theme} toggleTheme={toggleTheme} themeLabel={themeLabel} />
        <Alert alert={alert} /><div className='container my-3'></div> <About theme={theme} invert={invert} /></>
    }

  ])
  return (
    <>
      <RouterProvider router={router} />
    </>

  );
}

export default App;
