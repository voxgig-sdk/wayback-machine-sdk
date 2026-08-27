package core

import (
	"sync"
)

// MakeConfig builds a fresh, fully materialised config map. Every call
// rebuilds the whole structure, so prefer SharedConfig unless you need a
// private copy you intend to mutate.
func MakeConfig() map[string]any {
	return map[string]any{
		"main": map[string]any{
			"name": "WaybackMachine",
			"slug": "wayback-machine",
			"version": "0.0.1",
			"target": "go",
		},
		"feature": map[string]any{
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
				"transport": "base",
			},
		},
		"options": map[string]any{
			"base": "https://archive.org",
			"headers": map[string]any{
				"content-type": "application/json",
			},
			"entity": map[string]any{
				"availability": map[string]any{},
			},
		},
		"entity": map[string]any{
			"availability": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "closest",
						"short": "Information about the closest available snapshot",
						"type": "`$OBJECT`",
					},
				},
				"name": "availability",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"example": "myCallback",
											"kind": "query",
											"name": "callback",
											"orig": "callback",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "20150101",
											"kind": "query",
											"name": "timestamp",
											"orig": "timestamp",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "https://example.com",
											"kind": "query",
											"name": "url",
											"orig": "url",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/wayback/available",
								"parts": []any{
									"wayback",
									"available",
								},
								"select": map[string]any{
									"exist": []any{
										"callback",
										"timestamp",
										"url",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.archived_snapshots`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
		},
	}
}

var (
	sharedConfigOnce sync.Once
	sharedConfigVal  map[string]any
)

// SharedConfig returns the process-wide config, built once on first use.
// The SDK reads the config on every request and never writes to it, so one
// instance is shared by every client rather than rebuilt per client.
//
// The returned map is shared: treat it as read-only. Callers that need to
// mutate should use MakeConfig, which always returns a fresh copy.
func SharedConfig() map[string]any {
	sharedConfigOnce.Do(func() {
		sharedConfigVal = MakeConfig()
	})
	return sharedConfigVal
}

func makeFeature(name string) Feature {
	switch name {
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
