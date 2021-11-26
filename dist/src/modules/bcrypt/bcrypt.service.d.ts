export declare class BcryptService {
    #private;
    private static SALT_ROUNDS;
    static hash(data: string, customSaltOrRounds?: number): Promise<string>;
    static hashSync(data: string, customSaltOrRounds?: number): string;
}
