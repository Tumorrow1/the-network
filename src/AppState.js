import { reactive } from 'vue'
import { Profile } from './models/Profile.js'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  /**@type {import('@bcwdev/auth0provider-client').Identity} */
  identity: null,
  /** @type {import('./models/Account.js').Account} user info from the database*/
  account: null,
  /** @type {import('./models/Posts.js').Post[]} user info from the database*/
  posts: [],
  /** @type {import('./models/Profile.js').Profile} user info from the database*/
  profile: null,
  /** @type {import('./models/Posts.js').Post[]} user info from the database*/
  profileposts: [],
  currentPage: 0,
  totalPages: 0,

})

