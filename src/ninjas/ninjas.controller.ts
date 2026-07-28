import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { NinjasService } from './ninjas.service';
import { CreateNinjaDto } from './dto/create-ninja.dto';
import { UpdateNinjaDto } from './dto/update-ninja.dto';

@Controller('ninjas')
export class NinjasController {
    constructor(private readonly ninjasService: NinjasService) { }

    // GET  /ninjas?weapon=fast --> /ninjas
    @Get()
    getNinjas(@Query('weapon') weapon: string) {
        return this.ninjasService.getNinjas(weapon);
    }

    // GET /ninjas/:id --> /ninjas/:id
    @Get(":id")
    getNinja(@Param('id') id: string) {
        return this.ninjasService.getNinja(parseInt(id));
    }

    // POST /ninjas --> /ninjas
    @Post()
    createNinja(@Body() createNinjaDto: CreateNinjaDto) {
        return this.ninjasService.createNinja(createNinjaDto);
    }

    // PUT /ninjas/: --> {}
    @Put(":id")
    updateNinja(@Param('id') id: string, @Body() updateNinjaDto: UpdateNinjaDto) {
        return this.ninjasService.updateNinja(parseInt(id), updateNinjaDto);
    }

    // DELETE /ninjas/:id --> {}
    @Delete(":id")
    deleteNinja(@Param('id') id: string) {
        return this.ninjasService.deleteNinja(parseInt(id));
    }
}
