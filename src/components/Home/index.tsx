
// * Hooks
import useMediaQuery from '@/hooks/useMediaQuery'

// * Components
import { Link } from '../MainNavBar/Link'
import ActionButton from '../ActionButton'

// * Modules
import { motion } from 'framer-motion'

// * Imgs
import tulips from '@/assets/tulips.png'

// * Types
import { SelectedPage } from '@/shared/types'

type Props = {
    selectedPage: SelectedPage
    setSelectedPage: (value: SelectedPage) => void
}

export default function Home({ setSelectedPage, selectedPage }: Props) {

    const isAboveMediumScreens = useMediaQuery('(min-width: 1060px)')
    const isMiniScreens = useMediaQuery('(max-width: 370px)')

    const sectionStyles = `flex main-layout gap-12 h-fit pb-10 md:h-full md:pb-0 ${isAboveMediumScreens ? 'flex-row pt-36' : 'flex-col pt-28'}`
    const h1Styles = `logo relative md:before:content-["Queen_Tamarrsh"] before:max-w-[100%] before:absolute before:-top-16 before:-left-8 cursor-default ${isMiniScreens ? 'text-5xl' : 'text-6xl'} before:text-9xl before:text-gray-20-trans before:z-[-1] mb-2 uppercase`
    const imgStyles = `object-contain ${isAboveMediumScreens ? 'max-w-[600px]' : 'w-full'}`
    return <section
        className={sectionStyles}
        id={SelectedPage.Home}>
        <motion.div
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.5 }}
            variants={{
                hidden: { opacity: 0, x: -60 },
                visible: { opacity: 1, x: 0 }
            }}
            onViewportEnter={()=> { setSelectedPage(SelectedPage.Home) }}
        >
            <h1 className={h1Styles}>Queen Tamarrsh</h1>
            <h2 className="cursor-default text-2xl mb-6">Embrace Your Sparkle with Custom Charm.</h2>
            <div className='flex w-full max-w-[206px] justify-between items-center'>
                <ActionButton children="Order now" setSelectedPage={setSelectedPage} title="Contact us for booking" value={SelectedPage.ContactUs} />
                <div className="underline">
                    <Link pageName={SelectedPage.Portfolio} setSelectedPage={setSelectedPage} selectedPage={selectedPage} />
                </div>
            </div>
        </motion.div>
        <motion.img
            src={tulips}
            className={imgStyles}
            width={500}
            height={300}
            alt="Homepage graphics"
            initial="hidden"
            whileInView="visible"
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true, amount: 0.5 }}
            variants={{
                hidden: { opacity: 0, y: 60 },
                visible: { opacity: 1, y: 0 }
            }}
        />
    </section>
}