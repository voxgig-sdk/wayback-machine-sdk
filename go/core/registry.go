package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewAvailabilityEntityFunc func(client *WaybackMachineSDK, entopts map[string]any) WaybackMachineEntity

