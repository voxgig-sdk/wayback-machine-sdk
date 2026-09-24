
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { WaybackMachineSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = WaybackMachineSDK.test()
    equal(testsdk instanceof WaybackMachineSDK, true,
      'WaybackMachineSDK.test() must return a client synchronously')
  })

})
