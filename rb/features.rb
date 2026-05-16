# WaybackMachine SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module WaybackMachineFeatures
  def self.make_feature(name)
    case name
    when "base"
      WaybackMachineBaseFeature.new
    when "test"
      WaybackMachineTestFeature.new
    else
      WaybackMachineBaseFeature.new
    end
  end
end
