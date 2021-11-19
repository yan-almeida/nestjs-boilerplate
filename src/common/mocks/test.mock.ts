import { PaginatedDto } from '../dtos/paginated.dto';

export function mockFunction<T, Y extends T[]>(
  implementation?: (...args: Y) => T,
) {
  return jest.fn<T, T[]>(implementation);
}

export class TestMock {
  static nonAffectedRows() {
    return {
      affected: 0,
    };
  }

  static createQueryBuilderSetup() {
    return jest.fn(() => ({
      delete: jest.fn().mockReturnThis(),
      innerJoinAndSelect: jest.fn().mockReturnThis(),
      innerJoin: jest.fn().mockReturnThis(),
      from: jest.fn().mockReturnThis(),
      where: jest.fn().mockReturnThis(),
      execute: jest.fn().mockReturnThis(),
      getOne: jest.fn().mockReturnThis(),
      orderBy: jest.fn().mockReturnThis(),
      take: () => ({
        skip: (cnt: number) => ({
          skip: cnt,
        }),
      }),
    }));
  }
  static mockedRepo<T = any>() {
    return {
      save: mockFunction<T, T[]>(),
      create: mockFunction<T, T[]>(),
      find: mockFunction<T, T[]>(),
      findOne: mockFunction<T, T[]>(),
      update: mockFunction<T, T[]>(),
      delete: mockFunction<T, T[]>(),
      createQueryBuilder: this.createQueryBuilderSetup(),
    };
  }
  static resultPaginate<T>(items: T[]): PaginatedDto<T> {
    return {
      items,
      meta: {
        totalItems: 0,
        itemCount: 0,
        itemsPerPage: 0,
        totalPages: 0,
        currentPage: 0,
      },
    };
  }
}
