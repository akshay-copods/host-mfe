import React from 'react';
//@ts-ignore
const CounterAppOne = React.lazy(() => import('remote/CounterOne'));


function App() {
  return (
    <div className="App">
      <h1 className='text-red-600'>HEllo</h1>
      <CounterAppOne />
    </div>
  );
}

export default App;
