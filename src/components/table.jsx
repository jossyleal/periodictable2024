import PropTypes from 'prop-types';
import Box from '../components/box';
import InfoBar from '../components/infobar';
import Label from '../components/label';
import elements from '../db/elements';
import periods from '../db/periods';

const Table = ({ data, dataset, elemSetter, elemId }) => {
  const dset = dataset.filter(elem => elem.id === Number(elemId));
  const glabels = Array.from(Array(18), (_, i) => i+1);
  const plabels = [1,2,3,4,5,6,7,6,7];

  return (
    <div className="table" >
      {/* group/period labels */}
      { 
        glabels.map( (group, ind) => {
          let style = { gridArea: `h${ind+1}`}
          return ( <Label key={`h${ind}`} style={style} label={group}/>)
        })
      }
      {
        plabels.map( (period, ind) => {
          let style = { gridArea: `v${ind+1}`}
          return( <Label key={`v${ind}`} style={style} label={period}/>)
        })
      }
      {/* info bar (element/groups) */}
      <InfoBar dataset={dset}/>
      {/* individual element boxes */}
      {
        periods.map( id => {
          let element = elements.filter(e=> e.id === id);
          let value = data.filter(e => e.id === id);
          return (
            <Box key={id} element={element.length === 0 ? null : element[0]} data={value.length === 0 ? null : value[0] } elemSetter={elemSetter}/>
          )
        })
      }
    </div>
  )
};

Table.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      // Define other PropTypes for your data object
    })
  ).isRequired,
  dataset: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      // Define other PropTypes for your dataset object
    })
  ).isRequired,
  elemSetter: PropTypes.func.isRequired,
  elemId: PropTypes.string.isRequired,
};

export default Table;
