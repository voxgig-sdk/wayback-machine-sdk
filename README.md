# WaybackMachine SDK

Check whether a URL has been archived in the Internet Archive's Wayback Machine and look up snapshots near a given timestamp

> TypeScript, Python, PHP, Golang, Ruby, Lua SDKs, a CLI, an interactive REPL, and an MCP server for AI agents — all generated from one OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).

## About Wayback Machine API

The Wayback Machine Availability API is a small JSON endpoint published by the [Internet Archive](https://archive.org/) that tells you whether a given URL has been captured by the [Wayback Machine](https://web.archive.org/) and, if so, links to the closest snapshot.

What you get from the API:

- A boolean `available` flag indicating whether any snapshot exists for the requested URL.
- The `url` of the closest archived capture on `web.archive.org`.
- The capture `timestamp` in `YYYYMMDDhhmmss` form.
- The original HTTP `status` code recorded when the page was archived.

The endpoint accepts a required `url` parameter and an optional `timestamp` (1-14 digits, `YYYYMMDDhhmmss`) to find the snapshot closest to a specific point in time. A `callback` parameter is supported for JSONP. When nothing has been archived the response is simply `{"archived_snapshots":{}}`.

The service is unauthenticated and CORS-enabled, making it usable directly from browser code. The Internet Archive documents this as a test API that may change; no formal rate limits are published, so polite use is expected.

## Try it

**TypeScript**
```bash
npm install wayback-machine
```

**Python**
```bash
pip install wayback-machine-sdk
```

**PHP**
```bash
composer require voxgig/wayback-machine-sdk
```

**Golang**
```bash
go get github.com/voxgig-sdk/wayback-machine-sdk/go
```

**Ruby**
```bash
gem install wayback-machine-sdk
```

**Lua**
```bash
luarocks install wayback-machine-sdk
```

## 30-second quickstart

### TypeScript

```ts
import { WaybackMachineSDK } from 'wayback-machine'

const client = new WaybackMachineSDK({})

```

See the [TypeScript README](ts/README.md) for the
full guide, or scroll down for the same example in other languages.

## What's in the box

| Surface | Use it for | Path |
| --- | --- | --- |
| **SDK** (TypeScript, Python, PHP, Golang, Ruby, Lua) | App integration | `ts/` `py/` `php/` `go/` `rb/` `lua/` |
| **CLI** | Scripts, CI, ops, one-off API calls | `go-cli/` |
| **MCP server** | AI agents (Claude, Cursor, Cline) | `go-mcp/` |

## Use it from an AI agent (MCP)

The generated MCP server exposes every operation in this SDK as an
[MCP](https://modelcontextprotocol.io) tool that Claude, Cursor or Cline
can call directly. Build and register it:

```bash
cd go-mcp && go build -o wayback-machine-mcp .
```

Then add it to your agent's MCP config (Claude Desktop, Cursor, etc.):

```json
{
  "mcpServers": {
    "wayback-machine": {
      "command": "/abs/path/to/wayback-machine-mcp"
    }
  }
}
```

## Entities

The API exposes one entity:

| Entity | Description | API path |
| --- | --- | --- |
| **Availability** | Lookup of whether a given URL has an archived snapshot in the Wayback Machine, returning the closest capture's URL, timestamp, and original HTTP status via `GET /wayback/available`. | `/wayback/available` |

Each entity supports the following operations where available: **load**,
**list**, **create**, **update**, and **remove**.

## Quickstart in other languages

### Python

```python
from waybackmachine_sdk import WaybackMachineSDK

client = WaybackMachineSDK({})


# Load a specific availability
availability, err = client.Availability(None).load(
    {"id": "example_id"}, None
)
```

### PHP

```php
<?php
require_once 'waybackmachine_sdk.php';

$client = new WaybackMachineSDK([]);


// Load a specific availability
[$availability, $err] = $client->Availability(null)->load(
    ["id" => "example_id"], null
);
```

### Golang

```go
import sdk "github.com/voxgig-sdk/wayback-machine-sdk/go"

client := sdk.NewWaybackMachineSDK(map[string]any{})

```

### Ruby

```ruby
require_relative "WaybackMachine_sdk"

client = WaybackMachineSDK.new({})


# Load a specific availability
availability, err = client.Availability(nil).load(
  { "id" => "example_id" }, nil
)
```

### Lua

```lua
local sdk = require("wayback-machine_sdk")

local client = sdk.new({})


-- Load a specific availability
local availability, err = client:Availability(nil):load(
  { id = "example_id" }, nil
)
```

## Unit testing in offline mode

Every SDK ships a test mode that swaps the HTTP transport for an
in-memory mock, so unit tests run offline.

### TypeScript

```ts
const client = WaybackMachineSDK.test()
const result = await client.Availability().load({ id: 'test01' })
// result.ok === true, result.data contains mock data
```

### Python

```python
client = WaybackMachineSDK.test(None, None)
result, err = client.Availability(None).load(
    {"id": "test01"}, None
)
```

### PHP

```php
$client = WaybackMachineSDK::test(null, null);
[$result, $err] = $client->Availability(null)->load(
    ["id" => "test01"], null
);
```

### Golang

```go
client := sdk.TestSDK(nil, nil)
result, err := client.Availability(nil).Load(
    map[string]any{"id": "test01"}, nil,
)
```

### Ruby

```ruby
client = WaybackMachineSDK.test(nil, nil)
result, err = client.Availability(nil).load(
  { "id" => "test01" }, nil
)
```

### Lua

```lua
local client = sdk.test(nil, nil)
local result, err = client:Availability(nil):load(
  { id = "test01" }, nil
)
```

## How it works

Every SDK call runs the same five-stage pipeline:

1. **Point** — resolve the API endpoint from the operation definition.
2. **Spec** — build the HTTP specification (URL, method, headers, body).
3. **Request** — send the HTTP request.
4. **Response** — receive and parse the response.
5. **Result** — extract the result data for the caller.

A feature hook fires at each stage (e.g. `PrePoint`, `PreSpec`,
`PreRequest`), so features can inspect or modify the pipeline without
forking the SDK.

### Features

| Feature | Purpose |
| --- | --- |
| **TestFeature** | In-memory mock transport for testing without a live server |

Pass custom features via the `extend` option at construction time.

### Direct and Prepare

For endpoints the entity model doesn't cover, use the low-level methods:

- **`direct(fetchargs)`** — build and send an HTTP request in one step.
- **`prepare(fetchargs)`** — build the request without sending it.

Both accept a map with `path`, `method`, `params`, `query`,
`headers`, and `body`. See the [How-to guides](#how-to-guides) below.

## How-to guides

### Make a direct API call

When the entity interface does not cover an endpoint, use `direct`:

**TypeScript:**
```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})
console.log(result.data)
```

**Python:**
```python
result, err = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example"},
})
```

**PHP:**
```php
[$result, $err] = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example"],
]);
```

**Go:**
```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
```

**Ruby:**
```ruby
result, err = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example" },
})
```

**Lua:**
```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example" },
})
```

## Per-language documentation

- [TypeScript](ts/README.md)
- [Python](py/README.md)
- [PHP](php/README.md)
- [Golang](go/README.md)
- [Ruby](rb/README.md)
- [Lua](lua/README.md)

## Using the Wayback Machine API

- Upstream: [https://archive.org/web/](https://archive.org/web/)
- API docs: [https://archive.org/help/wayback_api.php](https://archive.org/help/wayback_api.php)

- Operated by the [Internet Archive](https://archive.org/), a US 501(c)(3) non-profit.
- The API itself is openly accessible without authentication; the documentation describes it as a test endpoint that may change.
- Snapshot content delivered through the Wayback Machine is the original web material captured at crawl time and remains subject to the originating site's copyright.
- Usage is governed by the Internet Archive's [Terms of Use](https://archive.org/about/terms.php).

---

Generated from the Wayback Machine API OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).
