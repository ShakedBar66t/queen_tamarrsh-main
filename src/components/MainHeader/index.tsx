
// * Cmps
import MainNavBar from '../MainNavBar'

// * Types
import { SelectedPage } from '@/shared/types'

// * SVG
import  Logo  from '@/assets/logo.svg'
import WhiteLogo from '@/assets/white-logo.png'

type Props = {
    isTopOfPage: boolean
    isMainNavOpen: boolean
    selectedPage: SelectedPage
    setIsMainNavOpen: (value: boolean) => void
    setSelectedPage: (value: SelectedPage) => void
}


export default function MainHeader({ isTopOfPage, selectedPage, isMainNavOpen, setSelectedPage, setIsMainNavOpen }: Props) {

    const headerStyles = `fixed w-full top-0 z-30 ${isTopOfPage ? '' : 'bg-gray-500-trans'}`
    // const h1LogoStyles = `logo text-2xl font-bold uppercase ${!isTopOfPage ? 'text-gray-20' : ''}`

    return <header className={headerStyles}>
        <div className="main-layout items-center flex-between gap-16 py-6">
            {/* <h1 title="Koolkat tattoos" className={h1LogoStyles}>QT</h1> */}
            <img alt="QT Logo" className={isTopOfPage ? 'max-w-[70px]' : 'max-w-[50px]'} src={isTopOfPage ? Logo : WhiteLogo} />
            <MainNavBar
                isTopOfPage={isTopOfPage}
                selectedPage={selectedPage}
                isMainNavOpen={isMainNavOpen}
                setSelectedPage={setSelectedPage}
                setIsMainNavOpen={setIsMainNavOpen} />
        </div>
    </header>
}