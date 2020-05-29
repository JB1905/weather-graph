import React from 'react';
import { useQuery } from '@apollo/client';

import Section from 'components/Section';

const AirQuality: React.FC = () => {
  // const { error, loading, data, refetch } = useQuery<>(
  //   FORECAST_QUERY
  // );

  return (
    <Section title="Air Quality">
      <p>Good</p>

      <table>
        <tbody>
          <tr>
            <td>PM 2.5</td>
          </tr>
          <tr>
            <td>PM 10</td>
          </tr>
        </tbody>
      </table>
    </Section>
  );
};

export default AirQuality;
