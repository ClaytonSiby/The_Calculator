import PropTypes from 'prop-types'

const Display = ({ total, next, operation }) => (
  <div id='resultPanel'>
    <p>{total || next}</p>
    <span>
      {next && (total || '0')} {operation || null}
    </span>
  </div>
)

Display.propTypes = {
  result: PropTypes.string
}

Display.defaultProps = {
  result: '0'
}

export default Display
