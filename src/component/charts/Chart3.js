import {LineChart, Line, XAxis, YAxis, ReferenceLine, CartesianGrid} from "recharts";
import {useState} from "react";

const data = [];

const rand = 300;
for (let i = 0; i < 7; i++) {
    let d = {
        year: 2000 + i,
        value: Math.random() * (rand + 50) + 100
    };

    data.push(d);
}

const CustomLabel = (props) => {
    return (
        <g>
            <rect
                x={props.viewBox.x}
                y={props.viewBox.y}
                fill="#aaa"
                width={100}
                height={100}
            />
            <text x={props.viewBox.x} y={props.viewBox.y} fill="#111" dy={20} dx={30}>
                Label
            </text>
        </g>
    );
};

const Chart3 = () => {
    const [usageStatus, setUsageStatus] = useState(data);

    return (
        <LineChart
            width={500}
            height={300}
            data={data}
            margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
        >
            <Line type="monotone" dataKey="value" stroke="#8884d8" dot={false} />
            <XAxis dataKey="year" />
            <YAxis />
            <CartesianGrid strokeDasharray="2" horizontal={false} vertical={false} />
            <ReferenceLine x={2004} label={CustomLabel} />
        </LineChart>
    );
};

export default Chart3;