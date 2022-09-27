import React from 'react';
import Header from './components/Header/Header';
import Dashboard from './pages/Dashboard';
export default function App() {
  return (
    <div className='container'>
      <Header />
      <Dashboard />
    </div>
  )
}
