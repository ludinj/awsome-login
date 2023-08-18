import { FiSearch } from 'react-icons/fi';
import {
  AiFillInstagram,
  AiFillTwitterCircle,
  AiFillGithub,
  AiTwotoneLock
} from 'react-icons/ai';
import { BiLogoFacebookCircle } from 'react-icons/bi';
import { HiMail } from 'react-icons/hi';
function App() {
  return (
    <div className='flex justify-center h-screen'>
      {/* BACKGROUND */}
      <div className='w-full h-full  absolute top-0 left-0 -z-10 bg-[url("/bg3.jpg")] bg-cover' />
      {/* NAVBAR */}
      <header className='fixed w-full px-2 h-14 flex justify-between items-center  py-5 z-10  text-white md:px-24'>
        <nav className='hidden text-2xl  items-center gap-5 font-bold md:flex'>
          <a href=''>Home</a>
          <a href=''>About</a>
          <a href=''>Service</a>
          <a href=''>Contact</a>
        </nav>
        <div className='flex rounded-md border-2 border-white items-center'>
          <input
            type='text'
            placeholder='Search...'
            className='bg-transparent text-xl  outline-none  pl-2 py-1 placeholder:text-white'
          />
          <FiSearch className='mr-2' size={20} />
        </div>
      </header>
      {/* MAIN CONTENT */}
      <main className='w-full  bg-red flex mt-14 items-center justify-center lg:px-20 xl:px-40 2xl:px-48 md:items-center '>
        <section className='flex px-2 flex-col-reverse w-full h-[80vh]  md:flex-row md:h-[60vh]'>
          {/* TEXT CONTAINER */}
          <div className='h-1/2 w-full px-4 text-white flex flex-col gap-4 justify-center  bg-black bg-opacity-10 backdrop-blur-sm md:px-10 md:h-full md:w-3/5 xl:w-2/3'>
            <h1 className='text-5xl mb-4 font-bold'>LJ Travels</h1>
            <h2 className='text-center text-5xl font-semibold'>Welcome</h2>
            <h3 className='text-center text-3xl'>To our Website</h3>
            <p className='text-center'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
              officia repudiandae enim sed eos
            </p>
            <div className='flex gap-2 text-white justify-center'>
              <AiFillInstagram size={30} className='cursor-pointer' />
              <BiLogoFacebookCircle size={30} className='cursor-pointer' />
              <AiFillTwitterCircle size={30} className='cursor-pointer' />
              <AiFillGithub size={30} className='cursor-pointer' />
            </div>
          </div>
          {/* FORM CONTAINER */}
          <form className='h-1/2 w-full px-4 bg-white bg-opacity-10 backdrop-blur-lg text-white text-lg flex flex-col  justify-center md:w-2/5  md:h-full xl:px-10  xl:w-1/3'>
            <h2 className='text-3xl  text-center font-bold mb-6'>Sign In</h2>
            <div className='w-full flex justify-between mb-6 border-b-2 border-white py-1'>
              <input
                type='text'
                placeholder='Email'
                className='bg-transparent border-none outline-none text-xl placeholder:text-white'
              />
              <HiMail size={25} />
            </div>
            <div className='w-full flex justify-between mb-6 border-b-2 border-white py-1'>
              <input
                type='password'
                placeholder='Password'
                className='bg-transparent border-none outline-none text-xl placeholder:text-white'
              />
              <AiTwotoneLock size={25} />
            </div>
            <div className='flex justify-between items-center mb-6'>
              <label htmlFor='checkbox' className='flex items-center'>
                <input type='checkbox' name='checkbox' />
                Remember me
              </label>
              <a href=''>Forgot Password?</a>
            </div>
            <div className='mb-6 w-full h-10 bg-red-500 flex items-center justify-center rounded-md text-white font-semibold  p-1 self-center'>
              <button>Sign in</button>
            </div>
            <div className='flex self-center'>
              <p>Don&apos;t have a account?</p>
              <a href='' className='font-bold'>
                Sign up
              </a>
            </div>
          </form>
        </section>
      </main>
    </div>
  );
}

export default App;
