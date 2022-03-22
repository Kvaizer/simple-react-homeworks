import React, {ChangeEvent} from 'react'
import s from './Greeting.module.css'
import SuperInputText from '../h4/common/c1-SuperInputText/SuperInputText';
import SuperButton from '../h4/common/c2-SuperButton/SuperButton';

type GreetingPropsType = {
    name: string
    setNameCallback: (name: string) => void
    addUser: () => void
    error: string | undefined
    totalUsers: number
    setError: (error: string | undefined) => void
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers, setError}
) => {

    const setNameCallbackHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setNameCallback(event.currentTarget.value);
    }

    const addUserHandler = () => {
        addUser();
    }

    const onKeyPressHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === ' ') {
            setError('Unacceptable name');
            event.currentTarget.value = '';
        } else setError(undefined);
    }

    const inputClass = (error === undefined) ? '' : s.error;

    return (
        <div className={s.greetingContainer}>
            <SuperInputText value={name}
                            onChange={setNameCallbackHandler}
                            className={inputClass}
                            onKeyPress={onKeyPressHandler}
                            error={error}/>
            <SuperButton onClick={addUserHandler}>add</SuperButton>
            <div className={s.counter}><div className={s.counterText}>{totalUsers}</div></div>
        </div>
    )
}

export default Greeting
