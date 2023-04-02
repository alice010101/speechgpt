import LanguageSelector from './LocaleSelector';
import AppearanceSelector from './AppearanceSelector';
import React from 'react';
import SpeechGPTIcon from './Icons/SpeechGPTIcon';




function Header() {
  return (
    <div className="flex flex-col sm:pt-20 sticky pt-16">
      <SpeechGPTIcon className="w-16 h-16 ml-2 sm:w-24 sm:h-24" />
      <div className="flex flex-row py-2 justify-between items-center w-full">
        <div className="text-2xl font-bold text-left bg-gray-100 text-gray-800">
          <span className="font-bold ml-2 decoration-purple-500 animate-text text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            ZK GPT Speech
          </span>
          <br/>
          <span style={{fontSize:"14px"}} className='ml-2 decoration-purple-500 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>Powered by zkSync</span>
        </div>
        <div>
        <button
          type="button"
          className="flex flex-row items-center space-x-2 rounded-lg px-4 py-2 font-medium text-white bg-gradient-to-tr from-indigo-500 to-purple-500 hover:bg-green-600 hover:from-indigo-600 hover:to-purple-600 transition-colors duration-300"
          onClick={(e) => {
            e.preventDefault();
            window.open('https://app.mute.io', '_blank');
            }}
        >
          
          BUY $ZKGPT
        </button>
        </div>
        <div>
          <LanguageSelector />
          {/*<AppearanceSelector/>*/}
        </div>
      </div>
    </div>
  );
}

export default Header;
