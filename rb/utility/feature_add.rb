# WaybackMachine SDK utility: feature_add
module WaybackMachineUtilities
  FeatureAdd = ->(ctx, f) {
    ctx.client.features << f
  }
end
