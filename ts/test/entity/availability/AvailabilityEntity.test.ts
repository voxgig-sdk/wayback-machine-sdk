

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { WaybackMachineSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
loadEnvLocal(__dirname + '/../../../.env.local')


describe('AvailabilityEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when WAYBACK_MACHINE_TEST_LIVE=TRUE.
  afterEach(liveDelay('WAYBACK_MACHINE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = WaybackMachineSDK.test()
    const ent = testsdk.Availability()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.WAYBACK_MACHINE_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'availability.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"closest","req":false,"short":"Information about the closest available snapshot","type":"`$OBJECT`","index$":0}],"name":"availability","op":{"load":{"input":"data","name":"load","points":[{"active":true,"args":{"query":[{"active":true,"example":"myCallback","kind":"query","name":"callback","orig":"callback","reqd":false,"type":"`$STRING`","index$":0},{"active":true,"example":"20150101","kind":"query","name":"timestamp","orig":"timestamp","reqd":false,"type":"`$STRING`","index$":1},{"active":true,"example":"https://example.com","kind":"query","name":"url","orig":"url","reqd":true,"type":"`$STRING`","index$":2}]},"contract":{"id":"GET /wayback/available","json":"{\"operationId\":\"getAvailableSnapshot\",\"parameters\":[{\"description\":\"The URL to check for archived snapshots\",\"in\":\"query\",\"name\":\"url\",\"required\":true,\"schema\":{\"example\":\"https://example.com\",\"format\":\"uri\",\"type\":\"string\"}},{\"description\":\"Timestamp in the format YYYYMMDDhhmmss to find the closest archived snapshot. If not specified, returns the most recent snapshot.\",\"in\":\"query\",\"name\":\"timestamp\",\"required\":false,\"schema\":{\"example\":\"20150101\",\"pattern\":\"^[0-9]{4,14}$\",\"type\":\"string\"}},{\"description\":\"Optional JSONP callback function name\",\"in\":\"query\",\"name\":\"callback\",\"required\":false,\"schema\":{\"example\":\"myCallback\",\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"examples\":{\"availableSnapshot\":{\"summary\":\"Available snapshot found\",\"value\":{\"archived_snapshots\":{\"closest\":{\"available\":true,\"status\":\"200\",\"timestamp\":\"20150101000000\",\"url\":\"http://web.archive.org/web/20150101000000/https://example.com\"}},\"url\":\"https://example.com\"}},\"noSnapshot\":{\"summary\":\"No snapshot available\",\"value\":{\"archived_snapshots\":{},\"url\":\"https://example.com\"}}},\"schema\":{\"properties\":{\"archived_snapshots\":{\"description\":\"Container for archived snapshot information\",\"properties\":{\"closest\":{\"description\":\"Information about the closest available snapshot\",\"properties\":{\"available\":{\"description\":\"Indicates whether an archived snapshot is available\",\"example\":true,\"type\":\"boolean\"},\"status\":{\"description\":\"HTTP status code of the archived snapshot\",\"example\":\"200\",\"type\":\"string\"},\"timestamp\":{\"description\":\"Timestamp of the archived snapshot in YYYYMMDDhhmmss format\",\"example\":\"20150101000000\",\"type\":\"string\"},\"url\":{\"description\":\"URL to access the archived snapshot in the Wayback Machine\",\"example\":\"http://web.archive.org/web/20150101000000/https://example.com\",\"type\":\"string\"}},\"type\":\"object\"}},\"type\":\"object\"},\"url\":{\"description\":\"The requested URL\",\"example\":\"https://example.com\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Successful response with snapshot availability information\"},\"400\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"example\":\"Invalid URL parameter\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Bad request - invalid parameters\"},\"503\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"example\":\"Service temporarily unavailable\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Service temporarily unavailable\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/wayback/available","segments":[{"lit":"wayback"},{"lit":"available"}],"select":{"exist":["callback","timestamp","url"]},"transform":{"req":"`reqdata`","res":"`body.archived_snapshots`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"availability","name__orig":"availability","Name":"Availability","name_":"availability","name-":"availability","NAME":"AVAILABILITY","index$":0}, {"active":true,"entity":"availability","key$":"BasicAvailabilityFlow","kind":"basic","name":"BasicAvailabilityFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"availability_ref01","srcdatavar":"availability_ref01_data","suffix":"_dt0"},"match":{},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-availability_ref01"}}],"index$":0}]}, 'Availability')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let availability_ref01_data = Object.values(setup.data.existing.availability)[0] as any

    // LOAD
    const availability_ref01_ent = client.Availability()
    const availability_ref01_match_dt0: any = {}
    const availability_ref01_data_dt0 = (await availability_ref01_ent.load(availability_ref01_match_dt0)).data()
    assert(null != availability_ref01_data_dt0)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/availability/AvailabilityTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = WaybackMachineSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['availability01','availability02','availability03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'WAYBACK_MACHINE_TEST_AVAILABILITY_ENTID': idmap,
    'WAYBACK_MACHINE_TEST_LIVE': 'FALSE',
    'WAYBACK_MACHINE_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['WAYBACK_MACHINE_TEST_AVAILABILITY_ENTID']

  const live = 'TRUE' === env.WAYBACK_MACHINE_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['WAYBACK_MACHINE_TEST_AVAILABILITY_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new WaybackMachineSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
  }

  const setup = {
    idmap,
    env,
    options,
    client,
    struct,
    data: entityData,
    explain: 'TRUE' === env.WAYBACK_MACHINE_TEST_EXPLAIN,
    live,
    transport,
    now: Date.now(),
  }

  return setup
}
  
