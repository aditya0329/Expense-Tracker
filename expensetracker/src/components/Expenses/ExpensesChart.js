import React from 'react';
import Chart from '../Chart/Chart';

const ExpensesChart = props => {

    const chartDataPoints = [
        {label: 'Jan' , value: 0},
        {label: 'Feb' , value: 0},
        {label: 'Mar' , value: 0},
        {label: 'Apr' , value: 0},
        {label: 'May' , value: 0},
        {label: 'Jun' , value: 0},
        {label: 'Jul' , value: 0},
        {label: 'Aug' , value: 0},
        {label: 'Sept' ,value: 0},
        {label: 'Oct' , value: 0},
        {label: 'Nov' , value: 0},
        {label: 'Dec' , value: 0},
    ]
    // we don't wanna have 0 for every dataPoint. Instead, now we have to look at filteredExpenses
    // and make sure we go through all the expenses for a selected year and then we sum up the expenses
    // for all the different months and we assign them here to our dataPoints

    // Expect to get a list of expenses
    for( const expense of props.expenses){
        const expenseMonth = expense.date.getMonth(); // starting at 0 so January as 0
        chartDataPoints[expenseMonth].value += expense.amount;
    }
    return <Chart dataPoints = {chartDataPoints}/>
}

export default ExpensesChart;