export declare class PasswordProxy {
    private readonly _logger;
    private readonly _recoveryToken;
    private readonly _userRecoveryToken;
    constructor(recoveryToken: Express.Recovery, userRecoveryToken: Express.Recovery);
    validateIfRecoveryTokenExpired(): this;
    validateIfGUIDIsEquals(): this;
    validateIfExpirationDateIsEquals(): this;
}
