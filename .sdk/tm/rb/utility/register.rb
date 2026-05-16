# WaybackMachine SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

WaybackMachineUtility.registrar = ->(u) {
  u.clean = WaybackMachineUtilities::Clean
  u.done = WaybackMachineUtilities::Done
  u.make_error = WaybackMachineUtilities::MakeError
  u.feature_add = WaybackMachineUtilities::FeatureAdd
  u.feature_hook = WaybackMachineUtilities::FeatureHook
  u.feature_init = WaybackMachineUtilities::FeatureInit
  u.fetcher = WaybackMachineUtilities::Fetcher
  u.make_fetch_def = WaybackMachineUtilities::MakeFetchDef
  u.make_context = WaybackMachineUtilities::MakeContext
  u.make_options = WaybackMachineUtilities::MakeOptions
  u.make_request = WaybackMachineUtilities::MakeRequest
  u.make_response = WaybackMachineUtilities::MakeResponse
  u.make_result = WaybackMachineUtilities::MakeResult
  u.make_point = WaybackMachineUtilities::MakePoint
  u.make_spec = WaybackMachineUtilities::MakeSpec
  u.make_url = WaybackMachineUtilities::MakeUrl
  u.param = WaybackMachineUtilities::Param
  u.prepare_auth = WaybackMachineUtilities::PrepareAuth
  u.prepare_body = WaybackMachineUtilities::PrepareBody
  u.prepare_headers = WaybackMachineUtilities::PrepareHeaders
  u.prepare_method = WaybackMachineUtilities::PrepareMethod
  u.prepare_params = WaybackMachineUtilities::PrepareParams
  u.prepare_path = WaybackMachineUtilities::PreparePath
  u.prepare_query = WaybackMachineUtilities::PrepareQuery
  u.result_basic = WaybackMachineUtilities::ResultBasic
  u.result_body = WaybackMachineUtilities::ResultBody
  u.result_headers = WaybackMachineUtilities::ResultHeaders
  u.transform_request = WaybackMachineUtilities::TransformRequest
  u.transform_response = WaybackMachineUtilities::TransformResponse
}
