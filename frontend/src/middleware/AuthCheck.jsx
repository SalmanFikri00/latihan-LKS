import { useContext ,useEffect } from 'react'
import AuthUser from '../UserContext'
import { useNavigate } from 'react-router-dom'



const AuthCheck = ({Element , loading}) => {

    const navigate = useNavigate()
    const user = useContext(AuthUser)

    useEffect(() => {
        if(!loading && !user.name){
            navigate('/login')
        }
    }, [loading])

  return (
    <>
        {
            loading?  '' :  user.name? <Element /> : 'not log in'
         }
    </>
  )
}

export default AuthCheck
