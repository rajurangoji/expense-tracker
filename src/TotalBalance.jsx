import React, { useEffect, useState } from 'react'

function TotalBalance(props) {
    const { mainData } = props;
    const [totalBalance, setTotalBalance] = useState(0);
    console.log(JSON.stringify(mainData))

    useEffect(() => {
        const sum = mainData.reduce((accumulator, currentValue) => accumulator + parseFloat(currentValue.amount), 0);
        setTotalBalance(sum);
    }, [mainData]);

    return (
        <div>
            <h1>Total Balance</h1>
            <h2>{totalBalance}</h2>
        </div>
    )
}

export default TotalBalance
