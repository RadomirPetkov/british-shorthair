import { useState } from 'react'
import { GoogleMap, Marker, withScriptjs, OverlayView } from 'react-google-maps'
import withGoogleMap from 'react-google-maps/lib/withGoogleMap'
import raffaello from '../../pictures/raffaello.jpeg'
import icie from '../../pictures/icie.jpeg'
import bubbie from '../../pictures/bubbie.jpeg'
import marcel from '../../pictures/marcel.jpeg'
import background2 from '../../pictures/background2.jpg'
// import { sizes } from './helper'

function Map () {
    const [currentZoom, setZoom] = useState(12)

    function handleZoomChanged (this: any) {
        setZoom(this.getZoom())
    }
    console.log(currentZoom)
    const getPixelPositionOffset = (width, height) => ({
        x: -(width * 3 / 4),
        y: -(height * 3 / 4)
      })
      const getPixelPositionOffset2 = (width, height) => ({
        x: -(width * 3 / 4),
        y: -(height * 3 / 4)
      })
    //   const getPixelPositionOffset3 = (width, height) => ({
    //     x: -(width * 4 / 4),
    //     y: -(height * 4 / 4)
    //   })
      const getPixelPositionOffset4 = (width, height) => ({
        x: (width * 3 / 4),
        y: (height * 3 / 4)
      })
      const getPixelPositionOffset5 = (width, height) => ({
        x: 0,
        y: 0
      })

    return (
        <GoogleMap zoom={12} defaultCenter={{ lat: 42.867321, lng: 25.492720 }} onZoomChanged={handleZoomChanged} >
        {/* tryavna */}
        {/* first cat */}
        {currentZoom > 6 && currentZoom < 13 &&
            <OverlayView position={{ lat: 42.885321, lng: 25.492720 }} getPixelPositionOffset={getPixelPositionOffset} mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}>
                <div className=''>
                    <img src={raffaello} alt="" className='h-12 w-12 rounded-full opacity-100' />
                </div>
        {/* second cat */}
            </OverlayView>}
            {currentZoom > 6 && currentZoom < 13 &&
            <OverlayView position={{ lat: 42.885321, lng: 25.492720 }} getPixelPositionOffset={getPixelPositionOffset2} mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}>
                <div className=''>
                    <img src={icie} alt="" className='h-12 w-12 rounded-full opacity-100' />
                </div>
            </OverlayView>}
        {/* third cat */}
        {currentZoom > 6 && currentZoom < 13 &&
            <OverlayView position={{ lat: 42.885321, lng: 25.492720 }} mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}>
                <div className=''>
                    <img src={bubbie} alt="" className='h-12 w-12 rounded-full opacity-100' />
                </div>
            </OverlayView>}
        {/* forth cat */}
        {currentZoom > 6 && currentZoom < 13 &&
            <OverlayView position={{ lat: 42.885321, lng: 25.492720 }} getPixelPositionOffset={getPixelPositionOffset4} mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}>
                <div className=''>
                    <img src={background2} alt="" className='h-12 w-12 rounded-full opacity-100' />
                </div>
            </OverlayView>}
        {/* fifth cat */}
        {currentZoom > 6 && currentZoom < 13 &&
            <OverlayView position={{ lat: 42.885321, lng: 25.492720 }} getPixelPositionOffset={getPixelPositionOffset5} mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}>
                <div className=''>
                    <img src={marcel} alt="" className='h-12 w-12 rounded-full opacity-100' />
                </div>
            </OverlayView>}
            {currentZoom <= 8 && <Marker position={{ lat: 42.867321, lng: 25.492720 }} />}
        </GoogleMap>
    )
}

export const WrappedMap = withScriptjs(withGoogleMap(Map))

export const GOOGLE_API_KEY = 'AIzaSyAp3oQzcyINh6_YYsyh8-68sqIHlV3jC1U'
