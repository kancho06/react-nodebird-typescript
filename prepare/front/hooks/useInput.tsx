import { useState, useCallback, ChangeEventHandler } from "react";

export default (initialValue = ""): [string, ChangeEventHandler] => {
    const [value, setValue] = useState(initialValue);
    const handler = useCallback((e: any) => {
        setValue(e.target.value);
    }, []);
    return [value, handler];
};
