import { createContext, useContext, useState } from 'react'

import {
  resetPasswords,
  signIn,
  registerUser,
  logUserOut,
} from './util/firebase.jsx'

const AppContext = createContext()

export const useGlobalContext = () => {
  return useContext(AppContext)
}

const AppProvider = ({ children }) => {
  // VARIOUS FORM STATES  REGISTRATION
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('')
  const [password, setPassword] = useState('')
  const [recoveryEmail, setRecoveryEmail] = useState('')

  const [plans, setPlans] = useState('Premium') // PROTECTED PLANS
  const [pagato, setPagato] = useState(false) // IL CLIENTE HA PAGATO ?

  const [swithAuth, setSwitchAuth] = useState(false) // SWITCH PROTECTED NOT PROTECTED
  const [showPop, setShowPop] = useState(false) // SHOW POPUP LEZIONI
  const [showPopLive, setShowPopLive] = useState(false) // SHOW POPUP LIVE

  const [isMonthlySubcribed, setIsMonthlySubscribed] = useState(false) // IS MONTHLY SUBSCRIBED
  const [isAnnualSubcribed, setIsAnnualSubscribed] = useState(true) // IS ANNUAL SUBSCRIBED

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isNotificheOpen, setIsNotificheOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isMaterial, isSetMateriale] = useState(false)
  const [isResponsiveMenuOpen, setIsResposnsiveMenuOpen] = useState(true)

  const [chat, setChat] = useState('')
  const [chatName, setChatName] = useState('')
  const [allChats, setAllChats] = useState([])

  const [id, setId] = useState('')

  // PASSWORD RECOVERY
  const resetPassword = () => {
    if (password !== '') {
      resetPasswords(password)
    }
  }

  const sendRecoveryEmail = () => {
    resetPassword(recoveryEmail)
    // redirect('/sent_recovery')
  }

  //REGISTER
  const register = async () => {
    registerUser(email, password)
  }

  // MODIFY PROFILE AND PASSWORD
  const modifyPassword = () => {
    console.log('Modify Password')
  }
  const modifyProfile = () => {
    console.log('Modify Profile')
  }

  return (
    <AppContext.Provider
      value={{
        isResponsiveMenuOpen,
        setIsResposnsiveMenuOpen,
        chatName,
        setChatName,
        id,
        setId,
        allChats,
        setAllChats,
        chat,
        setChat,
        lastName,
        setLastName,
        pagato,
        setPagato,
        plans,
        setPlans,
        email,
        setEmail,
        name,
        setName,
        password,
        setPassword,
        resetPassword,
        sendRecoveryEmail,
        register,
        logUserOut,
        isMenuOpen,
        setIsMenuOpen,
        setIsNotificheOpen,
        isNotificheOpen,
        modifyPassword,
        modifyProfile,
        isMonthlySubcribed,
        setIsMonthlySubscribed,
        isAnnualSubcribed,
        setIsAnnualSubscribed,
        isSearchOpen,
        setIsSearchOpen,
        isMaterial,
        isSetMateriale,
        recoveryEmail,
        setRecoveryEmail,
        swithAuth,
        setSwitchAuth,
        showPop,
        setShowPop,
        signIn,

        showPopLive,
        setShowPopLive,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export default AppProvider
