import React from 'react'
import {useNavigate} from 'react-router-dom'
const FailurePage = () => {
    const history=useNavigate()
    const handleAddtoHome=()=>{
      history('/')
    }
  return (<>
    <div  className={styles.container} >
        <img className={styles.img} style={{marginLeft:'25%',marginTop:'5%'}} src='https://seriable.com/wp-content/uploads/2021/03/Network-Failures.jpg'/>
    </div>
    <div className={styles.container}>
        <button onClick={()=>handleAddtoHome()}>Back To Home</button>
    </div>
    </>
  )
}


const styles={
    container:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        margin:'100px auto'
    },
    img:{
        margin:'100px auto'
    }
}

export default FailurePage
