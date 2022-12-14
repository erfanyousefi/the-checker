/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { FilterQuery, Model, Types } from 'mongoose';
import { CreateRoomDto } from './dto/create-room.dto';
import { UpdateRoomDto } from './dto/update-room.dto';
import { Room, RoomDocument } from './entities/room.entity';
import { Request } from 'express';
import { SendAlertDto, SetRoomStatus } from './dto/send-alert.dto';
import { CleaningHistoryDocument } from './entities/cleaning-history.entity';
export declare class AdminRoomService {
    private readonly adminRoomRepository;
    private readonly cleaningHistoryRepository;
    private request;
    constructor(adminRoomRepository: Model<RoomDocument>, cleaningHistoryRepository: Model<CleaningHistoryDocument>, request: Request);
    create(createRoomDto: CreateRoomDto): Promise<import("mongoose").Document<unknown, any, RoomDocument> & Room & Document & {
        _id: Types.ObjectId;
    }>;
    findAll(filter?: FilterQuery<RoomDocument>): Promise<any[]>;
    findOne(id: string): Promise<any>;
    update(id: string, updateRoomDto: UpdateRoomDto): Promise<import("mongodb").UpdateResult>;
    remove(id: string): Promise<import("mongodb").DeleteResult>;
    sendAlert(sendAlertDto: SendAlertDto): Promise<{
        message: string;
    }>;
    setRoomStatus(setRoomStatusDto: SetRoomStatus): Promise<{
        message: string;
    }>;
}
