# WaybackMachine SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module WaybackMachineFeatures
  def self.make_feature(name)
    case name
    when "base"
      WaybackMachineBaseFeature.new
    when "ratelimit"
      WaybackMachineRatelimitFeature.new
    when "retry"
      WaybackMachineRetryFeature.new
    when "test"
      WaybackMachineTestFeature.new
    when "timeout"
      WaybackMachineTimeoutFeature.new
    else
      WaybackMachineBaseFeature.new
    end
  end
end
