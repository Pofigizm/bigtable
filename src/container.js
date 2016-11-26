import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as actions from './actions'
import App from './App'

const mapStateToProps = (state, props) => ({
  list: state.list.slice(state.first, state.first + state.show),
  height: state.height,
  cn: props.sheet.classes,
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)