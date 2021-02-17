import PropTypes from 'prop-types';

const Display = ( { result }) => {
    return (
        <div>
            <h1>The result is: { result }</h1>
        </div>
    )
}

Display.propTypes = {
    result: PropTypes.string.isRequired
}

Display.DefaultProps = {
    result: 'O'
}

export default Display;
