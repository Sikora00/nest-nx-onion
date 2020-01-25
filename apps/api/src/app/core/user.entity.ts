export class User {
  static i = 0;
  name: string;
  constructor() {
    User.i++;
    this.name = 'User' + User.i
  }
}
