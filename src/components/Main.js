import React,{useRef}from 'react'
import { Link } from 'react-router-dom'
import '../styles/Main.css'
export default function Main(){
    const inputRef=useRef(null)
    return (
        <div className='container'>
            <h1 className='title text-light'>Quiz Application</h1>
               <ol>
                   <li>You will be asked 10 Questions one after another</li>
                   <li>10 points is awarded for the correct answer</li>
                   <li>Each question has three options.You can choose only one option</li>
                   <li>You can review and change answer before the Quiz finish</li>
                   <li>The result will be declared at the end of the Quiz</li>
                </ol>   
                <form id="form">
                <label htmlFor="username"></label>
                    <input ref={inputRef} className='userid' type="text" placeholder='Write your Username'/>
                
                </form>
                <div className='start'>
                    <Link className='btn' to={'quiz'}>START QUIZ</Link>
                </div>
        </div>
    )
}