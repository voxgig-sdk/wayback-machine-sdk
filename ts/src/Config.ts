
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
    name: 'ProjectName',
  }


  feature = {
     test:     {
      "options": {
        "active": false
      }
    },

  }


  options = {
    base: 'https://archive.org',

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
          "active": true,
          "name": "archived_snapshot",
          "req": false,
          "type": "`$OBJECT`",
          "index$": 0
        },
        {
          "active": true,
          "name": "url",
          "req": false,
          "type": "`$STRING`",
          "index$": 1
        }
      ],
      "name": "availability",
      "op": {
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "active": true,
              "args": {
                "query": [
                  {
                    "active": true,
                    "example": "myCallback",
                    "kind": "query",
                    "name": "callback",
                    "orig": "callback",
                    "reqd": false,
                    "type": "`$STRING`"
                  },
                  {
                    "active": true,
                    "example": "20150101",
                    "kind": "query",
                    "name": "timestamp",
                    "orig": "timestamp",
                    "reqd": false,
                    "type": "`$STRING`"
                  },
                  {
                    "active": true,
                    "example": "https://example.com",
                    "kind": "query",
                    "name": "url",
                    "orig": "url",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
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
                "res": "`body`"
              },
              "index$": 0
            }
          ],
          "key$": "load"
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

