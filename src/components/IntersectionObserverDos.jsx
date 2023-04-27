
import useIntersection from '../functions/useIntersection';

const IntersectionObserverDos = () => {

    const [elementoRef, llegada] = useIntersection({
        threshold: 0.75,
    })
    const [elementoRef2, llegada2] = useIntersection({
        threshold: 0.75,
    })

  return (
    <div>
        <div className='w-screen h-screen bg-black'></div>
        <div ref={elementoRef2} className={`w-screen h-screen bg-red-500 ${llegada2 ? "opacity-100": " opacity-0"} transition-all duration-300 `}>
        {llegada2 ? "dentro": "fuera"}
        </div>
        <div ref={elementoRef} className={`w-screen h-screen bg-blue-500 ${llegada ? "opacity-100": " opacity-0"} transition-all duration-300 `}>
            {llegada ? "dentro": "fuera"}
        </div>
    </div>
  )
}

export default IntersectionObserverDos;