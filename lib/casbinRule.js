"use strict";
// Copyright 2018 The Casbin Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
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
exports.createCasbinRule = exports.CasbinRule = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
let CasbinRule = class CasbinRule extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], CasbinRule.prototype, "ptype", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], CasbinRule.prototype, "v0", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], CasbinRule.prototype, "v1", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], CasbinRule.prototype, "v2", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], CasbinRule.prototype, "v3", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], CasbinRule.prototype, "v4", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], CasbinRule.prototype, "v5", void 0);
CasbinRule = __decorate([
    (0, sequelize_typescript_1.Table)({ timestamps: false })
], CasbinRule);
exports.CasbinRule = CasbinRule;
function createCasbinRule(tableName = 'casbin_rule', schema) {
    class CustomCasbinRule extends CasbinRule {
    }
    const options = (0, sequelize_typescript_1.getOptions)(CustomCasbinRule.prototype);
    options.tableName = tableName;
    options.schema = schema;
    (0, sequelize_typescript_1.setOptions)(CustomCasbinRule.prototype, options);
    return CustomCasbinRule;
}
exports.createCasbinRule = createCasbinRule;
