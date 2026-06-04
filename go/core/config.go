package core

func MakeConfig() map[string]any {
	return map[string]any{
		"main": map[string]any{
			"name": "WaybackMachine",
		},
		"feature": map[string]any{
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
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
						"name": "archived_snapshot",
						"req": false,
						"type": "`$OBJECT`",
						"active": true,
						"index$": 0,
					},
					map[string]any{
						"name": "url",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 1,
					},
				},
				"name": "availability",
				"op": map[string]any{
					"load": map[string]any{
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
											"reqd": false,
											"type": "`$STRING`",
											"active": true,
										},
										map[string]any{
											"example": "20150101",
											"kind": "query",
											"name": "timestamp",
											"orig": "timestamp",
											"reqd": false,
											"type": "`$STRING`",
											"active": true,
										},
										map[string]any{
											"example": "https://example.com",
											"kind": "query",
											"name": "url",
											"orig": "url",
											"reqd": true,
											"type": "`$STRING`",
											"active": true,
										},
									},
								},
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
									"res": "`body`",
								},
								"active": true,
								"index$": 0,
							},
						},
						"input": "data",
						"key$": "load",
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
		},
	}
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
