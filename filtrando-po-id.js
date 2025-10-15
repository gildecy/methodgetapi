const getuserInfor = async ()=>{
    const response = await fetch('https://pool-api-alpha.vercel.app/api/v1/pool/')
    const data = await response.json()
    console.log(data)
   } 
   getuserInfor()
