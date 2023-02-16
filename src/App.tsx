//@ts-ignore
import React, { Suspense } from 'react';
//@ts-ignore
import useStore from "container/store";


//@ts-ignore
const CounterAppOne = React.lazy(() => import('remote/CounterOne'));
//@ts-ignore
const Pricing = React.lazy(() => import('pricing/Pricing'));

function App() {
  //@ts-ignore
  const { isLoggedIn, login, logout, user } = useStore();
  return (
    <div className="App bg-gray-200 h-screen flex flex-col">
      <div className='flex justify-between px-5 py-4'>
        <header className='flex gap-2'>
          {/* <img src='' alt='logo' width={24} height={24} /> */}
          <h2 className='text-base text-gray-800 font-bold'>Stealth-SaaS</h2>
        </header>
        {isLoggedIn ? <button className=' ' onClick={logout}>Logout</button> : <button className='' onClick={login}>login</button>}
      </div>
      <div className='bg-gray-400 h-full flex items-center justify-center gap-4'>
        {!isLoggedIn && <h1>Welcome to Stealth SaaS! Please Login</h1>}
        <Suspense fallback={<h1>Signing In</h1>}>
          {isLoggedIn && <div className='flex flex-col'>
            <h1>Welcome, {user.name}</h1>
            <div className='flex gap-4'>

              <CounterAppOne />
              <Pricing />
            </div>
          </div>
          }
        </Suspense>


      </div>
      {/* <h1>{count}</h1>
      <button onClick={increment}>+</button>
      <h1 className='text-red-600'>HEllo</h1>*/}
    </div>
  );
}

export default App;
