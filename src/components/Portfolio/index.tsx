
// * Components
import ImgGallery from '../ImgGallery'

// * Modules
import { motion } from 'framer-motion'

// * Types
import { SelectedPage } from '@/shared/types'

// * Assets
import CLIENT1 from '@/assets/CLIENT1.jpeg'
import CLIENT2 from '@/assets/CLIENT2.jpeg'
import CLIENT3 from '@/assets/CLIENT3.jpeg'
import CLIENT4 from '@/assets/CLIENT4.jpeg'
import CLIENT5 from '@/assets/CLIENT5.jpeg'
import CLIENT6 from '@/assets/CLIENT6.jpeg'


type Props = {
    setSelectedPage: (value: SelectedPage) => void
}


export default function Portfolio({ setSelectedPage } : Props) {

    const imgs: string[] = [CLIENT1, CLIENT2, CLIENT3, CLIENT4, CLIENT5, CLIENT6]

    return <section className="min-h-full w-full bg-gray-500-trans flex my-14 flex-col gap-6">
        <motion.div
            className="main-layout flex flex-col gap-6 text-gray-20"
            initial="hidden"
            whileInView="visible"
            onViewportEnter={() => { setSelectedPage(SelectedPage.Portfolio) }}
            id="portfolio"
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.1 }}
            variants={{
                hidden: { opacity: 0, x: -60 },
                visible: { opacity: 1, x: 0 }
            }}
        >
        </motion.div>
        <motion.div
            className="mt-4 w-full overflow-x-auto overflow-y-hidden"
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.1 }}
            variants={{
                hidden: { opacity: 0, x: -60 },
                visible: { opacity: 1, x: 0 }
            }}
        >
            <ImgGallery imgs={imgs} />
        </motion.div>
    </section>
}