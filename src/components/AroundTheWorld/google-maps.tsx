import { GoogleMap, useLoadScript, Marker, OverlayView } from '@react-google-maps/api'
import { useMemo, useState } from 'react'
import raffaello from '../../pictures/raffaello.jpeg'
import marcel from '../../pictures/marcel.jpeg'
import icie from '../../pictures/icie.jpeg'
import bubbie from '../../pictures/bubbie.jpeg'

export const Map = () => {
    const [visible, setVisible] = useState({ tryavna: false, london: false })

    function handleZoomChanged (this: any) {
        this.getZoom() > 10 ? setVisible({ tryavna: true, london: true }) : setVisible({ tryavna: false, london: false })
    }
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: import.meta.env.VITE_REACT_APP_GOOGLE_MAPS_API_KEY
    })
    const center = useMemo(() => ({ lat: 42.867321, lng: 25.492720 }), [])
    const getPixelPositionOffset = (width, height) => ({
        x: -(width * 1.3),
        y: -(height * 1.5)
    })
    const getPixelPositionOffset2 = (width, height) => ({
        x: (width / width),
        y: (height / height)
    })
    const getPixelPositionOffset3 = (width, height) => ({
        x: (width / width),
        y: -(height * 1.5)
    })
    const getPixelPositionOffset4 = (width, height) => ({
        x: -(width * 1.3),
        y: (height / height)
    })
    return (
        <div className='App'>
            {!isLoaded
                ? (
                    <h1>Loading...</h1>
                )
                : (
                    <GoogleMap
                        mapContainerClassName='h-screen w-screen'
                        center={center}
                        zoom={3}
                        onZoomChanged={handleZoomChanged}
                        options={ { streetViewControl: false } }
                    >
                        {/* tryavna */}
                        <Marker position={{ lat: 42.867321, lng: 25.492720 }} onMouseOver={() => setVisible((old) => ({ ...old, tryavna: true }))} onMouseOut={() => setVisible((old) => ({ ...old, tryavna: false }))} onClick={() => setVisible((old) => ({ ...old, tryavna: !old.tryavna }))}></Marker>
                        {visible.tryavna &&
                            <OverlayView position={{ lat: 42.867321, lng: 25.492720 }} mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET} getPixelPositionOffset={getPixelPositionOffset}>
                                <div>
                                    <img src={marcel} alt="SilverGlow British Shorthair cat in Tryavna" className='w-16 h-16 rounded-full' />
                                </div>
                            </OverlayView>}
                        {visible.tryavna &&
                            <OverlayView position={{ lat: 42.867321, lng: 25.492720 }} mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET} getPixelPositionOffset={getPixelPositionOffset2}>
                                <div>
                                    <img src={raffaello} alt="SilverGlow Ferrero Raffaello British Shorthair" className='w-16 h-16 rounded-full' />
                                </div>
                            </OverlayView>}
                        {visible.tryavna &&
                            <OverlayView position={{ lat: 42.867321, lng: 25.492720 }} mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET} getPixelPositionOffset={getPixelPositionOffset3}>
                                <div>
                                    <img src={icie} alt="SilverGlow Ice Ice Baby British Shorthair queen" className='w-16 h-16 rounded-full' />
                                </div>
                            </OverlayView>}
                        {visible.tryavna &&
                            <OverlayView position={{ lat: 42.867321, lng: 25.492720 }} mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET} getPixelPositionOffset={getPixelPositionOffset4}>
                                <div>
                                    <img src={bubbie} alt="SilverGlow Hubba Bubba British Shorthair queen" className='w-16 h-16 rounded-full' />
                                </div>
                            </OverlayView>}

                        {/* london */}
                        <Marker position={{ lat: 51.507351, lng: -0.127758 }} onMouseOver={() => setVisible((old) => ({ ...old, london: true }))} onMouseOut={() => setVisible((old) => ({ ...old, london: false }))} onClick={() => setVisible((old) => ({ ...old, london: !old.london }))}></Marker>
                        {visible.london &&
                            <OverlayView position={{ lat: 51.507351, lng: -0.127758 }} mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET} getPixelPositionOffset={getPixelPositionOffset}>
                                <div>
                                    <img src={marcel} alt="SilverGlow British Shorthair cat in London" className='w-16 h-16 rounded-full' />
                                </div>
                            </OverlayView>}
                        {visible.london &&
                            <OverlayView position={{ lat: 51.507351, lng: -0.127758 }} mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET} getPixelPositionOffset={getPixelPositionOffset2}>
                                <div>
                                    <img src={raffaello} alt="SilverGlow Ferrero Raffaello British Shorthair" className='w-16 h-16 rounded-full' />
                                </div>
                            </OverlayView>}
                        {visible.london &&
                            <OverlayView position={{ lat: 51.507351, lng: -0.127758 }} mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET} getPixelPositionOffset={getPixelPositionOffset3}>
                                <div>
                                    <img src={icie} alt="SilverGlow Ice Ice Baby British Shorthair queen" className='w-16 h-16 rounded-full' />
                                </div>
                            </OverlayView>}
                        {visible.london &&
                            <OverlayView position={{ lat: 51.507351, lng: -0.127758 }} mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET} getPixelPositionOffset={getPixelPositionOffset4}>
                                <div>
                                    <img src={bubbie} alt="SilverGlow Hubba Bubba British Shorthair queen" className='w-16 h-16 rounded-full' />
                                </div>
                            </OverlayView>}
                    </GoogleMap>
                )
            }
        </div >
    )
}
