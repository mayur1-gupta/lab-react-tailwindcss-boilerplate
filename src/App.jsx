import './App.css'
import image from './assets/Kalvium-Logo.png'
function App() {
 

  return (
    <>
      <div className='bg-[#bd3e54] flex justify-between text-white '>
        <div className='flex justify-evenly'>
          <h1 className='m-6 text-lg font-bold'>Kalvium</h1>
          <p className='m-7'>Contacts</p>
          <p className='m-7'>Courses</p>
          <p className='m-7'>About us</p>
        </div>
        <button className='m-7 border text-white border-white rounded px-2'>Login</button>
      </div>

      <button className='border bg-[#1d4ed8] border-Blue text-white px-2 py-1 rounded mx-20 my-5'>Button One</button>
     
     <div className=' border border-[#d1475f] p-5 mx-20 bg-[#fecdd3] text-[#be123c]'>
      <span className='font-bold'>Alert! </span><span>This is awesome!</span>
     </div>

      <div className='flex mx-auto my-10 border max-w-max p-10 shadow-lg '>
      <img src={image} alt='Kalvium' className='mx-6'/>
        <div>
          <h1 >Kalvium store</h1>
          <h1>You have a new course!</h1>
        </div>
      </div>
      <div className='border border-[#94a3b9] py-4 text-center bg-[#cbd5e2]'>
        <span>@ 2021 Copyright: </span><span className='font-bold'>Kalvium</span>
      </div>
    </>
  )
}

export default App