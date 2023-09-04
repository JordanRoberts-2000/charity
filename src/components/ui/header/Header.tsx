import HamburgerMenu from "./HamburgerMenu"
import SelectLanguage from "./SelectLanguage"
import logoImage from '../../../assets/images/logo.jpg'

const Header = () => {
  return (
    <header className='fixed top-0 w-full z-50 bg-white flex py-2 items-center border-black border-b customShadow'>
        <div className="flex gap-2">
            <img src={logoImage} className="h-[24px] object-cover ml-2"/>
            <span className="text-lg font-semibold">A.S.I</span>
        </div>
        <div className="ml-auto flex items-center cursor-pointer min-w-[100px]">
            <SelectLanguage/>
        </div>
        <HamburgerMenu/>
    </header>
  )
}

export default Header