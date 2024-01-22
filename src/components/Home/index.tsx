
// * Hooks
import useMediaQuery from '@/hooks/useMediaQuery'

// * Components
import { Link } from '../MainNavBar/Link'
import ActionButton from '../ActionButton'

// * Modules
import { motion } from 'framer-motion'

// * Types
import { SelectedPage } from '@/shared/types'

type Props = {
    selectedPage: SelectedPage
    setSelectedPage: (value: SelectedPage) => void
}

export default function Home({ setSelectedPage, selectedPage }: Props) {

    const isAboveMediumScreens = useMediaQuery('(min-width: 1060px)')
    
    const imgStyles = `object-contain mb-4 ${isAboveMediumScreens ? 'max-w-[600px]' : 'w-full'}`
    return <section
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
            className={`flex flex-col my-8 justify-center items-center main-layout gap-16 h-fit pb-10 md:h-full md:pb-0 ${isAboveMediumScreens ? 'flex-row pt-36' : 'flex-col pt-28'}`}
        >
             <motion.img
            src="https://res.cloudinary.com/drld1bejg/image/upload/v1705962883/IMG_4659-removebg_yv0740.png"
            className={imgStyles}
            width={600}
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

            <div className='flex w-full max-w-[260px] sm:max-w-[300px] justify-between items-center'>
                <ActionButton children="Order now" setSelectedPage={setSelectedPage} title="Contact us for booking" value={SelectedPage.ContactUs} />
                <div className="underline">
                    <Link pageName={SelectedPage.Portfolio} setSelectedPage={setSelectedPage} selectedPage={selectedPage} offset='0' />
                </div>
            </div>
        </motion.div>

    </section>
    
}