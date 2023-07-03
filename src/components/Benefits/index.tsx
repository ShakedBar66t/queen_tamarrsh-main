
// * Components
import BenefitCard from './BenefitCard'
import ActionButton from '../ActionButton'

// * Images
import Sailor from '@/assets/Sailor.png'
import Dagger from '@/assets/Dagger.png'
// * Modules
import { motion } from 'framer-motion'

// * Types
import { SelectedPage, Benefit } from '@/shared/types'

// * SVGs
import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from '@heroicons/react/24/solid'
import FOOTBALL from '@/assets/1913.jpg'
import GARY from '@/assets/gary.jpg'
import DUVSHANIA from '@/assets/duvshania.jpg'
import SUGAR from '@/assets/sugar.jpg'
import MEGABABE from '@/assets/mega-babe.jpg'
import SHIFRA from '@/assets/shifra.jpg'
import BRACELET from '@/assets/bracelet.jpg'

type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

export default function Benefits({ setSelectedPage }: Props) {

    const benefits: Array<Benefit> = [
        {
            img: FOOTBALL,
            title: '1913',
            description: 'שרשרת מחרוזי קריסטל בגווני ירוק ולבן',
            price: 199.90,
        },
        {
            img: GARY,
            title: 'גרי',
            description: 'שרשרת מחרוזי אבן טבעי בגווני אדמה',
            price: 179.90
        },
        {
            img: DUVSHANIA,
            title: 'דובשנייה',
            description: 'שרשרת פנינים בשילוב סברובסקי',
            price: 299.90
        }, {
            img: SUGAR,
            title: 'סוכר',
            description: 'שרשרת קלאסית מחרוזי קרמיקה',
            price: 149.90
        }, {
            img: MEGABABE,
            title: 'מגה-בייב',
            description: 'שרשרת מחרוזי קריסטל מנצנצים בגווני ורוד',
            price: 199.90
        }, {
            img: SHIFRA,
            title: 'שפרה',
            description: 'שרשרת שחורה מנצנצת בשילוב חרוזי קריסטל ומתכת',
            price: 179.90
        }, {
            img: BRACELET,
            title: 'סלט פירות',
            description: 'צמיד אייקוני מחרוזים אקראיים',
            price: 84.90
        },
    ]

    return <motion.section
        id={SelectedPage.Benefits}
        className="card"
        onViewportEnter={() => { setSelectedPage(SelectedPage.Benefits) }}
    >
        <motion.div
            className="cursor-default"
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.1 }}
            variants={{
                hidden: { opacity: 0, x: -60 },
                visible: { opacity: 1, x: 0 }
            }}>
            <h3 className="header-title py-4 text-center">Choose your aesthetic</h3>
            <ul className="md:grid md:grid-cols-3 flex flex-col gap-8 mb-16">
                {benefits.map((benefit, idx) => (
                    <BenefitCard
                        key={idx}
                        benefit={benefit}
                        column={idx === benefits.length - 1 ? 'col-span-3' : ''}
                    />
                ))}
            </ul>

        </motion.div>

        <motion.div
            className="flex-between flex-col gap-14 md:flex-row"
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.1 }}
            variants={{
                hidden: { opacity: 0, x: -60 },
                visible: { opacity: 1, x: 0 }
            }}
        >
            <img
                className="w-full max-w-[400px] h-fit md:w-full md:max-w-[480px]"
                src={Sailor}
                alt="Sailor graphics" />
            <div className="flex flex-col gap-10">
                <div className="flex flex-col gap-6">
                    <h3 className="relative font-extrabold uppercase text-3xl cursor-default">
                        Hundreds of customers getting <span className="text-red-100">inked</span>.
                    </h3>
                    <p className="font-bold text-lg cursor-default">
                        Embrace the benefits of choosing Koolkat's Tattoo Shop. Revel in the fusion of traditional tattoos and edgy street art, guided by Koolkat's experienced hand. With a legacy of hundreds of satisfied customers, your trust in us turns into bold, unique, and inspiring ink stories. Here, we don't just ink skin - we honor your journey. Dive into the Koolkat experience, where our customer is the canvas of our artistry!
                    </p>
                </div>
                <motion.div
                    className="w-full py-2 flex items-center justify-start gap-10"
                    initial="hidden"
                    whileInView="visible"
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true, amount: 0.1 }}
                    variants={{
                        hidden: { opacity: 0, x: -60 },
                        visible: { opacity: 1, x: 0 }
                    }}
                >
                    <ActionButton
                        title="Contact Us"
                        children="Schedule now"
                        value={SelectedPage.ContactUs}
                        setSelectedPage={setSelectedPage}
                    />
                    <img src={Dagger} className="rotate-45 relative -top-2 flex-[0.44] min-w-[110px] max-w-[200px]" alt="Dagger graphic" />
                </motion.div>
            </div>
        </motion.div>
    </motion.section>
}