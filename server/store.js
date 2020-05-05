const storage = require('azure-storage')
const retry = new storage.LinearRetryPolicyFilter();
const service = storage.createTableService().withFilter(retry);
const table = 'tasks'

const init = async () => (
  new Promise((resolve, reject) => {
    service.createTableIfNotExists(table, (error, result, response) => {
      !error ? resolve() : reject()
    })
  })
)

module.exports = {
  init
}