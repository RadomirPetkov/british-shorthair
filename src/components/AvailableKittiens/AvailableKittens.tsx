import { collection, getDocs } from 'firebase/firestore'
import { AddNewKittensLitter } from './AddNewKittensLitter'
import { KittensLitter } from './KittensLitter'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import { useEffect, useState } from 'react'
import { db } from '../../firebase-config'
import { SEO } from '../features/SEO'
import { seoData } from '../../config/seoData'
import { useTranslation } from 'react-i18next'

export const AvailableKittens = () => {
    const { i18n } = useTranslation()
    const currentLang = i18n.language as 'en' | 'bg'
    const seo = seoData.kittens[currentLang]
    const [firebaseDocsData, setFirebaseDocsData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const firebaseDocs = await getDocs(collection(db, 'KittensLitter'))
            firebaseDocs.forEach((doc) => {
                // @ts-ignore
                setFirebaseDocsData((oldData) => {
                    return [...oldData, doc].sort((a, b) => {
                        if (a.data().available < b.data().available) {
                            return 1
                        }
                        if (a.data().available > b.data().available) {
                            return -1
                        }
                        return 0
                    })
                })
            })
        }
        fetchData()
    }, [])

    const { user } = useSelector((state: any) => state.user)
    const PawIcon = ({ className }: { className?: string }) => (
        <svg className={className} viewBox="0 0 100 100" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="30" cy="20" rx="10" ry="13" />
            <ellipse cx="70" cy="20" rx="10" ry="13" />
            <ellipse cx="15" cy="45" rx="8" ry="11" />
            <ellipse cx="85" cy="45" rx="8" ry="11" />
            <path d="M50 35 C25 35 15 55 18 72 C21 85 35 90 50 90 C65 90 79 85 82 72 C85 55 75 35 50 35Z" />
        </svg>
    )

    return (
        <>
            <SEO
                title={seo.title}
                description={seo.description}
                keywords={seo.keywords}
                canonicalUrl="/kittens"
                lang={currentLang}
            />
            <div className="relative flex-1 bg-stud py-12 px-4 overflow-hidden">

                {/* Decorative paw prints - desktop only */}
                <PawIcon className="hidden lg:block absolute top-6 left-6 w-16 h-16 text-white/[0.05] rotate-[-20deg]" />
                <PawIcon className="hidden lg:block absolute top-6 right-6 w-16 h-16 text-white/[0.05] rotate-[20deg]" />
                <PawIcon className="hidden lg:block absolute top-1/4 left-4 w-20 h-20 text-white/[0.04] rotate-[15deg]" />
                <PawIcon className="hidden lg:block absolute top-1/4 right-4 w-20 h-20 text-white/[0.04] rotate-[-15deg]" />
                <PawIcon className="hidden lg:block absolute top-1/2 left-4 w-20 h-20 text-white/[0.04] rotate-[-25deg]" />
                <PawIcon className="hidden lg:block absolute top-1/2 right-4 w-20 h-20 text-white/[0.04] rotate-[25deg]" />
                <PawIcon className="hidden lg:block absolute top-3/4 left-4 w-20 h-20 text-white/[0.04] rotate-[20deg]" />
                <PawIcon className="hidden lg:block absolute top-3/4 right-4 w-20 h-20 text-white/[0.04] rotate-[-20deg]" />
                <PawIcon className="hidden lg:block absolute bottom-6 left-6 w-16 h-16 text-white/[0.05] rotate-[-15deg]" />
                <PawIcon className="hidden lg:block absolute bottom-6 right-6 w-16 h-16 text-white/[0.05] rotate-[15deg]" />

                {/* Header */}
                <div className="relative text-center mb-12">
                    <h1 className="text-2xl font-light tracking-[0.3em] text-white/70 uppercase">Available Kittens</h1>
                    <div className="flex items-center justify-center gap-3 mt-3">
                        <div className="h-px w-16 bg-white/20" />
                        <PawIcon className="w-4 h-4 text-white/30" />
                        <div className="h-px w-16 bg-white/20" />
                    </div>
                    <p className="text-white/30 text-xs tracking-widest uppercase mt-3">SilverGlow British Shorthair Cattery</p>
                </div>

                {/* Litters */}
                <div className="relative flex flex-col gap-8 max-w-2xl mx-auto">
                    {firebaseDocsData.map((doc: any) => {
                        const data = doc.data()
                        return (
                            <KittensLitter
                                key={doc.id}
                                id={doc.id}
                                dob={'none'}
                                parent1={data?.parentPic1}
                                parent2={data?.parentPic2}
                                parentNames={[`${data.parentName1}`, `${data.parentName2}`]}
                                available={data.available}
                            />
                        )
                    })}
                </div>

                {user && (
                    <div className="relative max-w-2xl mx-auto mt-10">
                        <AddNewKittensLitter />
                    </div>
                )}
            </div>
        </>
    )
}
