export class Profile {
  /**
   * @typedef ProfileData
   * @property {string} id
   * @property {string} email
   * @property {string} name
   * @property {string} picture
   * @property {string} bio
   * @property {string} coverImg
   * @property {string} github
   * @property {string} linkedin
   * @property {string} resume
   * @property {string} class 
   * @property {string} graduated
   * @property {string} subs
   * 
   *
   * 
   * @param {Profile} data
   */
  constructor(data) {
    this.id = data.id
    this.email = data.email
    this.name = data.name
    this.picture = data.picture
    // TODO add additional properties if needed
    this.bio = data.bio
    this.coverImg = data.coverImg
    this.github = data.github
    this.linkedin = data.linkedin
    this.resume = data.resume
    this.class = data.class
    this.graduated = data.graduated
    this.subs = data.subs

  }
}
