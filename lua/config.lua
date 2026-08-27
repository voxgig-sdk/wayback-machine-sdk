-- WaybackMachine SDK configuration

-- Build a fresh, fully materialised config table. Every call rebuilds the
-- whole structure, so prefer require("config_shared") unless you need a
-- private copy you intend to mutate.
local function make_config()
  return {
    main = {
      name = "WaybackMachine",
      slug = "wayback-machine",
      version = "0.0.1",
      target = "lua",
    },
    feature = {
      ["test"] = {
        ["options"] = {
          ["active"] = false,
        },
        ["transport"] = "base",
      },
    },
    options = {
      base = "https://archive.org",
      headers = {
        ["content-type"] = "application/json",
      },
      entity = {
        ["availability"] = {},
      },
    },
    entity = {
      ["availability"] = {
        ["fields"] = {
          {
            ["name"] = "closest",
            ["short"] = "Information about the closest available snapshot",
            ["type"] = "`$OBJECT`",
          },
        },
        ["name"] = "availability",
        ["op"] = {
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {
                  ["query"] = {
                    {
                      ["example"] = "myCallback",
                      ["kind"] = "query",
                      ["name"] = "callback",
                      ["orig"] = "callback",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["example"] = "20150101",
                      ["kind"] = "query",
                      ["name"] = "timestamp",
                      ["orig"] = "timestamp",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["example"] = "https://example.com",
                      ["kind"] = "query",
                      ["name"] = "url",
                      ["orig"] = "url",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/wayback/available",
                ["parts"] = {
                  "wayback",
                  "available",
                },
                ["select"] = {
                  ["exist"] = {
                    "callback",
                    "timestamp",
                    "url",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.archived_snapshots`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
    },
  }
end


local function make_feature(name)
  local features = require("features")
  local factory = features[name]
  if factory ~= nil then
    return factory()
  end
  return features.base()
end


-- Attach make_feature to the SDK class
local function setup_sdk(SDK)
  SDK._make_feature = make_feature
end


return make_config
