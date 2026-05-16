
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { WaybackMachineSDK } from '..'


describe('exists', async () => {

  test('test-mode', async () => {
    const testsdk = await WaybackMachineSDK.test()
    equal(null !== testsdk, true)
  })

})
