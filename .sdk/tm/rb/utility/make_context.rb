# WaybackMachine SDK utility: make_context
require_relative '../core/context'
module WaybackMachineUtilities
  MakeContext = ->(ctxmap, basectx) {
    WaybackMachineContext.new(ctxmap, basectx)
  }
end
