import React from 'react';
import { Line, LineChart, Pie, PieChart, XAxis, YAxis } from 'recharts';
import './Dashboard.css';

const Dashboard = () => {
    const data = [
        {
            "month": "Mar",
            "investment": 100000,
            "sell": 241,
            "revenue": 10401
        },
        {
            "month": "Apr",
            "investment": 200000,
            "sell": 423,
            "revenue": 24500
        },
        {
            "month": "May",
            "investment": 500000,
            "sell": 726,
            "revenue": 67010
        },
        {
            "month": "Jun",
            "investment": 500000,
            "sell": 529,
            "revenue": 40405
        },
        {
            "month": "Jul",
            "investment": 600000,
            "sell": 601,
            "revenue": 50900
        },
        {
            "month": "Aug",
            "investment": 700000,
            "sell": 670,
            "revenue": 61000
        }
    ]
    return (
        <div>
            <h1 className='chart-color'>MONTH WISE SELL</h1>
            <h1 className='chart-color'>Investment VS Revenue</h1>
            <div className='chart'>
                <LineChart width={400} height={400} data={data}>
                    <Line dataKey={'sell'}></Line>
                    <XAxis dataKey="month"></XAxis>
                    <YAxis></YAxis>
                </LineChart>
                <PieChart width={730} height={450}>
                    <Pie data={data} dataKey="investment" nameKey="month" cx="50%" cy="50%" outerRadius={50} fill="rgba(110, 51, 204, 0.945)" />
                    <Pie data={data} dataKey="revenue" nameKey="month" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="rgba(33, 190, 54, 0.945)" label />
                </PieChart>
            </div>
        </div>

    );
};

export default Dashboard;