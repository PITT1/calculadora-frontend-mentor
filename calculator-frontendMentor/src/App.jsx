import './App.css'
import KeyNum from './components/KeyNum'
import { useEffect, useState } from 'react'

function App() {
  const [display, setDisplay] = useState('');
  const [calcBus, setCalcBus] = useState('');
  const [theme, setTheme] = useState('selector-theme-1');


  useEffect(() => {
    if (theme) {
      setTheme(theme);
      console.log(theme);
    }
  }, [theme]);

  const handleClick = (number) => {
    setDisplay(prevValue => prevValue + number);
  };

  const delFunc = () => {
    setDisplay(display.slice(0, -1));
  }

  const resetFunc = () => {
    setDisplay('');
    setCalcBus('');
  }

  const addFunc = () => {
    if (display) {
      setCalcBus(prevCalcBus => prevCalcBus + display + '+');
      setDisplay('');
    }
  }

  const subtractFunc = () => {
    if (display) {
      setCalcBus(prevCalcBus => prevCalcBus + display + '-');
      setDisplay('');
    }
  }

  const splitFunc = () => {
    if (display) {
      setCalcBus(prevCalcBus => prevCalcBus + display + '/');
      setDisplay('');
    }
  }

  const multiplyFunc = () => {
    if (display) {
      setCalcBus(prevCalcBus => prevCalcBus + display + '*');
      setDisplay('');
    }
  }

  const resultFunc = () => {
    try {
      const result = eval(calcBus + display);
      setDisplay(result.toString());
      setCalcBus('');
    } catch (error) {
      console.log(error);
      setDisplay('Error');
    }
  }

  const setTheme1 = () => {
    setTheme('selector-theme-1');
  }

  const setTheme2 = () => {
    setTheme('selector-theme-2');
  }

  const setTheme3 = () => {
    setTheme('selector-theme-3');
  }

  return (
    <>
    <div className={`container-app ${theme}`}>
      <main className='container'>
        <div className='head'>
          <h1>calc</h1>
          <div className='theme'>
            <h2>THEME</h2>
            <button className='theme-btn theme-1-btn' onClick={setTheme1}></button>
            <button className='theme-btn theme-2-btn' onClick={setTheme2}></button>
            <button className='theme-btn theme-3-btn' onClick={setTheme3}></button>
            <div className={`selector ${theme}`}></div>
          </div>
        </div>
        <div className='display'>
          <h2>
            {display}
          </h2>
        </div>
        <div className='key-pad'>
          <KeyNum number='7' onClick={handleClick}/>
          <KeyNum number='8' onClick={handleClick}/>
          <KeyNum number='9' onClick={handleClick}/>
          <button className={`del-btn`} onClick={delFunc}>DEL</button>
          <KeyNum number='4' onClick={handleClick}/>
          <KeyNum number='5' onClick={handleClick}/>
          <KeyNum number='6' onClick={handleClick}/>
          <button className={`key-num`} onClick={addFunc}>+</button>
          <KeyNum number='1' onClick={handleClick}/>
          <KeyNum number='2' onClick={handleClick}/>
          <KeyNum number='3' onClick={handleClick}/>
          <button className={`key-num`} onClick={subtractFunc}>-</button>
          <KeyNum number='.' onClick={handleClick}/>
          <KeyNum number='0' onClick={handleClick}/>
          <button className={`key-num`} onClick={splitFunc}>/</button>
          <button className={`key-num`} onClick={multiplyFunc}>x</button>
          <button className={`del-btn reset-grid`} onClick={resetFunc}>RESET</button>
          <button className='equals-btn equals-grid' onClick={resultFunc}>=</button>
        </div>
      </main>
      </div>
    </>
  )
}

export default App