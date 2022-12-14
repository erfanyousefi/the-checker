import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFiles } from '@nestjs/common';
import { ApiConsumes, ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { Types } from 'mongoose';
import { AuthDecorator } from 'src/common/decorators/auth.decorator';
import { SwaggerConsumes } from 'src/common/enums';
import { ROLES } from 'src/common/enums/role.enum';
import { RoomIdDto } from '../room/dto/room.dto';
import { CurtainsService } from './curtains.service';
import { CreateCurtainDto } from './dto/create-curtain.dto';
import { UpdateCurtainDto } from './dto/update-curtain.dto';
import { CurtainFileUpload } from './interceptors/upload-file-bathroom.interceptor';
import { ICurtainFilesUpload } from './interfaces/files.interface';

@Controller('curtains')
@ApiTags("Curtains")
@AuthDecorator(ROLES.CHECKER)
export class CurtainsController {
  constructor(private readonly curtainsService: CurtainsService) { }

  @Post("/:roomID")
  @ApiParam({ name: "roomID", type: "string", required: true })
  @ApiConsumes(SwaggerConsumes.MULTIPART)
  @ApiOperation({ summary: "checker role access" })
  @UseInterceptors(CurtainFileUpload)
  async create(
    @UploadedFiles() files: ICurtainFilesUpload,
    @Body() createCurtainDto: CreateCurtainDto,
    @Param() param: RoomIdDto
  ) {
    createCurtainDto.room = new Types.ObjectId(param.roomID)
    const result = await this.curtainsService.create(createCurtainDto, files);
  }

  @Get("/:roomID")
  @ApiParam({ name: "roomID", type: "string", required: true })
  @ApiOperation({ summary: "checker role access" })
  async getBathRoomDetail(@Param() param: RoomIdDto) {
    const roomId = new Types.ObjectId(param.roomID)
    const curtain = await this.curtainsService.getCurtainStatus(roomId)
    return { curtain }
  }
}
