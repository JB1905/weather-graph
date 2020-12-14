import { useQuery } from '@apollo/client';

import Widget from 'components/Widget';

// TODO
const AirQuality = () => {
  // const { error, loading, data, refetch } = useQuery<>(
  //   AIR_QUALITY_QUERY,
  //   {
  //     variables: {}
  //   }
  // );

  // if (loading) return <Loader />;

  // if (error) {
  //   return <ErrorMessage>{error.graphQLErrors[0].message}</ErrorMessage>;
  // }

  // if (loading) return <Loader />;
  // if (error) return <ErrorMessage>{error.message}</ErrorMessage>;
  // if (!data) return <p>Not found</p>;

  return (
    <Widget title="Air Quality">
      {/* <p>Good</p>

      <table>
        <tbody>
          <tr>
            <td>PM 2.5</td>
          </tr>
          <tr>
            <td>PM 10</td>
          </tr>
        </tbody>
      </table> */}
    </Widget>
  );
};

export default AirQuality;
