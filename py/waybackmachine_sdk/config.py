# WaybackMachine SDK configuration


def make_config():
    return {
        "main": {
            "name": "WaybackMachine",
        },
        "feature": {
            "test": {
        "options": {
          "active": False,
        },
      },
        },
        "options": {
            "base": "https://archive.org",
            "headers": {
        "content-type": "application/json",
      },
            "entity": {
                "availability": {},
            },
        },
        "entity": {
      "availability": {
        "fields": [
          {
            "active": True,
            "name": "closest",
            "req": False,
            "type": "`$OBJECT`",
            "index$": 0,
          },
        ],
        "name": "availability",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {
                  "query": [
                    {
                      "active": True,
                      "example": "myCallback",
                      "kind": "query",
                      "name": "callback",
                      "orig": "callback",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "example": "20150101",
                      "kind": "query",
                      "name": "timestamp",
                      "orig": "timestamp",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "example": "https://example.com",
                      "kind": "query",
                      "name": "url",
                      "orig": "url",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/wayback/available",
                "parts": [
                  "wayback",
                  "available",
                ],
                "select": {
                  "exist": [
                    "callback",
                    "timestamp",
                    "url",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.archived_snapshots`",
                },
                "index$": 0,
              },
            ],
            "key$": "load",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
