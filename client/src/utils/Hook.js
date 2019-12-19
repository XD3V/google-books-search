import {useEffect, useState} from "react"

const useHook = (vaule) => {
    const [useHookVaule, setHookVaule] = useState(vaule);

    useEffect(() => {
            setHookVaule(vaule);
        },[vaule])
    return useHook;

}
export default useHook;