import { ALERT } from './types'

export default function alert(msg = 'Default alert!') {
  return {
    type: ALERT,
    msg
  }
}
