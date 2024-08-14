'use client'
import { useFormState } from 'react-dom'
import { createUser } from '@/actions/login' 
 
const initialState = {
  message: '',
}
 
const Signup = () => {
  const [state, formAction] = useFormState(createUser, initialState)
  
 
  return (
    <form action={formAction}>
      <label htmlFor="email">Email</label>
      <input type="text" id="email" name="email" required />
      <button>Sign up</button>
      <p>
        {state?.message}
      </p>
    </form>
  )
}

export default Signup