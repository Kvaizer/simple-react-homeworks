import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton';

type AffairsPropsType = {
    data: Array<AffairType>
    setFilter: (filter: FilterType) => void
    deleteAffairCallback: (_id: number) => void
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((item: AffairType) => (
        <Affair
            key={item._id}
            affair={item}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ));

    const set = (filter: FilterType) => props.setFilter(filter);
    // const setAll = (filter: FilterType) => props.setFilter(filter);
    // const setHigh = (filter: FilterType) => props.setFilter(filter);
    // const setMiddle = (filter: FilterType) => props.setFilter(filter);
    // const setLow = (filter: FilterType) => props.setFilter(filter);

    return (
        <div>
            {mappedAffairs}
            <SuperButton onClick={() => set('all')}>All</SuperButton>
            <SuperButton onClick={() => set('high')}>High</SuperButton>
            <SuperButton onClick={() => set('middle')}>Middle</SuperButton>
            <SuperButton onClick={() => set('low')}>Low</SuperButton>
        </div>
    )
}

export default Affairs;
