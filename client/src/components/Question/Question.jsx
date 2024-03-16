import React, { useContext, useEffect, useState } from "react";
import './Questions.scss'
import { QuestionContext } from "../../context/QuestionContext";


const Questions = () => {
    const [body, setBody] = useState("");
    const{subject,setSubject,time,setTime,topic,setTopic,number,setNumber} =useContext(QuestionContext);
    let [cnt, setCnt] = useState(0);
    const [selectedOption, setSelectedOption] = useState("");
    const [timer, setTimer] = useState(0);
    const minutes = Math.floor(time / 60);
    const seconds = timer % 60;
    let data = [{

        body: "ABCD"


    },
    {
        body: "bull"
    },
    {
        body: "Swastik" 
        
    },
    {
        body: "Somnath"
    }];



    useEffect(() => {

        const content = () => {
      

        
         
          

            setCnt(0);

            setBody(data[cnt].body);
            console.log(cnt);


        }

   



        return () => {

            content();


        }
    }, []);

    useEffect(() => {
        if (timer < time) { // 15 minutes = 900 seconds
          const interval = setInterval(() => {
            setTimer(prevTime => prevTime + 1); // Increment time by 1 second
          }, 1000);
          
          return () => clearInterval(interval);
        }
      }, [timer]);


    const handleSubmit = async (e) => {
        e.preventDefault()


        setCnt(cnt + 1)

        setBody(data[cnt].body)
    }

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };
    return (


        <div className="body">

     

            <div className="question">
                
            <div className="time"><p>{`${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`}</p></div>

                <form onSubmit={handleSubmit}>
                    <span className="header">
                        <h2> {subject} Question {cnt}</h2>
                    </span>

                    <div className="questionbody" value={body} >
                        {body}
                    </div>

                    <div className="options">

                        <label>
                            <input
                                type="radio"
                                value="option1"
                                checked={selectedOption === 'option1'}
                                onChange={handleOptionChange}


                            />
                            Option 1
                        </label>
                        <label>
                            <input
                                type="radio"
                                value="option2"
                                checked={selectedOption === 'option2'}
                                onChange={handleOptionChange}


                            />
                            Option 1
                        </label>
                        <label>
                            <input
                                type="radio"
                                value="option3"
                                checked={selectedOption === 'option3'}
                                onChange={handleOptionChange}


                            />
                            Option 1
                        </label>
                        <label>
                            <input
                                type="radio"
                                value="option4"
                                checked={selectedOption === 'option4'}
                                onChange={handleOptionChange}

                            />
                            Option 1
                        </label>
                    </div>

                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>



    )
}

export default Questions;