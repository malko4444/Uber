import React, { createContext, useState } from 'react'

export const UserDataContext = createContext()

export default function UserContext({ children }) {
    const [userData, setUserData] = useState({
        fullname: {
            firstName: '',
            lastName: ''
        },
        email: '',
        password: ''
    })
    // const user = ' shehzad  '
    return (
        <div>
            <UserDataContext.Provider value={{ userData, setUserData }}>
                {children}
            </UserDataContext.Provider>
        </div>
    )
}
