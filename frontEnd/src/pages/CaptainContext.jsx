import React, { createContext, useState } from 'react';

export const CaptainDataContext = createContext();


export function CaptainDataProvider({ children }) {
    const [captainData, setCaptainData] = useState(null);
    

    return (
        <CaptainDataContext.Provider value={{ captainData, setCaptainData }}>
            {children}
        </CaptainDataContext.Provider>
    );
}