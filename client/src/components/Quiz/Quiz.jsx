import React from 'react'
import './quiz.css'

function Inputs({subject, options = []}) {
  return (
        <form action="">
            <div className='inputWraper'>
                <label htmlFor={subject} className='w-full'>{subject}</label>
                <select name={subject} id="subject" className='ipts'>
                    {
                      options.map((option) => {
                        return(
                          <option value={option}>{option}</option>
                        )
                      })
                    }
                </select>
            </div>
        </form>
  )
}

function Quiz() {
  return (
    
    <div className='wraper'>
        <Inputs subject={"Subject"} options={["Physics", "Maths", "Chemistry", "Biology"]} />
        <Inputs subject={"Topics"} options={[]} />
        <Inputs subject={"Time-limit"} options={['5 min', '10 min', "15 min" ]} />
        <Inputs subject={"No. of Question"} />
    </div>
    
  )
}

export default Quiz