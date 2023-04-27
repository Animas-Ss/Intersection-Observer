import {useEffect, useState, useRef} from 'react'

function useIntersection (opciones = {}) {
    const [llegada, setLlegada] = useState(false);
    const elementoRef = useRef();

    useEffect(() => {
        const elemento = elementoRef.current;
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
               setLlegada(entry.isIntersecting)
            });
        }, opciones);

        if(elemento) {
            observer.observe(elemento);
        }


        return () => {
            if(elemento){
                observer.unobserve(elemento)
            }
        }
    }, []);

    return [ elementoRef, llegada] 
}

export default useIntersection;