import { CatGallery } from './CatGallery/CatGallery'

export const Studs = () => {
    return (
        <div className='h-full bg-stud m-0'>
            <CatGallery fullName='Aspen SilverGlow' firebaseUrl='/studs/Aspen' sir='GICH Viva Vogue Ultramarine ' dam='Nicomedia Candy' />
            <CatGallery fullName='CH SilverGlow Ferrero Raffaello' firebaseUrl='/studs/Raffaello' sir='CH Marozka Peridot' dam='IGrCH Kamasaki Moonshadow ' />
        </div>
    )
}
