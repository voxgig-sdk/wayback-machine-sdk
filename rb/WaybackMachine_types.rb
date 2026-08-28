# frozen_string_literal: true

# Typed models for the WaybackMachine SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# Availability entity data model.
#
# @!attribute [rw] closest
#   @return [Hash, nil]
Availability = Struct.new(
  :closest,
  keyword_init: true
)

# Request payload for Availability#load.
#
# @!attribute [rw] callback
#   @return [String, nil]
#
# @!attribute [rw] timestamp
#   @return [String, nil]
#
# @!attribute [rw] url
#   @return [String]
AvailabilityLoadMatch = Struct.new(
  :callback,
  :timestamp,
  :url,
  keyword_init: true
)

