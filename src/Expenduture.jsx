import React, { useEffect, useState } from 'react'

function Expenduture(props) {
    const { mainData } = props;
    const [expenduture, setExpenduture] = useState()


    useEffect(() => {
        let neg = 0;
        for (let i = 0; i < mainData.length; i++) {
            if (mainData[i].amount < 0) {
                neg += parseFloat(mainData[i].amount)
            }

        }
        console.log(neg)
        setExpenduture(neg)

    }, [mainData])
    return (
        <div className='container-income-expenduture'>
            <h1>Expenduture</h1>
            <h1>{expenduture}</h1>
        </div>
    )
}

export default Expenduture
