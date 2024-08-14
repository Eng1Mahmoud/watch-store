'use server'
  
export async function createUser(prevState: any, formData: FormData) {
  
    const values = Object.fromEntries(formData.entries())
    if(false){
        return {message: `User ${values.email}  already exists `}
    }
    else{
        return {message: `User ${values.email}  created successfully `} 
    }

}