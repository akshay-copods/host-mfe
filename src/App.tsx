//@ts-ignore
import React, { Suspense } from "react";
//@ts-ignore
import useStore from "container/store";

//@ts-ignore
const CounterAppOne = React.lazy(() => import("remote/CounterOne"));
//@ts-ignore
const Pricing = React.lazy(() => import("pricing/Pricing"));

function App() {
  //@ts-ignore
  const { isLoggedIn, login, logout, user } = useStore();
  return (
    <div className=" bg-black h-screen flex flex-col">
      <div className="bg-gray-700 flex items-center justify-between px-5 py-4">
        <div className="text-base text-gray-300 font-bold">Stealth-SaaS</div>

        <div>
          {isLoggedIn ? (
            <button className="text-red-500" onClick={logout}>
              Logout
            </button>
          ) : (
            <button className="text-gray-300" onClick={login}>
              Login
            </button>
          )}
        </div>
      </div>
      <div className="bg-black text-gray-200 h-full flex items-center justify-center gap-4">
        {!isLoggedIn && <h1>Welcome to Stealth SaaS! Please Login</h1>}
        <Suspense fallback={<h1>Signing In</h1>}>
          {isLoggedIn && (
            <div className="flex flex-col gap-4">
              <h1>Welcome, {user.name}</h1>
              <div className="flex gap-4">
                <CounterAppOne />
                <Pricing />
              </div>
            </div>
          )}
        </Suspense>
      </div>
      {/* <h1>{count}</h1>
      <button onClick={increment}>+</button>
      <h1 className='text-red-600'>HEllo</h1>*/}
    </div>
  );
}

export default App;
