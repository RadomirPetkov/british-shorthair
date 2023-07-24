// import { Map } from './AroundTheWorld/google-maps'
import img from '../pictures/white.jpg'
import yellow from '../pictures/yellow.jpg'

export const AroundTheWorld = () => {
    return (
        <div className='w-11/12 m-auto mt-5 rounded-xl overflow-hidden'>
            {/* <Map></Map> */}
            <img src={img} alt="map" className='my-5 rounded-xl'/>
            <img src={yellow} alt="map" className='rounded-xl'/>
            <p className='mt-10 text-xl'>We have kittens on 4 continents. We work with licensed couriers and can ship to almost everywhere around the world.</p>
        </div>
    )
}
