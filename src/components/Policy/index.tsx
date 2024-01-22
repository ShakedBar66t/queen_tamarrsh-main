// *Modules
import { motion } from "framer-motion"

// *Types
import { SelectedPage } from "@/shared/types"

type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

export default function Policy({ setSelectedPage }: Props) {

    return <motion.section
        id={SelectedPage.Policy}
        onViewportEnter={() => { setSelectedPage(SelectedPage.Policy) }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.1 }}
        variants={{
            hidden: { opacity: 0, x: -60 },
            visible: { opacity: 1, x: 0 }
        }}
    >

        <div className="bg-[#1f1e1ef5] py-[20px]" dir="rtl">
            <h1 className="text-center text-gray-20 font-bold text-2xl mb-2 underline">הוראות טיפול</h1>
            <ul className="text-gray-20 text-right mx-6 list-disc">
                <li>
                    <span className="text-red-100">להמנע</span> ממגע עם מים, בשמים וחומרי ניקוי.
                </li>
                <hr className="border-none pt-3" />
                <li>
                    יש <span className="text-red-100">להסיר</span>  לפני פעילות ספורטיבית, מקלחת ושינה.
                </li>
                <hr className="border-none pt-3" />
                <li>
                    מומלץ <span className="text-red-100">לשמור</span> את התכשיטים באריזה מקורית או במקום יבש ללא לחות.
                </li>
            </ul>

            <h2 className="text-center font-bold text-2xl pt-[20px] underline text-gray-20">אחריות</h2>
            <div className="text-gray-20 text-right mx-6 list-disc" dir="rtl">
                התכשיטים נקנים עם אחריות של 3 חודשים מרגע הרכישה, ואין אפשרות להחזרה אלא לתיקונים. האחריות לשימוש סביר ואינה כוללת נזקים שנגרמו משימוש וטיפול לקויים. לא תינתן אחריות לאובדן או גניבה.

                תהליך התיקון יתבצע בסטודיו שלנו בחיפה או באמצעות שירות השליחויות שלנו.
            </div>

        </div>

    </motion.section>
}