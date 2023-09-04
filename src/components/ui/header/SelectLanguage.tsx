import { useState } from "react"
import NavDropdown from "./NavDropdown"

const SelectLanguage = () => {
    const [activeLanguage, setActiveLanguage] = useState('English')
    const dropDownArr = [
        {
            title: "English",
            onclick: () => setActiveLanguage('English')
        },
        {
            title: "Tamil",
            onclick: () => setActiveLanguage('Tamil')
        }
    ]
    return (
        <div className="relative group font-semibold flex">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802" />
            </svg>
            <span className="text-lg">{activeLanguage}</span>
            <svg className="h-4 mt-1 ml-1 group-hover:fill-yellow-500 transition-colors" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"/></svg>
            <NavDropdown dropDownArr={dropDownArr} active={activeLanguage}/>
        </div>
    )
}

export default SelectLanguage