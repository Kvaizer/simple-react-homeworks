import React, {InputHTMLAttributes, DetailedHTMLProps} from 'react'
import s from './SuperRadio.module.css'
type DefaultRadioPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperRadioPropsType = DefaultRadioPropsType & {
    options?: any[]
    onChangeOption: (option: any) => void
}

const SuperRadio: React.FC<SuperRadioPropsType> = (
    {
        type, name,
        options, value,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    const mappedOptions: any[] = options ? options.map((o, i) => (
        <label className={s.radio} key={i}>
            <input
                className={s.radio}
                type={'radio'}
                onChange={() => onChangeOption(o)}
                checked={o === value}
            /><span></span>
            {o}
        </label>
    )) : []

    return (
        <>
            {mappedOptions}
        </>
    )
}

export default SuperRadio
