export class User {
  public constructor(init?: Partial<User>) {
    Object.assign(this, init);
  }

  public id: number;
  public userName: string;
  public fullName: string;
  public clinicAffiliated: string;
  public preferredContact: string;
}
