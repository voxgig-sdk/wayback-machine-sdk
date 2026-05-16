-- WaybackMachine SDK error

local WaybackMachineError = {}
WaybackMachineError.__index = WaybackMachineError


function WaybackMachineError.new(code, msg, ctx)
  local self = setmetatable({}, WaybackMachineError)
  self.is_sdk_error = true
  self.sdk = "WaybackMachine"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function WaybackMachineError:error()
  return self.msg
end


function WaybackMachineError:__tostring()
  return self.msg
end


return WaybackMachineError
