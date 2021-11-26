/// <reference types="jest" />
import { PaginatedDto } from '../dtos/paginated.dto';
export declare function mockFunction<T, Y extends T[]>(implementation?: (...args: Y) => T): jest.Mock<T, T[]>;
export declare class TestMock {
    static nonAffectedRows(): {
        affected: number;
    };
    static createQueryBuilderSetup(): jest.Mock<{
        delete: jest.Mock<any, any>;
        innerJoinAndSelect: jest.Mock<any, any>;
        innerJoin: jest.Mock<any, any>;
        from: jest.Mock<any, any>;
        where: jest.Mock<any, any>;
        execute: jest.Mock<any, any>;
        getOne: jest.Mock<any, any>;
        orderBy: jest.Mock<any, any>;
        take: () => {
            skip: (cnt: number) => {
                skip: number;
            };
        };
    }, []>;
    static mockedRepo<T = any>(): {
        save: jest.Mock<T, T[]>;
        create: jest.Mock<T, T[]>;
        find: jest.Mock<T, T[]>;
        findOne: jest.Mock<T, T[]>;
        update: jest.Mock<T, T[]>;
        delete: jest.Mock<T, T[]>;
        createQueryBuilder: jest.Mock<{
            delete: jest.Mock<any, any>;
            innerJoinAndSelect: jest.Mock<any, any>;
            innerJoin: jest.Mock<any, any>;
            from: jest.Mock<any, any>;
            where: jest.Mock<any, any>;
            execute: jest.Mock<any, any>;
            getOne: jest.Mock<any, any>;
            orderBy: jest.Mock<any, any>;
            take: () => {
                skip: (cnt: number) => {
                    skip: number;
                };
            };
        }, []>;
    };
    static resultPaginate<T>(items: T[]): PaginatedDto<T>;
}
