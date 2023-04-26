//observer requiere dos opciones la primera es una funcion y la segunda un objeto con opciones
import { useState, useRef, useEffect } from "react";

export default function useObserver(options) {
    const [elements, setElements] = useState([]);
    const [entries, setEntries] = useState([])


    //creamos un intersectionObserver como una referencia
    const observer = useRef(new IntersectionObserver(function(observedEntries){
        console.log(observedEntries)
        setEntries(observedEntries)
    }, options));

    // useEffect que va a cambair siempre que el array de elementos que apsemos cambie
    useEffect(function() {
        // const currentObserver = observer.current;
        const currentObserver = observer.current;
        currentObserver.disconnect();
        if(elements.length > 0){
            elements.forEach(element => currentObserver.observe(element));
        }
      
      // si existe una instancia de observer creada la limpia la desconecta asi la dejamos de vijilar
      return function cleanUp(){
        if(currentObserver){
            currentObserver.disconnect();
        }
      }
    }, [elements])
    
    return [observer.current, setElements, entries]
}