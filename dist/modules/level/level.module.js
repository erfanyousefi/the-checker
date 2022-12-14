"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LevelModule = void 0;
const common_1 = require("@nestjs/common");
const level_service_1 = require("./level.service");
const level_controller_1 = require("./level.controller");
const mongoose_1 = require("@nestjs/mongoose");
const level_entity_1 = require("./entities/level.entity");
const room_entity_1 = require("../room/entities/room.entity");
const user_entity_1 = require("../user/entities/user.entity");
let LevelModule = class LevelModule {
};
LevelModule = __decorate([
    (0, common_1.Module)({
        imports: [mongoose_1.MongooseModule.forFeature([
                { name: level_entity_1.Level.name, schema: level_entity_1.LevelSchema },
                { name: room_entity_1.Room.name, schema: room_entity_1.RoomSchema },
                { name: user_entity_1.User.name, schema: user_entity_1.UserSchema },
            ])],
        controllers: [level_controller_1.LevelController],
        providers: [level_service_1.LevelService]
    })
], LevelModule);
exports.LevelModule = LevelModule;
//# sourceMappingURL=level.module.js.map