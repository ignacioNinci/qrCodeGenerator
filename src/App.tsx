import { useState } from 'react'
import './App.css'
import './index.css';
import { MainInput } from './components/MainInput';
import { QrGenerator } from './components/QrGenerator';
import { Toaster } from 'react-hot-toast';

function App() {

  const [showQr, setShowQr] = useState<boolean>(false);
  const [url, setUrl] = useState<string>('');
  

  return (
    <>
      <Toaster />

      {
        showQr ? 
        ( <QrGenerator onBackMain={ () => setShowQr(false) } 
                       qrUrl={url} /> 
        ) :
        ( <MainInput onShowQr={() => setShowQr(true)} 
                     onUrlChange={ (newUrl: string) => setUrl(newUrl) }/> )
      }
    </>
  )
}

export default App
