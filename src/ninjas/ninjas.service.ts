import { Injectable } from '@nestjs/common';
import { CreateNinjaDto } from './dto/create-ninja.dto';
import { UpdateNinjaDto } from './dto/update-ninja.dto';


type Ninja = {
    id: number;
    name: string;
    weapon: string;
};

@Injectable()
export class NinjasService {
    private ninjas: Ninja[] = [
        { id: 1, name: 'Ninja1', weapon: 'Sword' },
        { id: 2, name: 'Ninja2', weapon: 'Bow' },
        { id: 3, name: 'Ninja3', weapon: 'Nunchucks' },
        { id: 4, name: 'Ninja4', weapon: 'Katana' },
        { id: 5, name: 'Ninja5', weapon: 'Shuriken' },
        { id: 6, name: 'Ninja6', weapon: 'Nunchucks' },
        { id: 7, name: 'Ninja7', weapon: 'Katana' },
        { id: 8, name: 'Ninja8', weapon: 'Shuriken' },
        { id: 9, name: 'Ninja9', weapon: 'Nunchucks' },
        { id: 10, name: 'Ninja10', weapon: 'Katana' },
    ];

    getNinjas(weapon?: string): Ninja[] {
        if (weapon) {
            return this.ninjas.filter(ninja => ninja.weapon === weapon);
        }

        return this.ninjas;
    }

    getNinja(id: number): Ninja {
        const ninja = this.ninjas.find(ninja => ninja.id === id);
        if (!ninja) {
            throw new Error('Ninja not found');
        }
        return ninja;
    }

    createNinja(createNinjaDto: CreateNinjaDto): Ninja {
        const newNinja = {
            id: Date.now(),
            ...createNinjaDto,
        }
        this.ninjas.push(newNinja);

        return newNinja;
    }

    updateNinja(id: number, updatedNinjaDto: UpdateNinjaDto): Ninja {
        const ninja = this.getNinja(id);
        const updatedNinja = {
            ...ninja,
            ...updatedNinjaDto
        }

        this.ninjas = this.ninjas.map(ninja => ninja.id === updatedNinja.id ? updatedNinja : ninja)

        return updatedNinja
    }

    deleteNinja(id: number): void {
        this.getNinja(id);

        const index = this.ninjas.findIndex(ninja => ninja.id === id);
        this.ninjas.splice(index, 1);
    }

}
