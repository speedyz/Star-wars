import React, {useState} from "react";
import ErrorMessage from "../components/ErrorMessage/ErrorMessage";

export const withErrorApi = (View: any) => {
    return (props: any) => {
        const [errorAPI, setErrorAPI] = useState<boolean>(false)

        return (
            <>
                {errorAPI ? <ErrorMessage/> :
                    (
                        <View setErrorAPI={setErrorAPI} {...props} />
                    )}
            </>
        )
    }
}