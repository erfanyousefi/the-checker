import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FloorService } from './floor.service';
import { CreateFloorDto } from './dto/create-floor.dto';
import { UpdateFloorDto } from './dto/update-floor.dto';
import { ApiConsumes, ApiTags } from '@nestjs/swagger';
import { SwaggerConsumes } from 'src/common/enums';

@Controller('floor')
@ApiTags("Floor")
export class FloorController {
  constructor(private readonly floorService: FloorService) {}

  @Post()
  @ApiConsumes(SwaggerConsumes.MULTIPART)
  create(@Body() createFloorDto: CreateFloorDto) {
    return this.floorService.create(createFloorDto);
  }

  @Get()
  findAll() {
    return this.floorService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.floorService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFloorDto: UpdateFloorDto) {
    return this.floorService.update(+id, updateFloorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.floorService.remove(+id);
  }
}