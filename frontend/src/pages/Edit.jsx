import { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate , useParams } from "react-router-dom"

const EditData = () => {
    const navigate = useNavigate()
    let {id} = useParams()
    const [no_ktp , setNo_ktp ] = useState('')
    const [name, setName ] = useState('')
    const [date_of_birth , setdate_of_birth ] = useState('')
    const [email, setEmail ] = useState('')
    const [phone, setPhone ] = useState('')
    const [description , setDescription ] = useState('')
    const baseURl = 'http://localhost:8000/api/a1'

    const getData = async (id) => {
        try{

            axios.get(`${baseURl}/register/${id}`)
            .then( response => {
                console.log(response.data)
                setNo_ktp(response.data.no_ktp)
                setName(response.data.name)
                setdate_of_birth(response.data.date_of_birth)
                setEmail(response.data.email)
                setPhone(response.data.phone)
                setDescription(response.data.description)

            })

        }catch(err){
            console.log(err)
        }
    }

    const action = (e) => {
        e.preventDefault()

        try{
            axios.put(`${baseURl}/register/${id}`,{
            no_ktp,
            name,
            date_of_birth,
            email,
            phone,
            description,
        },{
            headers :'Application/Json'
        })
        .then(res => {
            console.log(res)
            navigate('/dashboard')
        })

    }catch(err) {
        console.log(err)
    }
        
    }

    useEffect(() => {

        getData(id)

    }, [])
    

  return (
    <div>
    <section className=" w-screen bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                  <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                      add register
                  </h1>
                  <form onSubmit={action} className="space-y-4 md:space-y-6" action="#">
                      <div>
                          <label htmlFor="no_ktp" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your no ktp</label>
                          <input value={no_ktp} onChange={(e) => {setNo_ktp(e.target.value)}} type="text" name="no_ktp" id="no_ktp" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                      </div>
                      <div>
                          <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your name</label>
                          <input value={name} onChange={(e) => {setName(e.target.value)}} type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                      </div>
                      <div>
                          <label htmlFor="date_of_birth" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your date of birth</label>
                          <input value={date_of_birth} onChange={(e) => {setdate_of_birth(e.target.value)}} type="text" name="date_of_birth" id="date_of_birth" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                      </div>
                      <div>
                          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                          <input value={email} onChange={(e) => {setEmail(e.target.value)}} type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                      </div>
                      <div>
                          <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your phone</label>
                          <input value={phone} onChange={(e) => {setPhone(e.target.value)}} type="text" name="phone" id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                      </div>
                      <div>
                          <label htmlFor="descriptions" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your description</label>
                          <input value={description} onChange={(e) => {setDescription(e.target.value)}} type="text" name="descriptions" id="descriptions" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                      </div>
                      <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
                      <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                          Don’t have an account yet? <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</a>
                      </p>
                  </form>
              </div>
          </div>
      </div>
      </section>
  </div>
  )
}

export default EditData
