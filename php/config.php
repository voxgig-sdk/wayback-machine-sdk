<?php
declare(strict_types=1);

// WaybackMachine SDK configuration

class WaybackMachineConfig
{
    public static function make_config(): array
    {
        return [
            "main" => [
                "name" => "WaybackMachine",
            ],
            "feature" => [
                "test" => [
          'options' => [
            'active' => false,
          ],
        ],
            ],
            "options" => [
                "base" => "https://archive.org",
                "auth" => [
                    "prefix" => "Bearer",
                ],
                "headers" => [
          'content-type' => 'application/json',
        ],
                "entity" => [
                    "availability" => [],
                ],
            ],
            "entity" => [
        'availability' => [
          'fields' => [
            [
              'active' => true,
              'name' => 'archived_snapshot',
              'req' => false,
              'type' => '`$OBJECT`',
              'index$' => 0,
            ],
            [
              'active' => true,
              'name' => 'url',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 1,
            ],
          ],
          'name' => 'availability',
          'op' => [
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'query' => [
                      [
                        'active' => true,
                        'example' => 'myCallback',
                        'kind' => 'query',
                        'name' => 'callback',
                        'orig' => 'callback',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'example' => '20150101',
                        'kind' => 'query',
                        'name' => 'timestamp',
                        'orig' => 'timestamp',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'example' => 'https://example.com',
                        'kind' => 'query',
                        'name' => 'url',
                        'orig' => 'url',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'method' => 'GET',
                  'orig' => '/wayback/available',
                  'parts' => [
                    'wayback',
                    'available',
                  ],
                  'select' => [
                    'exist' => [
                      'callback',
                      'timestamp',
                      'url',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'load',
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
      ],
        ];
    }


    public static function make_feature(string $name)
    {
        require_once __DIR__ . '/features.php';
        return WaybackMachineFeatures::make_feature($name);
    }
}
