import { SEO } from './features/SEO'
import { seoData } from '../config/seoData'
import { useTranslation } from 'react-i18next'
import { StudCard } from './StudCard'

const PawIcon = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 100 100" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="30" cy="20" rx="10" ry="13" />
        <ellipse cx="70" cy="20" rx="10" ry="13" />
        <ellipse cx="15" cy="45" rx="8" ry="11" />
        <ellipse cx="85" cy="45" rx="8" ry="11" />
        <path d="M50 35 C25 35 15 55 18 72 C21 85 35 90 50 90 C65 90 79 85 82 72 C85 55 75 35 50 35Z" />
    </svg>
)

const queens = [
    { fullName: 'SilverGlow Ice Ice Baby', petName: 'Icie', firebaseUrl: '/queens/Icie', sir: 'Ugo Polaris', dam: 'IGrCH Kamasaki Moonshadow' },
    { fullName: 'CH SilverGlow Little Moonshadow', petName: 'Ainie', firebaseUrl: '/queens/Ainie', sir: 'IGrCH Jeraz Little Snowbear', dam: 'IGrCH Kamasaki Moonshadow' },
    { fullName: 'CH SilverGlow Hubba Bubba', petName: 'Bubie', firebaseUrl: '/queens/Bubie', sir: 'CH Richard Von Burg Weissensee', dam: 'SilverGlow Ice Ice Baby' },
    { fullName: 'Nicomedia Candy', petName: 'Candy', firebaseUrl: '/queens/Candy', sir: 'ICH Turquase Atris', dam: 'CH Alpari Felicita' },
    { fullName: 'Baicie SilverGlow', petName: 'Baicie', firebaseUrl: '/queens/Baicie', sir: 'GECH Viva Vogue Ultramarine', dam: 'Nicomedia Candy' }
]

export const Queens = () => {
    const { i18n } = useTranslation()
    const currentLang = i18n.language as 'en' | 'bg'
    const seo = seoData.queens[currentLang]

    return (
        <>
            <SEO
                title={seo.title}
                description={seo.description}
                keywords={seo.keywords}
                canonicalUrl="/queens"
                lang={currentLang}
            />
            <div className="relative flex-1 bg-stud py-12 px-4 overflow-hidden">

                {/* Decorative background paw prints - desktop only */}
                <PawIcon className="hidden lg:block absolute top-6 left-6 w-16 h-16 text-white/[0.05] rotate-[-20deg]" />
                <PawIcon className="hidden lg:block absolute top-6 right-6 w-16 h-16 text-white/[0.05] rotate-[20deg]" />
                <PawIcon className="hidden lg:block absolute top-6 left-1/2 w-16 h-16 text-white/[0.04] rotate-[10deg]" />
                <PawIcon className="hidden lg:block absolute top-1/4 left-4 w-20 h-20 text-white/[0.04] rotate-[15deg]" />
                <PawIcon className="hidden lg:block absolute top-1/4 right-4 w-20 h-20 text-white/[0.04] rotate-[-15deg]" />
                <PawIcon className="hidden lg:block absolute top-1/3 left-1/3 w-16 h-16 text-white/[0.04] rotate-[30deg]" />
                <PawIcon className="hidden lg:block absolute top-1/2 left-4 w-20 h-20 text-white/[0.04] rotate-[-25deg]" />
                <PawIcon className="hidden lg:block absolute top-1/2 right-4 w-20 h-20 text-white/[0.04] rotate-[25deg]" />
                <PawIcon className="hidden lg:block absolute top-1/2 right-1/3 w-16 h-16 text-white/[0.03] rotate-[-10deg]" />
                <PawIcon className="hidden lg:block absolute top-2/3 left-4 w-20 h-20 text-white/[0.04] rotate-[20deg]" />
                <PawIcon className="hidden lg:block absolute top-2/3 right-4 w-20 h-20 text-white/[0.04] rotate-[-20deg]" />
                <PawIcon className="hidden lg:block absolute top-3/4 left-1/3 w-16 h-16 text-white/[0.04] rotate-[15deg]" />
                <PawIcon className="hidden lg:block absolute top-5/6 left-1/2 w-16 h-16 text-white/[0.04] rotate-[-10deg]" />
                <PawIcon className="hidden lg:block absolute bottom-6 left-6 w-16 h-16 text-white/[0.05] rotate-[-15deg]" />
                <PawIcon className="hidden lg:block absolute bottom-6 right-6 w-16 h-16 text-white/[0.05] rotate-[15deg]" />

                {/* Header */}
                <div className="relative text-center mb-12">
                    <h1 className="text-2xl font-light tracking-[0.3em] text-white/70 uppercase">Our Queens</h1>
                    <div className="flex items-center justify-center gap-3 mt-3">
                        <div className="h-px w-16 bg-white/20" />
                        <PawIcon className="w-4 h-4 text-white/30" />
                        <div className="h-px w-16 bg-white/20" />
                    </div>
                    <p className="text-white/30 text-xs tracking-widest uppercase mt-3">SilverGlow British Shorthair Cattery</p>
                </div>

                {/* Cards */}
                <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
                    {queens.map((queen) => (
                        <StudCard key={queen.fullName} {...queen} />
                    ))}
                </div>
            </div>
        </>
    )
}
