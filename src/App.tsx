import React, { useState, useEffect} from 'react'
import CN from './ClassNames'
import Counter from './Counter'

export default function App(props: Props) {
    const [count, setCount] = useState(0)

    useEffect(() => {
        const id = setInterval(() => {
            setCount(c => c > 99 ? 0 : c + 1)
        }, 1000)

        return () => clearInterval(id)
    }, [])

    return (
        <Counter className={CN.of(props.className)} count={count} />
    )
}

type Props = {
    className?: string,
}
