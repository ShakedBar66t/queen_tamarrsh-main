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
            <h1 className="text-center text-gray-20 font-bold text-2xl underline">הוראות טיפול</h1>
            <ul className="text-gray-20 text-right mx-6 list-disc">
                <li>
                    על מנת לשמור על התכשיטים והציפוי שלהם, אני <span className="text-red-100">ממליצה</span> שלא לחשוף את התכשיטים לחומרים כימיים
                    או תנאי סביבה קיצוניים וגם לא עם מים.
                </li>
                <hr className="border-none pt-3" />
                <li>
                    <span className="text-red-100">להסיר</span> לפני פעילות ספורטיבית, מקלחת ושינה.
                </li>
                <hr className="border-none pt-3" />
                <li>
                    <span className="text-red-100">לשמור</span> עליהם באריזתם המקורית או במקום יבש ולא במקום עם לחות.
                </li>
            </ul>

            <h2 className="text-center text-red-100 font-bold text-2xl pt-[20px] underline">אחריות</h2>
            <ul className="text-gray-20 text-right mx-6 list-disc" dir="rtl">
                <li>
                    כל התכשיטים מגיעים עם אחריות
                    <span className="text-red-100"> לשלושה חודשים </span>
                    מרגע הרכישה בהצגת הקבלה.
                </li>
                <hr className="border-none pt-3" />
                <li>
                    מאחר ומדובר בתכשיט בעיצוב אישי אין אפשרות החזרה <span className="text-red-100">למעט תיקונים</span>.
                </li>
                <hr className="border-none pt-3" />
                <li>
                    אחריות הינה לשימוש סביר <span className="text-red-100">ואינה כוללת</span> בלאי טבעי/נזקים שנגרמו משימוש וטיפול לקויים.
                </li>
                <hr className="border-none pt-3" />
                <li>
                    <span className="text-red-100">לא תינתן אחריות</span>  על תאונה/השחתה בזדון/תיקון מכל סוג שהוא שלא בוצע על ידי.
                </li>
                <hr className="border-none pt-3" />
                <li>
                    <span className="text-red-100">לא תינתן אחריות</span> על אובדן או גניבת המוצר.
                </li>
                <hr className="border-none pt-2" />
                <li>
                    <span className="text-red-100">לא תינתן אחריות</span> לטעויות שבוצעו בעת ההזמנה על ידי הלקוח (טעות במידה, טעות בכתובת המשלוח וכו')
                </li>
                <hr className="border-none pt-2" />
                <li>
                    בכל מקרה של פגם כאמור, אני מתחייבת לתקן את המוצר <span className="text-red-100">לפי מיטב שיקול דעתי</span>.
                    <hr className="border-none" />
                    היה והוחלט לאחר בדיקה כי הפגם במוצר אינו נכלל במסגרת האחריות והוא ניתן לתיקון, ניתן יהיה לתקנו בתשלום.
                </li>
                <hr className="border-none pt-2" />
                <li>
                    במידה והלקוח מעוניין לממש את תעודת האחריות שלו, <span className="text-red-100">הלקוח/ה צריך/ה להגיע</span> לסטודיו שלי שנמצא בחיפה או להשתמש בשירות השליחויות שלנו.
                </li>
            </ul>
        </div>

    </motion.section>
}