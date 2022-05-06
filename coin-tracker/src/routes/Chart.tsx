import ApexChart from 'react-apexcharts';
import * as React from 'react';
import useChart from '../hooks/useChart';
import { useRecoilValue } from 'recoil';
import { isDarkAtom } from '../atoms/atoms';

interface IProps {}

const Chart: React.FC<IProps> = () => {
  const { isLoading, data: datas, start, end } = useChart();
  const isDark = useRecoilValue(isDarkAtom);

  return (
    <div>
      {isLoading ? (
        'Loading'
      ) : (
        <ApexChart
          type="line"
          options={{
            chart: { height: 500, width: 500, toolbar: { show: false } },
            theme: { mode: isDark ? 'dark' : 'light' },
            stroke: { curve: 'smooth', width: 3 },
            grid: { show: false },
            xaxis: { labels: { show: false } },
          }}
          series={[
            {
              name: 'price',
              data: datas!.map((data) => {
                return data.close;
              }),
            },
          ]}
        />
      )}
    </div>
  );
};

export default Chart;
