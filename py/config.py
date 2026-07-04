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
            "name": "archived_snapshot",
            "req": False,
            "type": "`$OBJECT`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "url",
            "req": False,
            "type": "`$STRING`",
            "index$": 1,
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
                  "res": "`body`",
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
