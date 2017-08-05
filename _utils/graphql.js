const axios = require('./axios')
const config = require('../config/')

module.exports = {
  fetchArticle (data) {
    let query = `
      query Article($id: String!) {
        article(id: $id) {
          id
          title
          content
          createdAt
          deleted
          type
          wordCount
          author
        }
      }
    `
    let payload = (data) => {
      return {
        query,
        variables: data
      }
    }

    return axios.post('https://app.ilifediary.com/origin/og/', payload(data))
  }
}