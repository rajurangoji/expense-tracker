import React from 'react'
import { useState } from 'react'

function Input() {
    const [mainData, setMainData] = useState([])
    const [inputValues, setInputValues] = useState({
        lable: '',
        amount: ''
    })
    const handleInputs = (e) => {
        setInputValues({ ...inputValues, [e.target.name]: e.target.value });
        const updatedMainData = { ...inputValues }
        updatedMainData.push({ [e.target.name]: e.target.value })
        setMainData(updatedMainData)
    };
    return (
        <div className='inputs-container'>
            <input type="text" name="lable" id="lable" onChange={handleInputs} value={inputValues.lable} />
            <input type="number" name="amount" id="amount" onChange={handleInputs} value={inputValues.amount} />
            <button className='btn-trans' onClick={(e) => {
                // console.log(inputValues)
                console.log(mainData)
            }}>Add Transcation</button>

        </div>
    )
}

export default Input
