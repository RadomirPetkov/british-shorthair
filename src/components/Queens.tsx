import { CatGallery } from './CatGallery/CatGallery'

export const Queens = () => {
    return (
        <div className='h-full bg-stud m-0'>
            <CatGallery fullName='SilverGlow Ice Ice Baby' petName='Icie' firebaseUrl='/queens/Icie' sir='Ugo Polaris' dam='IGrCH Kamasaki Moonshadow' />
            <CatGallery fullName='CH SilverGlow Little Moonshadow' petName='Ainie' firebaseUrl='/queens/Ainie' sir='IGrCH Jeraz Little Snowbear' dam='IGrCH Kamasaki Moonshadow' />
            <CatGallery fullName='CH SilverGlow Hubba Bubba' petName='Bubie' firebaseUrl='/queens/Bubie' sir='CH Richard Von Burg Weissensee' dam='SilverGlow Ice Ice Baby' />
            <CatGallery fullName='Nicomedia Candy' petName='Candy' firebaseUrl='/queens/Candy' sir='ICH Turquase Atris' dam='CH Alpari Felicita' />
            <CatGallery fullName='Baicie SilverGlow' petName='Baicie' firebaseUrl='/queens/Baicie' sir='GECH Viva Vogue Ultramarine' dam='Nicomedia Candy' />
        </div>
    )
}
