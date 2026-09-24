

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
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"closest":{"a":true,"h":"Closest","n":"closest","r":false,"sh":"Information about the closest available snapshot","t":"`$OBJECT`","key$":"closest","index$":0}},"name":"availability","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /wayback/available","source":"openapi3","version":2},"g":{"query":[{"a":true,"ex":"myCallback","k":"query","n":"callback","or":"callback","r":false,"t":"`$STRING`","index$":0},{"a":true,"ex":"20150101","k":"query","n":"timestamp","or":"timestamp","r":false,"t":"`$STRING`","index$":1},{"a":true,"ex":"https://example.com","k":"query","n":"url","or":"url","r":true,"t":"`$STRING`","index$":2}]},"k":"http","m":"GET","o":"/wayback/available","q":{"exist":["callback","timestamp","url"]},"r":{},"s":[{"lit":"wayback"},{"lit":"available"}],"t":{"req":"`reqdata`","res":"`body.archived_snapshots`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"availability","name__orig":"availability","Name":"Availability","name_":"availability","name-":"availability","NAME":"AVAILABILITY","index$":0}, {"active":true,"entity":"availability","key$":"BasicAvailabilityFlow","kind":"basic","name":"BasicAvailabilityFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"availability_ref01","srcdatavar":"availability_ref01_data","suffix":"_dt0"},"m":{},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-availability_ref01"}}],"index$":0}]}, 'Availability', {"GET /wayback/available":{"protocol":"http","operationId":"getAvailableSnapshot","responses":{"200":{"description":"Successful response with snapshot availability information","content":{"application/json":{"schema":{"type":"object","properties":{"url":{"description":"The requested URL","example":"https://example.com","key$":"url","type":"string"},"archived_snapshots":{"description":"Container for archived snapshot information","key$":"archived_snapshots","properties":{"closest":{"description":"Information about the closest available snapshot","properties":{"available":{"description":"Indicates whether an archived snapshot is available","example":true,"type":"boolean"},"status":{"description":"HTTP status code of the archived snapshot","example":"200","type":"string"},"timestamp":{"description":"Timestamp of the archived snapshot in YYYYMMDDhhmmss format","example":"20150101000000","type":"string"},"url":{"description":"URL to access the archived snapshot in the Wayback Machine","example":"http://web.archive.org/web/20150101000000/https://example.com","type":"string"}},"type":"object","key$":"closest"}},"type":"object","index$":0}}},"examples":{"availableSnapshot":{"summary":"Available snapshot found","value":{"url":"https://example.com","archived_snapshots":{"closest":{"status":"200","available":true,"url":"http://web.archive.org/web/20150101000000/https://example.com","timestamp":"20150101000000"}}}},"noSnapshot":{"summary":"No snapshot available","value":{"url":"https://example.com","archived_snapshots":{}}}}}}},"400":{"description":"Bad request - invalid parameters","content":{"application/json":{"schema":{"type":"object","properties":{"error":{"type":"string","example":"Invalid URL parameter"}}}}}},"503":{"description":"Service temporarily unavailable","content":{"application/json":{"schema":{"type":"object","properties":{"error":{"type":"string","example":"Service temporarily unavailable"}}}}}}},"parameters":[{"name":"url","in":"query","description":"The URL to check for archived snapshots","required":true,"schema":{"type":"string","format":"uri","example":"https://example.com"},"index$":0},{"name":"timestamp","in":"query","description":"Timestamp in the format YYYYMMDDhhmmss to find the closest archived snapshot. If not specified, returns the most recent snapshot.","required":false,"schema":{"type":"string","pattern":"^[0-9]{4,14}$","example":"20150101"},"index$":1},{"name":"callback","in":"query","description":"Optional JSONP callback function name","required":false,"schema":{"type":"string","example":"myCallback"},"index$":2}],"securitySource":"unspecified"}})
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
  
