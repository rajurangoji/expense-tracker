import React, { useEffect } from 'react'

function TransactionHistory(props) {
    const { mainData } = props;
    console.log(mainData)
    useEffect(() => {

        // console.log(`props ${JSON.stringify(mainData)}`)
    }, [mainData])
    return (
        <div className='transcation-history'>
            <h1>Transcation History...</h1>
            {mainData.map((item) => {
                return <div className='each-trans' style={{ borderRight: item.amount > 0 ? '5px solid green' : '5px solid red' }}>
                    <p>{item.lable}</p>
                    <p>{item.amount}</p>
                </div>
            })}
        </div>
    )
}

export default TransactionHistory
