import { lazy, useEffect, useState } from 'react';
import imagen1 from '/fox1.jpg'
import imagen2 from '/fox2.jpg'
import imagen3 from '/fox3.jpg'
import imagen4 from '/fox4.jpg'
import imagen5 from '/fox5.jpg'
import placeholder from '/placeholder-1.png';
import useObserver from './functions/useObserver';


const animas = [imagen1, imagen2, imagen3, imagen4, imagen5]

function App() {

  const [observer, setElements, entries] = useObserver({
    threshold: 0.25,
    root: null
  })

  useEffect(() => {
    const images = document.querySelectorAll(".lazy");
    setElements(images);
  }, [setElements]);

  useEffect(() => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        const lazyImage = entry.target;
        lazyImage.src = lazyImage.dataset.src;
        lazyImage.classList.remove("lazy");
        observer.unobserve(lazyImage);
      }
    })
  }, [entries, observer]);

  return (
    <>
      <div className='flex items-center flex-col gap-4 justify-center'>
        <h1 className='text-7xl'>useObserver</h1>
        {
          animas.map(source =>(
            <div key={source} className='w-[500px] shadow-2xl'>
              <img className='lazy' data-src={source} src={placeholder} alt="name" />
            </div>
          ))
        }
      </div>
    </>
  )
}

export default App;
