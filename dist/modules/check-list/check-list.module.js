"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckListModule = void 0;
const common_1 = require("@nestjs/common");
const check_list_service_1 = require("./check-list.service");
const check_list_controller_1 = require("./check-list.controller");
const mongoose_1 = require("@nestjs/mongoose");
const check_list_entity_1 = require("./entities/check-list.entity");
const user_entity_1 = require("../user/entities/user.entity");
let CheckListModule = class CheckListModule {
};
CheckListModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: check_list_entity_1.CheckList.name, schema: check_list_entity_1.CheckListSchema },
                { name: user_entity_1.User.name, schema: user_entity_1.UserSchema }
            ])
        ],
        controllers: [check_list_controller_1.CheckListController],
        providers: [check_list_service_1.CheckListService]
    })
], CheckListModule);
exports.CheckListModule = CheckListModule;
//# sourceMappingURL=check-list.module.js.map