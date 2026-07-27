import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { NinjasService } from './ninjas.service';
import { CreateNinjaDto } from './dto/create-ninja.dto';
import { UpdateNinjaDto } from './dto/update-ninja.dto';

@Controller('ninjas')
export class NinjasController {
    constructor(private readonly ninjasService: NinjasService) { }

    // GET  /ninjas?type=fast --> /ninjas
    @Get()
    getNinjas(@Query('type') type: string) {
        return [{
            type
        }];
    }

    // GET /ninjas/:id --> /ninjas/:id
    @Get(":id")
    getNinja(@Param('id') id: string) {
        return {
            id
        };
    }

    // POST /ninjas --> /ninjas
    @Post()
    createNinja(@Body() createNinjaDto: CreateNinjaDto) {
        return {
            name: createNinjaDto.name,
        };
    }

    // PUT /ninjas/: --> {}
    @Put(":id")
    updateNinja(@Param('id') id: string, @Body() updateNinjaDto: UpdateNinjaDto) {
        return {
            id,
            name: updateNinjaDto.name,
        };
    }

    // DELETE /ninjas/:id --> {}
    @Delete(":id")
    deleteNinja(@Param('id') id: string) {
        return {
            id
        };
    }
}
