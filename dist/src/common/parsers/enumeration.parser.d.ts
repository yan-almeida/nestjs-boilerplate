import { EnumerationDto } from '../dtos/enumeration.dto';
import { EnumerationEntity } from '../entities/enumeration.entity';
export declare class EnumerationParser {
    static toEnumerationDto(entity: EnumerationEntity): EnumerationDto;
}
