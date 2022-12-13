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
exports.CurtainSchema = exports.Curtain = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const index_schema_1 = require("../../generals/schemas/index.schema");
let CommentsClass = class CommentsClass extends mongoose_2.Document {
};
__decorate([
    (0, mongoose_1.Prop)({ type: index_schema_1.CommentsValueSchema }),
    __metadata("design:type", Object)
], CommentsClass.prototype, "curtainsNotClean", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: index_schema_1.CommentsValueSchema }),
    __metadata("design:type", Object)
], CommentsClass.prototype, "curtainsHaveWrinkles", void 0);
CommentsClass = __decorate([
    (0, mongoose_1.Schema)()
], CommentsClass);
const CommentsSchema = mongoose_1.SchemaFactory.createForClass(CommentsClass);
let Curtain = class Curtain {
};
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Curtain.prototype, "title", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: index_schema_1.TopQuestionSchema }),
    __metadata("design:type", Object)
], Curtain.prototype, "topQuestion", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: CommentsSchema }),
    __metadata("design:type", Object)
], Curtain.prototype, "comments", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: index_schema_1.DamageReportSchema }),
    __metadata("design:type", Object)
], Curtain.prototype, "damage", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: "User" }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], Curtain.prototype, "cleaner", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: "Room" }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], Curtain.prototype, "room", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: "User" }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], Curtain.prototype, "hotel", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: "User" }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], Curtain.prototype, "checker", void 0);
Curtain = __decorate([
    (0, mongoose_1.Schema)()
], Curtain);
exports.Curtain = Curtain;
exports.CurtainSchema = mongoose_1.SchemaFactory.createForClass(Curtain);
//# sourceMappingURL=curtains.entity.js.map