import {
  Area,
  AreaChart,
  CartesianGrid,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { format } from 'date-fns';
import { useDarkMode } from '../../context/DarkModeContext';

function CustomToolTip({ active, payload }) {
  if (active && payload && payload.length) {
    const currentData = payload[0]?.payload;
    return (
      <div className='shado space-y-0.5 rounded bg-primary p-2 text-xs font-semibold uppercase text-secondary md:text-sm'>
        <p>{`Weight: ${currentData.weight}`} kg</p>
        <p>{`Reps: ${currentData.reps}`}</p>
        <p>{`Date: ${currentData.date}`}</p>
      </div>
    );
  }
  return null;
}

function ProgressChart({ data }) {
  const { isDarkMode } = useDarkMode();

  const chartColors = {
    areaFill: `${isDarkMode ? 'rgb(202, 153, 234)' : 'rgb(69, 16, 105)'}`,
    areaStroke: `${isDarkMode ? 'rgb(170, 170, 170)' : 'rgb(82, 82, 82)'}`,
    gridBackground: `${isDarkMode ? '#303030' : 'rgb(241 245 249)'}`,
    tickColor: `${isDarkMode ? 'rgb(200, 198, 198)' : '#000'}`,
  };

  if (!data || data.length === 0) return null;

  const setsInOrder = data
    .map((el) => {
      return el.sets.map((e) => {
        return { ...e.set, date: format(new Date(el.created_at), 'MM/dd') };
      });
    })
    .flat()
    .reverse();

  const maxWeight = Math.max(...setsInOrder.map((set) => set.weight));
  const avgWieght = Math.round(
    setsInOrder.reduce((acc, cur) => acc + Number(cur.weight), 0) /
      setsInOrder.length,
  );

  return (
    <div className='max-w-screen-md'>
      <ResponsiveContainer width='100%' height={300}>
        <AreaChart
          data={setsInOrder}
          margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
        >
          <CartesianGrid
            fill={chartColors.gridBackground}
            horizontal={false}
            vertical={false}
          />
          <XAxis dataKey='date' tick={false} />
          <YAxis
            width={50}
            domain={[0, 'dataMax + 10']}
            unit='kg'
            tick={{ fill: chartColors.tickColor }}
          />
          <Tooltip content={<CustomToolTip />} />

          <ReferenceLine
            y={maxWeight}
            stroke={chartColors.tickColor}
            strokeDasharray='3 3'
            strokeWidth={1}
            label={{
              value: `${maxWeight} kg`,
              position: 'insideTopRight',
              fill: chartColors.tickColor,
            }}
          />

          <ReferenceLine
            y={avgWieght}
            // stroke={chartColors.areaStroke}
            stroke={chartColors.tickColor}
            strokeDasharray='3 3'
            strokeWidth={1}
            label={{
              value: `${avgWieght} kg`,
              position: 'insideTopRight',
              fill: chartColors.tickColor,
            }}
          />

          <Area
            type='monotone'
            dataKey='weight'
            stroke={chartColors.areaStroke}
            fill={chartColors.areaFill}
            strokeWidth={2}
            unit='kg'
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ProgressChart;
