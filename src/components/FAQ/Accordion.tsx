import { useState } from 'react'
type AccordionProps = {
    data: {
        title: string,
        text: string
    }
}

export const Accordion = ({ data }: AccordionProps) => {
    const [active, setActive] = useState(false)

    return (
        <div className='pb-5'>
            <h4 className='border-b-2 border-b-slate-200  pb-3 mb-5 cursor-pointer text-2xl text-blue-200' onClick={() => setActive(!active)}>{data.title}</h4>
            <p className={`px-6 pt-0 text-slate-200 overflow-hidden transition-[max-height] duration-300 ease-in ${active ? 'max-h-200' : 'max-h-1'}`}>{data.text}</p>
        </div>
    )
}
