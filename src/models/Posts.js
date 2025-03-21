export class Post {
  constructor(data) {
    this.body = data.body
    this.imgUrl = data.imgUrl
    this.creatorId = data.creatorId
    this.likeids = data.likeids
    this.id = data.id
    this.creator = data.creator

  }
}