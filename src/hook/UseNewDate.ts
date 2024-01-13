import { useEffect, useState } from "react";

export const UseNewDate = () => {
    const [date, setDate] = useState('')

    useEffect(() => {

        setInterval(() => {
            const today = new Date();
            const output = today.toLocaleString();
            setDate(output)
        }, 1000)

    }, [date])

    return {
        date
    }
}
