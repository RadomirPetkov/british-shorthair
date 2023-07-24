import { KittensLitter } from './KittensLitter'

export const AvailableKittens = () => {
    return (
        <div className=''>
            <KittensLitter dob={'13.04.2023'} parent1={'marvin'} parent2={'ainie'} parentNames={['World Champion Marvin Polaris', 'Champion SilverGlow Little Moonshadow (pet name: Ainie)']} />
            <KittensLitter dob={'29.03.2023'} parent1={'raffaello'} parent2={'candy'} parentNames={['Champion SilverGlow Ferrero Raffaello', 'Nicomedia Candy']} />
            <KittensLitter dob={'none'} parent1={'aspen'} parent2={'bubie'} parentNames={['Aspen SilverGlow', 'Champion SilverGlow Hubba Bubba (pet name: Bubie)']} />
            <KittensLitter dob={'none'} parent1={'aspen'} parent2={'icie'} parentNames={['Aspen SilverGlow', 'SilverGlow Ice Ice Baby (pet name: Icie)']} />
            <KittensLitter dob={'none'} parent1={'raffaello'} parent2={'baicie'} parentNames={['Champion SilverGlow Ferrero Raffaello', 'Baicie SilverGlow']} />
        </div>
    )
}
