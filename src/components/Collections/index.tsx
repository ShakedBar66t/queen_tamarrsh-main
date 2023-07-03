
// * Components
import CollectionCard from './CollectionCard'

// * Modules
import { motion } from 'framer-motion'

// * Types
import { SelectedPage, Collection } from '@/shared/types'

// * SVGs
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

export default function Collections({ setSelectedPage }: Props) {

    const collections: Array<Collection> = [
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
        id={SelectedPage.Collections}
        className="card"
        onViewportEnter={() => { setSelectedPage(SelectedPage.Collections) }}
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
                {collections.map((collection, idx) => (
                    <CollectionCard
                        key={idx}
                        collection={collection}
                        column={idx === collections.length - 1 ? 'col-span-3' : ''}
                    />
                ))}
            </ul>

        </motion.div>
    </motion.section>
}