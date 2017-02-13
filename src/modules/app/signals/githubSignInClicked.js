import {set} from 'cerebral/operators'
import {state} from 'cerebral/tags'

export default [
  set(state`app.isProfileMenuOpen`, false),
  set(state`app.showGithubSignIn`, true)
]
