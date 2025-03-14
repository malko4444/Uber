import React, { createContext, useState } from 'react'

export const UserDataContext = createContext()

export default function UserContext({ children }) {
    const [userData, setUserData] = useState('')
    
    console.log("the user data in the context ",userData.user,userData.token);
    
    // const user = ' shehzad  '
    return (
        <div>
            <UserDataContext.Provider value={{ userData, setUserData }}>
                {children}
            </UserDataContext.Provider>
        </div>
    )
}
