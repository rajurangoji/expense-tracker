import React, { useEffect } from 'react'
import { useState } from 'react'
import TransactionHistory from './TransactionHistory';

function Input() {
    const [mainData, setMainData] = useState([])
    const [inputValues, setInputValues] = useState({
        lable: '',
        amount: ''
    })
    const handleInputs = (e) => {
        setInputValues({ ...inputValues, [e.target.name]: e.target.value });

    };
    useEffect(() => {
        // console.log(JSON.stringify(mainData))
    }, [mainData]);
    return (
        <div className='container-input-history'>
            <div className='inputs-container'>
                <input type="text" name="lable" id="lable" onChange={handleInputs} value={inputValues.lable} />
                <input type="number" name="amount" id="amount" onChange={handleInputs} value={inputValues.amount} />
                <button className='btn-trans' onClick={() => {
                    setMainData([...mainData, inputValues]);
                }}>Add Transcation</button>
            </div>
            <div>
                <TransactionHistory mainData={mainData} />
            </div>

        </div>
    )
}

export default Input
