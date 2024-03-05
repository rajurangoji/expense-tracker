import React, { useEffect, useState } from 'react'

function Income(props) {
    const { mainData } = props;
    console.log(mainData)
    const [income, setIncome] = useState();

    useEffect(() => {
        let pos = 0;
        for (let i = 0; i < mainData.length; i++) {
            if (mainData[i].amount > 0) {
                pos += parseFloat(mainData[i].amount);
            }

        }
        console.log(pos)
        setIncome(pos)

    }, [mainData])

    return (
        <div className='container-income-expenduture'>
            <h1>Income</h1>
            <h1>{income}</h1>

        </div>
    )
}

export default Income
