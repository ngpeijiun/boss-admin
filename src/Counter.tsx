import React from 'react'
import CN from './ClassNames'

export default function Counter(props: Props) {
    return (
        <div className={CN.of('Counter', props.className)}>
            <p className={CN.suffix('count', ['Counter', props.className])}>
                {props.count}
            </p>
        </div>
    )
}

type Props = {
    className?: string,
    count: number,
}
