import React, {ChangeEvent} from 'react'
import s from './SuperDoubleRange.module.css'

type SuperDoubleRangePropsType = {
    onChangeRange?: (value: [number, number]) => void
    value?: [number, number]
    // min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, value,
        // min, max, step, disable, ...
    }
) => {

    if(!value) value = [0, 100]

    const setRange1 = (e: ChangeEvent<HTMLInputElement>) => {
        if(value && onChangeRange && +e.currentTarget.value <= value[1]) onChangeRange([+e.currentTarget.value, value[1]])
    }

    const setRange2 = (e: ChangeEvent<HTMLInputElement>) => {
        if(value && onChangeRange && +e.currentTarget.value >= value[0]) onChangeRange([value[0], +e.currentTarget.value])
    }

    return (
        <div className={s.doubleInputBox}>
            <span className={s.minValue}>{value[0]}</span>
            <input onChange={setRange1} value={value[0]} min={0} max={100} step={1} type="range"/>
            <input onChange={setRange2} value={value[1]} min={0} max={100} step={1} type="range"/>
            <div className={s.sliderTrack}>{}</div>
            <span className={s.maxValue}>{value[1]}</span>
        </div>
    )
}

export default SuperDoubleRange
