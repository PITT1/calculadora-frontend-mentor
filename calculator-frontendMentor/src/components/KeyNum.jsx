import PropTypes from 'prop-types';
import '../App.css';

const KeyNum = ({ number, onClick }) => {
    return (
        <button className={`key-num`} onClick={() => onClick(number)}>
            {number}
        </button>
    );
};

export default KeyNum;

KeyNum.propTypes = {
    number: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
}
