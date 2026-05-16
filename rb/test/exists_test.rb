# WaybackMachine SDK exists test

require "minitest/autorun"
require_relative "../WaybackMachine_sdk"

class ExistsTest < Minitest::Test
  def test_create_test_sdk
    testsdk = WaybackMachineSDK.test(nil, nil)
    assert !testsdk.nil?
  end
end
