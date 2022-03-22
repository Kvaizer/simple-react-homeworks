import React, {useState} from 'react'
import Greeting from './Greeting'
import {UserType} from './HW3';

type GreetingContainerPropsType = {
    users: Array<UserType> // need to fix any
    addUserCallback: (name: string) => void // need to fix any
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = (
    {users, addUserCallback}
) => {
    const [name, setName] = useState<string>('')
    const [error, setError] = useState<string | undefined>(undefined)

    let totalUsers = users.length;

    const setNameCallback = (name: string) => {
        setName(name.trim());
        setError(error);
    }

    const addUser = () => {
        if (name.trim()) {
            setName('');
            alert(`Hello ${name}!`);
            addUserCallback(name);
        }
    }

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
            setError={setError}
        />
    )
}

export default GreetingContainer
