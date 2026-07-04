# WaybackMachine SDK configuration

module WaybackMachineConfig
  def self.make_config
    {
      "main" => {
        "name" => "WaybackMachine",
      },
      "feature" => {
        "test" => {
          "options" => {
            "active" => false,
          },
        },
      },
      "options" => {
        "base" => "https://archive.org",
        "headers" => {
          "content-type" => "application/json",
        },
        "entity" => {
          "availability" => {},
        },
      },
      "entity" => {
        "availability" => {
          "fields" => [
            {
              "active" => true,
              "name" => "archived_snapshot",
              "req" => false,
              "type" => "`$OBJECT`",
              "index$" => 0,
            },
            {
              "active" => true,
              "name" => "url",
              "req" => false,
              "type" => "`$STRING`",
              "index$" => 1,
            },
          ],
          "name" => "availability",
          "op" => {
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "active" => true,
                  "args" => {
                    "query" => [
                      {
                        "active" => true,
                        "example" => "myCallback",
                        "kind" => "query",
                        "name" => "callback",
                        "orig" => "callback",
                        "reqd" => false,
                        "type" => "`$STRING`",
                      },
                      {
                        "active" => true,
                        "example" => "20150101",
                        "kind" => "query",
                        "name" => "timestamp",
                        "orig" => "timestamp",
                        "reqd" => false,
                        "type" => "`$STRING`",
                      },
                      {
                        "active" => true,
                        "example" => "https://example.com",
                        "kind" => "query",
                        "name" => "url",
                        "orig" => "url",
                        "reqd" => true,
                        "type" => "`$STRING`",
                      },
                    ],
                  },
                  "method" => "GET",
                  "orig" => "/wayback/available",
                  "parts" => [
                    "wayback",
                    "available",
                  ],
                  "select" => {
                    "exist" => [
                      "callback",
                      "timestamp",
                      "url",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "index$" => 0,
                },
              ],
              "key$" => "load",
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
      },
    }
  end


  def self.make_feature(name)
    require_relative 'features'
    WaybackMachineFeatures.make_feature(name)
  end
end
