import { Injectable } from '@nestjs/common';

@Injectable()
export class NinjasService {
    getAllNinjas(): string[] {
        return ['Ninja1', 'Ninja2', 'Ninja3'];
    }
}
