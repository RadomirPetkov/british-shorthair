import { useState } from 'react'
import { Accordion } from './Accordion'

export const FAQ = () => {
    const [active, setActive] = useState(false)
    const data = [{
        title: 'When I can get my kitten?',
        text: 'All our kittens leave us after they are 14 weeks old, fully vaccinated ( FeLV vaccinated too ), ( Rabies vaccinated ), twice health checked and microchipped.'
    },
    {
        title: 'When should I neutered/spayed my kitten',
        text: 'We always advise for female kittens to be spayed when they are around 6 months old, for males - as late as possible or when they are around 1 year old. '
    },
    {
        title: 'A male or a female kitten is best for me?',
        text: 'It is all about a character from our experience. Females are more independent but still cuddling. They are very gentle and feminine. Males are quite attached to people and other pets. BSH live fine with other pets ( cats, dogs.. ).'
    },
    {
        title: 'Why should I take a kitten from a registered cattery?',
        text: 'If you are looking for a pedigree kitten, we, Silverglow BSH cats, recommend you having a kitten from a registered cattery instead of from "backyard breeders". This will ensure you the kitten meets the standards of the breed in the first place. Every Breeder must test the cats for genetic disease before the Mating. No one can guarantee the kitten won\'t get ill in future, but at least we can prevent passing a genetically health issue to next generations. Always look for a reputable Breeders and ask all your questions before you take the decision of having a kitten.'
    },
    {
        title: 'I\'ve never had a kitten before, what should I know before have one?',
        text: 'Always go for a kitten only if you are happy with all the given information. Having a cat is a lifetime decision. Don\'t forget about the worm and flea treatments and don\'t miss the vaccines neither. BSH fully grow up when they are 4-5 years old. So your cat will reach her/his body size by then. Eye color develops till the cat is around 1 and a half year old. The Tipped can get slightly lighter or darker ( usually lighter ) with the time. The Silver ( Agouti ) BSH are a bit "smaller" than the Solid ( such as blue, fawn, cinnamon, chocolate, cream, black, red ... ). It is normal for an adult silver female to weigh around 3.5kg and for a male - around 5kg.'
    }
    ]
    return (
        <div className='m-5 rounded-xl text-xl flex flex-col gap-5' onClick={() => setActive(!active)}>
            <h2 className='text-3xl'>FAQ</h2>
            {data.map(data => {
                return <Accordion data={data} key={data.title} />
            })}
            <p>***</p>
            <p className='py-5 border-t-2'>In case you need an advice or just an information in future, you can always contact us. We will be more than happy to help. We are still in a contact with owners of Silverglow kittens even after years of time.</p>
        </div>
    )
}
