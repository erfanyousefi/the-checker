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
exports.CreateCleanerDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateCleanerDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ type: "string" }),
    (0, class_validator_1.Length)(3),
    __metadata("design:type", String)
], CreateCleanerDto.prototype, "fullname", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: "string", format: "binary", }),
    __metadata("design:type", String)
], CreateCleanerDto.prototype, "avatar", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "09:00" }),
    (0, class_validator_1.Length)(5, 5),
    __metadata("design:type", String)
], CreateCleanerDto.prototype, "startAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "18:20" }),
    (0, class_validator_1.Length)(5, 5),
    __metadata("design:type", String)
], CreateCleanerDto.prototype, "endAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.Length)(3),
    __metadata("design:type", String)
], CreateCleanerDto.prototype, "username", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.Length)(6, 16),
    __metadata("design:type", String)
], CreateCleanerDto.prototype, "password", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: "integer" }),
    __metadata("design:type", Number)
], CreateCleanerDto.prototype, "salaryPerRoom", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: "integer" }),
    __metadata("design:type", Number)
], CreateCleanerDto.prototype, "roomCountForCleanEachDay", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: "string" }),
    __metadata("design:type", String)
], CreateCleanerDto.prototype, "hotelID", void 0);
exports.CreateCleanerDto = CreateCleanerDto;
//# sourceMappingURL=create-cleaner.dto.js.map