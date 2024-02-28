import React, { useCallback, useState, useEffect } from "react";

function useStorage(key: string, defaultValue: any) {
    
    const [value, setValue] = useState<any>(() => {
        const jsonValue = window.localStorage.getItem(key)

        if (jsonValue != null) return JSON.parse(jsonValue)

        if (typeof defaultValue === "function") return defaultValue()
        else return defaultValue

    })

    useEffect(() => {
        if (value === undefined) return window.localStorage.removeItem(key)
        window.localStorage.setItem(key, JSON.stringify(value))
    }, [key, value, window.localStorage])

    const remove = useCallback(() => {
        setValue(undefined)
    }, [])

    const reset = useCallback(() => {
        setValue(defaultValue)
    }, [])

    return [value, setValue, remove, reset]

}

export default useStorage