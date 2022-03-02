import React from 'react'
import styles from './Message.module.css'

type MessagePropsType = {
    avatar: string
    name: string
    message: string
    time: string
}
function Message(props: MessagePropsType) {
    return (
        <div>
            <div className={styles.messageBox}>
                <div className={styles.avatarBox}>
                    <p><img src={props.avatar}/></p>
                </div>
                <div className={styles.message}>
                    <p className={styles.name}>{props.name}</p>
                    <div className={styles.messageText}>
                        <div>{props.message}</div>
                        <div className={styles.time}>{props.time}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Message
