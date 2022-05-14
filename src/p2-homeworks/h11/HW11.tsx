import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'

function HW11() {
    const [value1, setValue1] = useState(0)
    const [value2, setValue2] = useState(100)

    const onChange = (value: number) => {
        setValue1(value)
    }

    const onChangeRange = (value: [number, number]) => {
        setValue1(value[0])
        setValue2(value[1])
    }

    return (
        <div style={{height: '100px'}}>
            <hr/>
            {/*should work (должно работать)*/}
            <div>
                <SuperRange
                    value={value1}
                    onChangeRange={onChange}
                />
            </div>

            <div>
                <SuperDoubleRange
                    value={[value1, value2]}
                    onChangeRange={onChangeRange}
                />
            </div>
        </div>
    )
}

export default HW11
