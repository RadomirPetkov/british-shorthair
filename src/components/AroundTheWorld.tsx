// import { Map } from './AroundTheWorld/google-maps'
import yellow from '../pictures/yellow.jpg'

export const AroundTheWorld = () => {
    return (
        <div className='w-11/12 m-auto mb-10 rounded-xl overflow-hidden'>
            {/* <Map></Map> */}
            <p className='my-10 text-xl'>We have kittens on 4 continents. We work with licensed couriers and can ship to almost everywhere around the world.</p>
            <img src={yellow} alt="map" className='rounded-xl'/>
        </div>
    )
}
