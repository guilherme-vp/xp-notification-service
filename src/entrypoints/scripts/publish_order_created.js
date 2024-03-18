// This script runs inside Firebase Functions shell
/**
 * Usage:
 *   locally: `yarn shell < <relative-path-to-this-file>`
 */

const testData = {
  user: {
    email: 'test@gmail.com',
    name: 'Test User',
  },
  items: [{
    id: '12345',
    quantity: 5,
  }]
}

const stringfiedData = JSON.stringify(testData)

notifyOrderCreatedFunction({ data: Buffer(stringfiedData) })
