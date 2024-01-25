
// * Hooks
import { useState, useEffect, useCallback, useRef } from 'react'
import emailjs from '@emailjs/browser';

// * Modules
import { formService } from '@/services/form.service'
import { utilService } from '@/services/util.service'

// * Types
import { Form as FormType } from "@/shared/types"


type Props = {
    setIsFormSubmitted: (value: boolean) => void
}

type IsPristineMap = {
    user_name: boolean
    user_email: boolean
    phone_number: boolean
}

export default function Form({ setIsFormSubmitted }: Props) {

    const elForm = useRef<HTMLFormElement>(null)
    const [form, setForm] = useState<FormType>(formService.getEmptyForm())
    const [isNameValid, setIsNameValid] = useState<boolean>(false)
    const [isEmailValid, setIsEmailValid] = useState<boolean>(false)
    const [isMobileValid, setIsMobileValid] = useState<boolean>(false)
    const [isPristineMap, setIsPristineMap] = useState<IsPristineMap>({
        user_name: true,
        user_email: true,
        phone_number: true
    })
    const [isSubmitDisabled, setIsSubmitDisabled] = useState<boolean>(true)

    useEffect(checkDisabled, [form])

    const debouncedSetIsEmailValid = useCallback(utilService.debounce(setIsEmailValid, 500), []);
    const debouncedSetIsMobileValid = useCallback(utilService.debounce(setIsMobileValid, 500), []);
    const debouncedSetIsPristineMap = useCallback(utilService.debounce(setIsPristineMap, 500), []);

    function onHandleChange({ target }: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const { name: field, value } = target
        setForm((prevForm) => ({ ...prevForm, [field]: value }))
        if (field === 'user_name') setIsNameValid(formService.validateName(value))
        else if (field === 'user_email') debouncedSetIsEmailValid(formService.validateEmail(value))
        else if (field === 'phone_number') debouncedSetIsMobileValid(formService.validateMobile(value))
        debouncedSetIsPristineMap((prevIsPristineMap: IsPristineMap) => ({ ...prevIsPristineMap, [field]: false }))
    }

    function checkDisabled() {
        if (!isNameValid) return setIsSubmitDisabled(true)
        if (!isEmailValid) return setIsSubmitDisabled(true)
        if (!isMobileValid) return setIsSubmitDisabled(true)
        setIsSubmitDisabled(false)
    }

    async function onHandleSubmit(ev: React.FormEvent<HTMLFormElement>) {
        ev.preventDefault()
        try {
            if (elForm?.current) {
                await emailjs.sendForm('service_mx36zw6', 'template_t6cbuom', elForm.current, 'W8Krkaao8KQiDax8l')
                setIsFormSubmitted(true)
            }
        } catch (err) {
            alert('Could not post request')
        }
    }

    const submitBtnStyles = 'mt-3 disabled:cursor-not-allowed font-bold uppercase text-2xl disabled:bg-gray-100 bg-primary-500 text-gray-20 hover:bg-red-100 w-[220px] p-2 rounded-lg'

    return <form
        ref={elForm}
        onSubmit={onHandleSubmit}
        className="self-stretch flex flex-1 flex-col items-center gap-4"
    >
        <div className="form-input-container">
            {(!isNameValid && !isPristineMap.user_name) && <p className="invalid-input-warning">*Required</p>}
            <input
                type="text"
                name="user_name"
                className="form-input"
                placeholder="name"
                value={form.user_name}
                onChange={onHandleChange}
            />
        </div>
        <div className="form-input-container">
            {(!isEmailValid && !isPristineMap.user_email) && <p className="invalid-input-warning">*Please make sure your email address is valid</p>}
            <input
                type="email"
                name="user_email"
                className="form-input"
                placeholder="email"
                value={form.user_email}
                onChange={onHandleChange}

            />
        </div>
        <div className="form-input-container">
            {(!isMobileValid && !isPristineMap.phone_number) && <p className="invalid-input-warning">*Please make sure your mobile is valid</p>}
            <input
                type="tel"
                name="phone_number"
                className="form-input"
                placeholder="mobile"
                value={form.phone_number}
                onChange={onHandleChange}

            />
        </div>
        <textarea
            name="message"
            className="form-input max-w-[520px]"
            value={form.message}
            rows={6}
            placeholder="message"
            onChange={onHandleChange}
        />
        <button
            type="submit"
            className={submitBtnStyles}
            disabled={isSubmitDisabled}
        >
            Submit
        </button>
    </form>
}