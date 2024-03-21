import { useEffect, useState } from "react";

export function useLocalStorage(key: string) {
    const localStorage = typeof window!== "undefined"? window.localStorage : undefined;
if(localStorage) {
    const [value, setValue] = useState(() => {
        return JSON.parse(localStorage.getItem(key) as string);
    }); 

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    },[value,key])

    return [value, setValue];
}


}