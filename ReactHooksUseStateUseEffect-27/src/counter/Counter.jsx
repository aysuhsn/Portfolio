import React, {useState} from 'react'
import style from './Counter.module.css'

export default function Counter() {
    const [count, setCount] = useState(0)
    const [step, setStep] = useState(1)

    const changeInput = (e) => {
        if (e.target.value === '') {
            setStep(1)
        } else {
            setStep(Number(e.target.value))
        }
    }


  return (
    <div className={style.counter_container}>
        <div className={style.counter}>
            <h1>Counter</h1>
            <div className={style.counter_value}>{count}</div>
            <div className={style.counter_buttons}>
                <button className={style.minus} onClick={() => setCount(count>0 ? count-1 : 0)}>-</button>
                <button className={style.plus} onClick={() => setCount(count+1)}>+</button>
            </div>
            <input type="number" min={1} className={style.step_input} placeholder='Miqdar' onChange={changeInput}/>
            <div className={style.counter_btns}>
                <button onClick={() => setCount(count+step)} className= {style.plus_btn}>Artir</button>
                <button onClick={() => setCount(count-step)} className= {style.minus_btn}>Azalt</button>
            </div>
        </div>
    </div>
  )
}
