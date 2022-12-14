"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LevelSchema = exports.Level = void 0;
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
let Level = class Level {
};
__decorate([
    (0, mongoose_2.Prop)(),
    __metadata("design:type", String)
], Level.prototype, "title", void 0);
__decorate([
    (0, mongoose_2.Prop)({ ref: "User" }),
    __metadata("design:type", mongoose_1.default.Types.ObjectId)
], Level.prototype, "hotel", void 0);
Level = __decorate([
    (0, mongoose_2.Schema)()
], Level);
exports.Level = Level;
exports.LevelSchema = mongoose_2.SchemaFactory.createForClass(Level);
//# sourceMappingURL=level.entity.js.map