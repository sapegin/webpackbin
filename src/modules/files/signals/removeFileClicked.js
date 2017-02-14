import isSelectedFile from '../actions/isSelectedFile'
import setNewSelectedFileIndex from '../actions/setNewSelectedFileIndex'
import {splice} from 'cerebral/operators'
import {state, props} from 'cerebral/tags'
import updateFirebaseBin from 'modules/app/factories/updateFirebaseBin'

export default [
  splice(state`app.currentBin.files`, props`index`, 1),
  isSelectedFile, {
    true: [
      setNewSelectedFileIndex
    ],
    false: []
  },
  ...updateFirebaseBin([
    'files',
    'selectedFileIndex'
  ])
]