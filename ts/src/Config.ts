
import { BaseFeature } from './feature/base/BaseFeature'
import { TestFeature } from './feature/test/TestFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   test: TestFeature,

}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    // TODO: errors etc
    return fi
  }


  main = {
    name: 'WaybackMachine',
  }


  feature = {
     test:     {
      "options": {
        "active": false
      }
    },

  }


  options = {
    base: "https://archive.org",

    headers: {
      "content-type": "application/json"
    },

    entity: {
      
      availability: {
      },

    }
  }


  entity = {
    "availability": {
      "fields": [
        {
          "name": "closest",
          "type": "`$OBJECT`"
        }
      ],
      "name": "availability",
      "op": {
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "args": {
                "query": [
                  {
                    "example": "myCallback",
                    "kind": "query",
                    "name": "callback",
                    "orig": "callback",
                    "type": "`$STRING`"
                  },
                  {
                    "example": "20150101",
                    "kind": "query",
                    "name": "timestamp",
                    "orig": "timestamp",
                    "type": "`$STRING`"
                  },
                  {
                    "example": "https://example.com",
                    "kind": "query",
                    "name": "url",
                    "orig": "url",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/wayback/available",
              "parts": [
                "wayback",
                "available"
              ],
              "select": {
                "exist": [
                  "callback",
                  "timestamp",
                  "url"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.archived_snapshots`"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    }
  }
}


const config = new Config()

export {
  config
}

