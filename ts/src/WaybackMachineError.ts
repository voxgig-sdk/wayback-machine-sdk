
import { Context } from './Context'


class WaybackMachineError extends Error {

  isWaybackMachineError = true

  sdk = 'WaybackMachine'

  code: string
  ctx: Context

  constructor(code: string, msg: string, ctx: Context) {
    super(msg)
    this.code = code
    this.ctx = ctx
  }

}

export {
  WaybackMachineError
}

