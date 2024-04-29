import PropTypes from 'prop-types';
import Box from './components/Box';
import InfoBar from './components/InfoBar';
import Label from './components/Label';
import elements from './db/elements';
import periods from './db/periods';

const Table = ({ data, dataset, elemSetter, elemId }) => {
  // Validate props
  Table.propTypes = {
    data: PropTypes.array.isRequired,
    dataset: PropTypes.array.isRequired,
    elemSetter: PropTypes.func.isRequired,
    elemId: PropTypes.string.isRequired,
  };

  // Filter dataset based on elemId
  const dset = dataset.filter((elem) => elem.id === Number(elemId));

  // Array of group labels (1 to 18)
  const glabels = Array.from(Array(18), (_, i) => i + 1);

  // Array of period labels (1 to 7 repeated twice)
  const plabels = [1, 2, 3, 4, 5, 6, 7, 6, 7];

  return (
    <div className="table">
      {/* Group labels */}
      {glabels.map((group, ind) => {
        let style = { gridArea: `h${ind + 1}` };
        return <Label key={`h${ind}`} style={style} label={group} />;
      })}

      {/* Period labels */}
      {plabels.map((period, ind) => {
        let style = { gridArea: `v${ind + 1}` };
        return <Label key={`v${ind}`} style={style} label={period} />;
      })}

      {/* Info bar */}
      <InfoBar dataset={dset} />

      {/* Individual element boxes */}
      {periods.map((id) => {
        let element = elements.find((e) => e.id === id);
        let value = data.find((e) => e.id === id);
        return (
          <Box
            key={id}
            element={element ? element : null}
            data={value ? value : null}
            elemSetter={elemSetter}
          />
        );
      })}
    </div>
  );
};

export default Table;
