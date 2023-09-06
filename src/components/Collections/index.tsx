import { motion } from 'framer-motion'
import { SelectedPage } from '@/shared/types'
import Carousel from '../Carousel/Carousel'
import carouselData from '@/data/carouselData.json';

type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

export default function Collections({ setSelectedPage }: Props) {
    const carouselDataArray = Object.values(carouselData)

    return (
        <motion.section
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
                }}
            >
                <h3 className="header-title py-4 text-center">Choose your aesthetic</h3>
                <ul className="md:grid md:grid-cols-3 flex flex-col gap-8 mb-16 sm:grid sm:justify-center">
                    {carouselDataArray.map((carousel, index) => (
                        <Carousel
                            key={index}
                            data={carousel.slides}
                            description={carousel.description}
                            price={carousel.price}
                            name={carousel.name}
                            className={index === carouselDataArray.length - 1 ? 'md:col-start-2' : ''}
                        />
                    ))}
                    
                </ul>
            </motion.div>
        </motion.section>
    )
}
