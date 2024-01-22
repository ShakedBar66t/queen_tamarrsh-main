
// * Cmps
import MainNavBar from '../MainNavBar'

// * Types
import { SelectedPage } from '@/shared/types'

// * SVG
import WhiteLogo from '@/assets/white-logo.png'

type Props = {
    isTopOfPage: boolean
    isMainNavOpen: boolean
    selectedPage: SelectedPage
    setIsMainNavOpen: (value: boolean) => void
    setSelectedPage: (value: SelectedPage) => void
}


export default function MainHeader({ isTopOfPage, selectedPage, isMainNavOpen, setSelectedPage, setIsMainNavOpen }: Props) {

    const headerStyles = `fixed w-full top-0 z-30 bg-gray-500-trans`

    return <header className={headerStyles}>
        <div className="main-layout items-center flex-between gap-16 py-6">
            <img alt="QT Logo" onClick={() => {
                setSelectedPage(SelectedPage.Home)
                window.scrollTo({
                top: 0
            })}} className='max-w-[70px] w-[120px] cursor-pointer' src={WhiteLogo} />
            <MainNavBar
                isTopOfPage={isTopOfPage}
                selectedPage={selectedPage}
                isMainNavOpen={isMainNavOpen}
                setSelectedPage={setSelectedPage}
                setIsMainNavOpen={setIsMainNavOpen} />
        </div>
    </header>
}