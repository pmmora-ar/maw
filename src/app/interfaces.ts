export interface User {
  name: string,
  alias: string,
  email: Email,
  userGroups: Array<UserGroup>,
}
export interface UserGroup {
  userIdList: Array<string>
}
export interface Email {
  address: string,
  verified?: boolean,
}
export interface Wish {
  content: string,
  public: boolean,
  groupId?: string,
  publishedDate: Date,
  expireDate: Date,
  subscriptions: Array<Subscript>
}
export interface Subscript {
  userId: string,
  location: GeoLocation,
  date: Date,
}
export interface GeoLocation {
  latitude: number,
  longitde: number,
}