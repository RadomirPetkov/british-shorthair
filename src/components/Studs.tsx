import { CatGallery } from './CatGallery/CatGallery'

export const Studs = () => {
    return (
        <div className='bg-stud m-0 pb-8 -mb-16 h-full'>
            <CatGallery fullName='Aspen SilverGlow' firebaseUrl='/studs/Aspen' sir='GICH Viva Vogue Ultramarine ' dam='Nicomedia Candy' />
            <CatGallery fullName='CH SilverGlow Ferrero Raffaello' firebaseUrl='/studs/Raffaello' sir='CH Marozka Peridot' dam='IGrCH Kamasaki Moonshadow ' />
        </div>
    )
}
