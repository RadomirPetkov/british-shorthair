import { Link } from 'react-router-dom'
import logo from '../pictures/logo-white.png'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import Select from 'react-select'
import i18next from 'i18next'

export const Navbar = () => {
  const linkClassName = 'hover:bg-baseBackground py-2 px-3 rounded-full'
  const { t } = useTranslation()
  const { language } = useSelector((state: any) => state.language)
  const changeHandler = (e) => {
    i18next.changeLanguage(e.value)
  }

  return (
    <div className="bg-gradient-to-b from-slate-800 via-gray-600 to-gray-500 flex flex-wrap m-0 w-screen">
      <div className='m-auto w-full sm:w-auto md:w-auto'>
        <Link to={'/'}>
          <img src={logo} alt="" className='h-16 top-10 left-10 hidden sm:block sm:h-10 md:h-16 xl:h-20 xl:top-5' />
        </Link>
      </div>
      {/* mobile view */}
      <img src={logo} alt="" className='w-24 h-16 m-auto pt-5 sm:hidden' />
      <div className='py-2 w-full space-y-2 px-0 sm:hidden'>
        <div className='flex flex-wrap justify-center items-center pt-2 w-full'>
          <Link to={'/'} className={linkClassName} >{t('home')}</Link>
          <Link to={'/around-the-world'} className={linkClassName} >{t('around-the-world')}</Link>
          <Link to={'/studs'} className={linkClassName} >{t('studs')}</Link>
          <Link to={'/queens'} className={linkClassName} >{t('queens')}</Link>
          <Link to={'/kittens'} className={linkClassName} >{t('available-kittens')}</Link>
          <Link to={'/feedback'} className={linkClassName} >{t('feedback')}</Link>
          <Link to={'/contact'} className={linkClassName} >{t('contacts')}</Link>
        </div>
        <div>
          {/* <Link to={'/around-the-world'} className={linkClassName} >Silverglows around the world</Link> */}
        </div>
      </div>

      {/* web view */}
      <div className='flex-wrap grow space-x-1 px-10 py-5 space-y-5 hidden sm:block sm:p-10 sm:space-x-5'>
        <Link to={'/'} className={linkClassName}>{t('home')}</Link>
        <Link to={'/around-the-world'} className={linkClassName}>{t('around-the-world')}</Link>
        <Link to={'/studs'} className={linkClassName}>{t('studs')}</Link>
        <Link to={'/queens'} className={linkClassName}>{t('queens')}</Link>
        <Link to={'/kittens'} className={linkClassName}>{t('available-kittens')}</Link>
        <Link to={'/feedback'} className={linkClassName}>{t('feedback')}</Link>
        <Link to={'/contact'} className={linkClassName}>{t('contacts')}</Link>
      </div>
      <div className='text-black p-0 absolute top-0 right-0'>
        <Select onChange={changeHandler} defaultValue={{ value: language, label: 'EN' }} options={[
          { value: 'en', label: 'EN' },
          { value: 'bg', label: 'BG' }
        ]
        } />
      </div>
    </div>
  )
}
