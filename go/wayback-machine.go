package voxgigwaybackmachinesdk

import (
	"github.com/voxgig-sdk/wayback-machine-sdk/go/core"
	"github.com/voxgig-sdk/wayback-machine-sdk/go/entity"
	"github.com/voxgig-sdk/wayback-machine-sdk/go/feature"
	_ "github.com/voxgig-sdk/wayback-machine-sdk/go/utility"
)

// Type aliases preserve external API.
type WaybackMachineSDK = core.WaybackMachineSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type WaybackMachineEntity = core.WaybackMachineEntity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type WaybackMachineError = core.WaybackMachineError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewAvailabilityEntityFunc = func(client *core.WaybackMachineSDK, entopts map[string]any) core.WaybackMachineEntity {
		return entity.NewAvailabilityEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewWaybackMachineSDK = core.NewWaybackMachineSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig

// No-arg convenience constructors. Go has no default-argument syntax,
// so these aliases let callers write `sdk.New()` / `sdk.Test()`
// instead of `sdk.NewWaybackMachineSDK(nil)` / `sdk.TestSDK(nil, nil)`
// for the common no-options case.
func New() *WaybackMachineSDK  { return NewWaybackMachineSDK(nil) }
func Test() *WaybackMachineSDK { return TestSDK(nil, nil) }
var NewBaseFeature = feature.NewBaseFeature
var NewTestFeature = feature.NewTestFeature
