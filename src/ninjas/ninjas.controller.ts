import { Body, Controller, Delete, Get, Param, Post, Put, Query, UseGuards, ValidationPipe } from '@nestjs/common';
import { NinjasService } from './ninjas.service';
import { CreateNinjaDto } from './dto/create-ninja.dto';
import { UpdateNinjaDto } from './dto/update-ninja.dto';
import { ParseIntPipe } from '@nestjs/common';
import { BeltGuard } from '../belt/belt.guard';

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
    getNinja(@Param('id', ParseIntPipe) id: number) {
        return this.ninjasService.getNinja(id);
    }

    // POST /ninjas --> /ninjas
    @Post()
    @UseGuards(BeltGuard)
    createNinja(@Body(new ValidationPipe()) createNinjaDto: CreateNinjaDto) {
        return this.ninjasService.createNinja(createNinjaDto);
    }

    // PUT /ninjas/: --> {}
    @Put(":id")
    updateNinja(@Param('id', ParseIntPipe) id: number, @Body() updateNinjaDto: UpdateNinjaDto) {
        return this.ninjasService.updateNinja((id), updateNinjaDto);
    }

    // DELETE /ninjas/:id --> {}
    @Delete(":id")
    deleteNinja(@Param('id') id: string) {
        return this.ninjasService.deleteNinja(parseInt(id));
    }
}
