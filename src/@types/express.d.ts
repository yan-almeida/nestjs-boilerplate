declare namespace Express {
  interface User {
    userId: string;
    user: string;
    role: string;
  }

  interface Recovery {
    GUID: string;
    expirationDate: Date;
    user: Express.User;
  }
}
