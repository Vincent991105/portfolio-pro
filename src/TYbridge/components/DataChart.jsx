import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Area,
  AreaChart // 雖然你目前沒有用 AreaChart，但保留著
} from 'recharts';

function DataChart({ data, dataKey = "value", color = "#e95097" }) {
  const lineColor = color;

  return (
    <div className='flex-1 w-full bg-[#2d3748] p-5 rounded'>
      <ResponsiveContainer width="100%" height="100%">
        {/*
        */}
        <LineChart data={data} margin={{ top: 0, right: 40, bottom: 0, left: -20 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#4a5568" vertical={false} />
          
          <XAxis 
            dataKey="time" 
            axisLine={false} 
            tickLine={false} 
            tick={{ fill: '#cbd5e0', fontSize: 12 }}
            dy={10}
          />
          
          <YAxis 
            axisLine={false} 
            tickLine={false} 
            tick={{ fill: '#cbd5e0', fontSize: 12 }}
          />

          <Tooltip 
            contentStyle={{ 
              backgroundColor: 'rgba(45, 55, 72, 0.9)',
              borderRadius: '8px', 
              border: '1px solid #4a5568',
              boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
              color: '#f7fafc'
            }} 
            itemStyle={{ color: '#f7fafc' }}
            labelStyle={{ color: '#a0aec0' }}
          />

          <Line
            type="monotone"
            dataKey={dataKey}
            stroke={lineColor}
            strokeWidth={3}
            dot={{ r: 4, fill: lineColor, strokeWidth: 2, stroke: '#fff' }}
            activeDot={{ r: 6, strokeWidth: 0 }}
            animationDuration={1500}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default DataChart;