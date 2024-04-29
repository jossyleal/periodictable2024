import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

export default function Box({ element, data, elemSetter }) {
  // Function to handle highlighting on click
  const highlight = (e) => {
    // Get the previously highlighted element, if any
    let prev = document.getElementsByClassName('highlight')[0];
    // Remove highlight from the previous element
    if (prev) { prev.classList.remove('highlight'); }
    
    // Check if the clicked element's ID is within range
    if (e.currentTarget.id >= 1 && e.currentTarget.id < 119) {
      // Set the current element using elemSetter
      elemSetter(e.currentTarget.id)
      // Highlight the clicked element
      let box = document.getElementById(e.currentTarget.id);
      box.classList.add('highlight');
    } else {
      // Reset the current element if ID is out of range
      elemSetter(0)
    }
  };
  
  return (
    // Render the box element with dynamic properties
    <div
      id={element ? element.id : uuidv4()} // Set ID based on element or generate UUID
      className={element ? 'elem box ' + element.group.join(' ') : 'empty'} // Set classes based on element existence
      onClick={highlight} // Attach click handler
      style={element ? { gridArea:'g'+element.id } : {}} // Set grid area if element exists
    >
      <div className="elem idcont">
        {/* Render ID and symbol */}
        <div className="elem" style={(element && element.id > 99) ? { fontSize: 12 } : { fontSize: 14 }}>{element ? element.id : ''}</div>
        <div className="elem symbol">{element ? element.symbol : ''}</div>
      </div>
      <div className="elem datacont">
        {/* Render name and data */}
        <div className="elem name" style={(element && element.name.length < 9) ? { fontSize: 11 } : (element && element.name.length) < 11 ? { fontSize: 9 } : { fontSize: 8 }}>{element ? element.name : ''}</div>
        <div className="elem" style={{ fontSize: 11 }}>{data ? data.data : ''}</div>
      </div>
    </div>
  )
}

Box.propTypes = {
  element: PropTypes.object,
  data: PropTypes.shape({
    data: PropTypes.string.isRequired
  }),
  elemSetter: PropTypes.func.isRequired,
};

