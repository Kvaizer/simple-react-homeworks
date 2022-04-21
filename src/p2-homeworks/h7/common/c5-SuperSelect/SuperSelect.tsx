import React, {SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent} from 'react'
import s from './SuperSelect.module.css'
type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type SuperSelectPropsType = DefaultSelectPropsType & {
    options?: string[]
    onChangeOption?: (option: any) => void
    value: string
}

const SuperSelect: React.FC<SuperSelectPropsType> = (
    {
        options,
        onChange, onChangeOption, value,
        ...restProps
    }
) => {
    const mappedOptions: any[] = options ? options.map((item, index) => {
        return <option key={index}>{item}</option>
    }) : []

    const onChangeCallback = onChangeOption ? (e: ChangeEvent<HTMLSelectElement>) => {
        console.dir(e.currentTarget)
       onChangeOption(e.currentTarget.value)
    } : undefined

    return (
        <select className={s.select} onChange={onChangeCallback} {...restProps} value={value}>
            {mappedOptions}
        </select>
    )
}

export default SuperSelect
