import useIntersection from "../functions/useIntersection"

const Contenido = ({write}) => {
    const [elementoRef3, llegada3] = useIntersection({
        threshold: 0.5,
    });

    console.log(llegada3)

  return (
    <div ref={elementoRef3}  className="w-full h-full relative">
        <p className={`text-white text-7xl top-[50%] absolute ${ llegada3 ? " left-20 opacity-100 " : " -left-96 opacity-0 "} transition-all duration-1000`}>{write}</p>
    </div>
  )
}

export default Contenido;