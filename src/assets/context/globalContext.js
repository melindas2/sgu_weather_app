import React, {createContext, useCallback, useState} from "react";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
    const [state, setState] = useState({});

    const updateState = useCallback((updatedState) => {
        setState((prevState) => ({

        }));
    }, []);

    return (
        <GlobalContext.Provider value = {{state, updateState}}>
            {children}
        </GlobalContext.Provider>
    );
};