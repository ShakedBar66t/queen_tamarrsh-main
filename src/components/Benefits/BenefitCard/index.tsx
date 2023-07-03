// * Modules
import { motion } from 'framer-motion'

// * Types
import { Benefit } from "@/shared/types"

type Props = {
    benefit: Benefit
    column: string
}

const cardStyles = 'flex flex-col rounded-lg items-center py-12 px-8'

export default function BenefitCard({ benefit, column }: Props) {
    return (
        <motion.li
            key={benefit.title}
            className={`${cardStyles} ${column}`}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.3 }}
            viewport={{ once: true, amount: 0.5 }}
            variants={{
                hidden: { opacity: 0, x: -60 },
                visible: { opacity: 1, x: 0 }
            }}
        >
            <img src={benefit.img} width={300} alt={benefit.title} />
            <h3 className="font-extrabold my-4 text-xl text-red-100" dir='rtl'>{benefit.title}</h3>
            <p className="text-md text-center" dir='rtl'>{benefit.description}</p>
            <h4 className='font-bold text-green-600 pt-[10px]'>{benefit.price}₪</h4>
        </motion.li>
    );
}
