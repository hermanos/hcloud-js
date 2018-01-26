const Pagination = require('../pagination')

class ServerList extends Pagination {
  constructor (endpoint, servers, meta) {
    super(meta)
    this.endpoint = endpoint
    this.servers = servers
  }

  next () {
    if (!this.nextPage) {
      return Promise.reject(new Error('Next page is not available'))
    }

    return this.endpoint.list({
      page: this.nextPage,
      perPage: this.perPage
    })
  }

  previous () {
    if (!this.previousPage) {
      return Promise.reject(new Error('Previous page is not available'))
    }

    return this.endpoint.list({
      page: this.previousPage,
      perPage: this.perPage
    })
  }

  last () {
    if (!this.lastPage) {
      return Promise.reject(new Error('Last page is not available'))
    }

    return this.endpoint.list({
      page: this.lastPage,
      perPage: this.perPage
    })
  }
}

module.exports = ServerList