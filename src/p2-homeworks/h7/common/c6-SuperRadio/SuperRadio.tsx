import React, {InputHTMLAttributes, DetailedHTMLProps} from 'react'
import s from './SuperRadio.module.css'
type DefaultRadioPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperRadioPropsType = DefaultRadioPropsType & {
    options?: any[]
    onChangeOption: (option: any) => void
    fontStyle?: string
}

const SuperRadio: React.FC<SuperRadioPropsType> = (
    {
        type, name,
        options, value,
        onChange, onChangeOption, fontStyle,
        ...restProps
    }
) => {
    let classNameForOption = '';
    if(fontStyle) {classNameForOption = fontStyle}
    const mappedOptions: any[] = options ? options.map((o, i) => (
        <div className={s.superRadioContainer}>
            <div>
        <label className={s.radio} key={i}>
                <input
                className={s.radio}
                type={'radio'}
                onChange={() => onChangeOption(o)}
                checked={o === value}
            /><span></span>
            <div className={classNameForOption}>{o}</div>
        </label>
        </div>
        </div>
    )) : []

    return (
        <>
            {mappedOptions}
        </>
    )
}

export default SuperRadio
