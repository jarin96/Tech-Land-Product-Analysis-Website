import React from 'react';
import { Area, Bar, BarChart, CartesianGrid, ComposedChart, Funnel, FunnelChart, LabelList, Legend, Line, LineChart, Pie, PieChart, Tooltip, XAxis, YAxis } from 'recharts';
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
            <div>
                <h1 className='chart-color'>Investment VS Revenue</h1>
                <h1 className='chart-color'>MONTH WISE SELL</h1>
                <div className='chart'>
                    <ComposedChart width={630} height={350} data={data}>
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <CartesianGrid stroke="#f5f5f5" />
                        <Area type="monotone" dataKey="investment" fill="#8884d8" stroke="#8884d8" />
                        <Bar dataKey="investment" barSize={20} fill="#413ea0" />
                        <Line type="monotone" dataKey="revenue" stroke="#ff7300" />
                    </ComposedChart>
                    <BarChart width={500} height={350} data={data}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="revenue" fill="#8884d8" />
                        <Bar dataKey="investment" fill="#82ca9d" />
                    </BarChart>
                </div>
            </div>
        </div>

    );
};

export default Dashboard;