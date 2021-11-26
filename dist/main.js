/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./libs/swagger-decorators/src/api-controller.decorator.ts":
/*!*****************************************************************!*\
  !*** ./libs/swagger-decorators/src/api-controller.decorator.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ApiController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
function ApiController(controllerName, customTagName) {
    return (target) => {
        (0, common_1.Controller)(controllerName)(target);
        (0, swagger_1.ApiTags)(customTagName !== null && customTagName !== void 0 ? customTagName : controllerName)(target);
    };
}
exports.ApiController = ApiController;


/***/ }),

/***/ "./libs/swagger-decorators/src/api-file.decorator.ts":
/*!***********************************************************!*\
  !*** ./libs/swagger-decorators/src/api-file.decorator.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ApiFile = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const ApiFile = (fileName = 'file', isArray = false) => (target, propertyKey, descriptor) => {
    if (isArray) {
        (0, swagger_1.ApiBody)({
            schema: {
                type: 'object',
                properties: {
                    [fileName]: {
                        type: 'array',
                        items: {
                            type: 'string',
                            format: 'binary',
                        },
                    },
                },
            },
        })(target, propertyKey, descriptor);
    }
    else {
        (0, swagger_1.ApiBody)({
            schema: {
                type: 'object',
                properties: {
                    [fileName]: {
                        type: 'string',
                        format: 'binary',
                    },
                },
            },
        })(target, propertyKey, descriptor);
    }
};
exports.ApiFile = ApiFile;


/***/ }),

/***/ "./libs/swagger-decorators/src/api-proproperty-uuid.decorator.ts":
/*!***********************************************************************!*\
  !*** ./libs/swagger-decorators/src/api-proproperty-uuid.decorator.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ApiPropertyUuid = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
const uuid_1 = __webpack_require__(/*! uuid */ "uuid");
const IS_API_PROPERTY_UUID = 'apiPropertyUuid';
function ApiPropertyUuid(options, version, validationOptions) {
    var _a;
    return (0, common_1.applyDecorators)((0, common_1.SetMetadata)(IS_API_PROPERTY_UUID, options), (0, swagger_1.ApiProperty)(Object.assign(Object.assign({}, options), { type: String, format: 'uuid', description: 'GUID - Identificador Único Universal', example: (0, uuid_1.v4)() })), (0, class_validator_1.IsUUID)(version !== null && version !== void 0 ? version : '4', Object.assign(Object.assign({}, validationOptions), { message: (_a = validationOptions === null || validationOptions === void 0 ? void 0 : validationOptions.message) !== null && _a !== void 0 ? _a : 'Formato de GUID inválido.' })));
}
exports.ApiPropertyUuid = ApiPropertyUuid;


/***/ }),

/***/ "./libs/swagger-decorators/src/bad-request-response.decorator.ts":
/*!***********************************************************************!*\
  !*** ./libs/swagger-decorators/src/bad-request-response.decorator.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BadRequestResponse = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const dtos_1 = __webpack_require__(/*! ./dtos */ "./libs/swagger-decorators/src/dtos/index.ts");
const IS_BAD_REQUEST_RESPONSE = 'badRequestResponse';
const BAD_REQUEST_MESSAGE = 'Response status code indicates that the server cannot or will not process the request due to something that is perceived to be a client error';
function BadRequestResponse(options) {
    var _a;
    return (0, common_1.applyDecorators)((0, common_1.SetMetadata)(IS_BAD_REQUEST_RESPONSE, options), (0, swagger_1.ApiBadRequestResponse)(Object.assign(Object.assign({}, options), { description: (_a = options === null || options === void 0 ? void 0 : options.description) !== null && _a !== void 0 ? _a : BAD_REQUEST_MESSAGE, type: dtos_1.ApiGenericErroDto })), (0, swagger_1.ApiOperation)({ summary: options === null || options === void 0 ? void 0 : options.description }));
}
exports.BadRequestResponse = BadRequestResponse;


/***/ }),

/***/ "./libs/swagger-decorators/src/created-response.decorator.ts":
/*!*******************************************************************!*\
  !*** ./libs/swagger-decorators/src/created-response.decorator.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreatedResponse = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const IS_CREATED_RESPONSE = 'createdResponse';
const CREATED_MESSAGE = 'Success status response code indicates that the request has succeeded and has led to the creation of a resource';
function CreatedResponse(options) {
    var _a;
    return (0, common_1.applyDecorators)((0, common_1.SetMetadata)(IS_CREATED_RESPONSE, options), (0, common_1.HttpCode)(common_1.HttpStatus.CREATED), (0, swagger_1.ApiCreatedResponse)(Object.assign(Object.assign({}, options), { description: (_a = options === null || options === void 0 ? void 0 : options.description) !== null && _a !== void 0 ? _a : CREATED_MESSAGE })), (0, swagger_1.ApiOperation)({ summary: options === null || options === void 0 ? void 0 : options.description }));
}
exports.CreatedResponse = CreatedResponse;


/***/ }),

/***/ "./libs/swagger-decorators/src/dtos/api-generic-error.dto.ts":
/*!*******************************************************************!*\
  !*** ./libs/swagger-decorators/src/dtos/api-generic-error.dto.ts ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ApiGenericErroDto = void 0;
const openapi = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
class ApiGenericErroDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { error: { required: true, type: () => String }, message: { required: true, type: () => String } };
    }
}
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Generic error',
    }),
    __metadata("design:type", String)
], ApiGenericErroDto.prototype, "error", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Generic message error',
    }),
    __metadata("design:type", String)
], ApiGenericErroDto.prototype, "message", void 0);
exports.ApiGenericErroDto = ApiGenericErroDto;


/***/ }),

/***/ "./libs/swagger-decorators/src/dtos/index.ts":
/*!***************************************************!*\
  !*** ./libs/swagger-decorators/src/dtos/index.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./api-generic-error.dto */ "./libs/swagger-decorators/src/dtos/api-generic-error.dto.ts"), exports);


/***/ }),

/***/ "./libs/swagger-decorators/src/forbidden-response.decorator.ts":
/*!*********************************************************************!*\
  !*** ./libs/swagger-decorators/src/forbidden-response.decorator.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ForbiddenResponse = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const dtos_1 = __webpack_require__(/*! ./dtos */ "./libs/swagger-decorators/src/dtos/index.ts");
const IS_FORBIDDEN_RESPONSE = 'forbiddenResponse';
const FORBIDDEN_MESSAGE = 'Client error status response code indicates that the server understood the request but refuses to authorize it';
function ForbiddenResponse(options) {
    var _a;
    return (0, common_1.applyDecorators)((0, common_1.SetMetadata)(IS_FORBIDDEN_RESPONSE, options), (0, swagger_1.ApiForbiddenResponse)(Object.assign(Object.assign({}, options), { description: (_a = options === null || options === void 0 ? void 0 : options.description) !== null && _a !== void 0 ? _a : FORBIDDEN_MESSAGE, type: dtos_1.ApiGenericErroDto })), (0, swagger_1.ApiOperation)({ summary: options === null || options === void 0 ? void 0 : options.description }));
}
exports.ForbiddenResponse = ForbiddenResponse;


/***/ }),

/***/ "./libs/swagger-decorators/src/index.ts":
/*!**********************************************!*\
  !*** ./libs/swagger-decorators/src/index.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./api-controller.decorator */ "./libs/swagger-decorators/src/api-controller.decorator.ts"), exports);
__exportStar(__webpack_require__(/*! ./api-file.decorator */ "./libs/swagger-decorators/src/api-file.decorator.ts"), exports);
__exportStar(__webpack_require__(/*! ./api-proproperty-uuid.decorator */ "./libs/swagger-decorators/src/api-proproperty-uuid.decorator.ts"), exports);
__exportStar(__webpack_require__(/*! ./bad-request-response.decorator */ "./libs/swagger-decorators/src/bad-request-response.decorator.ts"), exports);
__exportStar(__webpack_require__(/*! ./created-response.decorator */ "./libs/swagger-decorators/src/created-response.decorator.ts"), exports);
__exportStar(__webpack_require__(/*! ./forbidden-response.decorator */ "./libs/swagger-decorators/src/forbidden-response.decorator.ts"), exports);
__exportStar(__webpack_require__(/*! ./no-content-response.decorator */ "./libs/swagger-decorators/src/no-content-response.decorator.ts"), exports);
__exportStar(__webpack_require__(/*! ./not-found-response.decorator */ "./libs/swagger-decorators/src/not-found-response.decorator.ts"), exports);
__exportStar(__webpack_require__(/*! ./ok-response.decorator */ "./libs/swagger-decorators/src/ok-response.decorator.ts"), exports);
__exportStar(__webpack_require__(/*! ./paginated-ok-response.decorator */ "./libs/swagger-decorators/src/paginated-ok-response.decorator.ts"), exports);
__exportStar(__webpack_require__(/*! ./unauthorized-response.decorator */ "./libs/swagger-decorators/src/unauthorized-response.decorator.ts"), exports);
__exportStar(__webpack_require__(/*! ./unprocessable-entity-response.decorator */ "./libs/swagger-decorators/src/unprocessable-entity-response.decorator.ts"), exports);


/***/ }),

/***/ "./libs/swagger-decorators/src/no-content-response.decorator.ts":
/*!**********************************************************************!*\
  !*** ./libs/swagger-decorators/src/no-content-response.decorator.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NoContentResponse = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const IS_NO_CONTENT_RESPONSE = 'noContentResponse';
const NO_CONTENT_MESSAGE = `Success status response code indicates that a request has succeeded, but that the client doesn't need to navigate away from its current page`;
function NoContentResponse(options) {
    var _a;
    return (0, common_1.applyDecorators)((0, common_1.SetMetadata)(IS_NO_CONTENT_RESPONSE, options), (0, swagger_1.ApiNoContentResponse)(Object.assign(Object.assign({}, options), { description: (_a = options === null || options === void 0 ? void 0 : options.description) !== null && _a !== void 0 ? _a : NO_CONTENT_MESSAGE, type: null })), (0, swagger_1.ApiOperation)({ summary: options === null || options === void 0 ? void 0 : options.description }));
}
exports.NoContentResponse = NoContentResponse;


/***/ }),

/***/ "./libs/swagger-decorators/src/not-found-response.decorator.ts":
/*!*********************************************************************!*\
  !*** ./libs/swagger-decorators/src/not-found-response.decorator.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NotFoundResponse = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const IS_NOT_FOUND_RESPONSE = 'notFoundResponse';
const NOT_FOUND_MESSAGE = `Client error response code indicates that the server can't find the requested resource`;
function NotFoundResponse(options) {
    var _a;
    return (0, common_1.applyDecorators)((0, common_1.SetMetadata)(IS_NOT_FOUND_RESPONSE, options), (0, swagger_1.ApiNotFoundResponse)(Object.assign(Object.assign({}, options), { description: (_a = options === null || options === void 0 ? void 0 : options.description) !== null && _a !== void 0 ? _a : NOT_FOUND_MESSAGE, type: null })), (0, swagger_1.ApiOperation)({ summary: options === null || options === void 0 ? void 0 : options.description }));
}
exports.NotFoundResponse = NotFoundResponse;


/***/ }),

/***/ "./libs/swagger-decorators/src/ok-response.decorator.ts":
/*!**************************************************************!*\
  !*** ./libs/swagger-decorators/src/ok-response.decorator.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OkResponse = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const IS_OK_RESPONSE = 'okResponse';
const OK_MESSAGE = 'Success status response code indicates that the request has succeeded';
function OkResponse(options) {
    var _a, _b;
    return (0, common_1.applyDecorators)((0, common_1.SetMetadata)(IS_OK_RESPONSE, options), (0, common_1.HttpCode)(common_1.HttpStatus.OK), (0, swagger_1.ApiOkResponse)(Object.assign(Object.assign({}, options), { description: (_a = options === null || options === void 0 ? void 0 : options.description) !== null && _a !== void 0 ? _a : OK_MESSAGE })), (0, swagger_1.ApiOperation)({ summary: (_b = options === null || options === void 0 ? void 0 : options.description) !== null && _b !== void 0 ? _b : OK_MESSAGE }));
}
exports.OkResponse = OkResponse;


/***/ }),

/***/ "./libs/swagger-decorators/src/paginated-ok-response.decorator.ts":
/*!************************************************************************!*\
  !*** ./libs/swagger-decorators/src/paginated-ok-response.decorator.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PaginatedOkResponse = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const ok_response_decorator_1 = __webpack_require__(/*! ./ok-response.decorator */ "./libs/swagger-decorators/src/ok-response.decorator.ts");
const PaginatedOkResponse = (model, options) => {
    return (0, common_1.applyDecorators)((0, swagger_1.ApiExtraModels)(model), (0, ok_response_decorator_1.OkResponse)(Object.assign({ content: {
            'application-json': {
                schema: {
                    properties: {
                        items: {
                            type: 'array',
                            items: {
                                $ref: (0, swagger_1.getSchemaPath)(model),
                            },
                        },
                        meta: {
                            type: 'object',
                            properties: {
                                totalItems: {
                                    type: 'number',
                                    nullable: true,
                                },
                                itemCount: {
                                    type: 'number',
                                    nullable: true,
                                },
                                itemsPerPage: {
                                    type: 'number',
                                    nullable: true,
                                },
                                totalPages: {
                                    type: 'number',
                                    nullable: true,
                                },
                                currentPage: {
                                    type: 'number',
                                    nullable: true,
                                },
                            },
                        },
                    },
                },
            },
        } }, options)));
};
exports.PaginatedOkResponse = PaginatedOkResponse;


/***/ }),

/***/ "./libs/swagger-decorators/src/unauthorized-response.decorator.ts":
/*!************************************************************************!*\
  !*** ./libs/swagger-decorators/src/unauthorized-response.decorator.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UnauthorizedResponse = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const IS_UNAUTHORIZED_RESPONSE = 'unauthorizedResponse';
const UNAUTHORIZED_MESSAGE = 'Client error status response code indicates that the request has not been applied because it lacks valid authentication credentials for the target resource';
function UnauthorizedResponse(options) {
    var _a;
    return (0, common_1.applyDecorators)((0, common_1.SetMetadata)(IS_UNAUTHORIZED_RESPONSE, options), (0, swagger_1.ApiUnauthorizedResponse)(Object.assign(Object.assign({}, options), { description: (_a = options === null || options === void 0 ? void 0 : options.description) !== null && _a !== void 0 ? _a : UNAUTHORIZED_MESSAGE })), (0, swagger_1.ApiOperation)({ summary: options === null || options === void 0 ? void 0 : options.description }));
}
exports.UnauthorizedResponse = UnauthorizedResponse;


/***/ }),

/***/ "./libs/swagger-decorators/src/unprocessable-entity-response.decorator.ts":
/*!********************************************************************************!*\
  !*** ./libs/swagger-decorators/src/unprocessable-entity-response.decorator.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UnprocessableEntityResponse = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const IS_UNPROCESSABLE_ENTITY_RESPONSE = 'unprocessableEntityResponse';
const UNPROCESSABLE_ENTITY_MESSAGE = 'The HyperText Transfer Protocol (HTTP) `422 Unprocessable Entity` response status code indicates that the server understands the content type of the request entity, and the syntax of the request entity is correct, but it was unable to process the contained instructions';
function UnprocessableEntityResponse(options) {
    var _a, _b;
    return (0, common_1.applyDecorators)((0, common_1.SetMetadata)(IS_UNPROCESSABLE_ENTITY_RESPONSE, options), (0, swagger_1.ApiUnprocessableEntityResponse)(Object.assign(Object.assign({}, options), { description: (_a = options === null || options === void 0 ? void 0 : options.description) !== null && _a !== void 0 ? _a : UNPROCESSABLE_ENTITY_MESSAGE })), (0, swagger_1.ApiOperation)({
        summary: (_b = options === null || options === void 0 ? void 0 : options.description) !== null && _b !== void 0 ? _b : UNPROCESSABLE_ENTITY_MESSAGE,
    }));
}
exports.UnprocessableEntityResponse = UnprocessableEntityResponse;


/***/ }),

/***/ "./src/app.module.ts":
/*!***************************!*\
  !*** ./src/app.module.ts ***!
  \***************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppModule = void 0;
const mailer_1 = __webpack_require__(/*! @nestjs-modules/mailer */ "@nestjs-modules/mailer");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const serve_static_1 = __webpack_require__(/*! @nestjs/serve-static */ "@nestjs/serve-static");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const path_1 = __webpack_require__(/*! path */ "path");
const app_config_1 = __webpack_require__(/*! ./configs/app.config */ "./src/configs/app.config.ts");
const jwt_config_1 = __webpack_require__(/*! ./configs/jwt.config */ "./src/configs/jwt.config.ts");
const mailer_config_1 = __webpack_require__(/*! ./configs/mailer.config */ "./src/configs/mailer.config.ts");
const orm_config_1 = __webpack_require__(/*! ./configs/orm.config */ "./src/configs/orm.config.ts");
const logger_middleware_1 = __webpack_require__(/*! ./middlewares/logger.middleware */ "./src/middlewares/logger.middleware.ts");
const auth_module_1 = __webpack_require__(/*! ./modules/auth/auth.module */ "./src/modules/auth/auth.module.ts");
const password_module_1 = __webpack_require__(/*! ./modules/password/password.module */ "./src/modules/password/password.module.ts");
const user_module_1 = __webpack_require__(/*! ./modules/user/user.module */ "./src/modules/user/user.module.ts");
let AppModule = class AppModule {
    configure(consumer) {
        consumer.apply(logger_middleware_1.LoggerMiddleware).forRoutes('*');
    }
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                load: [jwt_config_1.default, app_config_1.default, mailer_config_1.default],
            }),
            serve_static_1.ServeStaticModule.forRoot({
                rootPath: (0, path_1.join)(__dirname, '..', 'public'),
            }),
            typeorm_1.TypeOrmModule.forRoot(orm_config_1.default),
            mailer_1.MailerModule.forRootAsync({
                imports: [config_1.ConfigService],
                inject: [config_1.ConfigService],
                useFactory: async (configService) => configService.get('mailer'),
            }),
            auth_module_1.AuthModule,
            password_module_1.PasswordModule,
            user_module_1.UserModule,
        ],
    })
], AppModule);
exports.AppModule = AppModule;


/***/ }),

/***/ "./src/app.roles.ts":
/*!**************************!*\
  !*** ./src/app.roles.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppRoles = void 0;
var AppRoles;
(function (AppRoles) {
    AppRoles["ADMIN"] = "ADMIN";
    AppRoles["USER"] = "USER";
})(AppRoles = exports.AppRoles || (exports.AppRoles = {}));


/***/ }),

/***/ "./src/common/builders/entity-filter.builder.ts":
/*!******************************************************!*\
  !*** ./src/common/builders/entity-filter.builder.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EntityFilterBuilder = void 0;
class EntityFilterBuilder {
    static withFilter(field, fnc) {
        if ((field !== undefined && field !== null) ||
            (Array.isArray(field) && field.length > 0)) {
            fnc(field);
        }
    }
    static withOrderBy(field, value, fnc) {
        if (field && field === value) {
            fnc(value);
        }
    }
    static getAsArray(value) {
        if (value === undefined || value === null) {
            return undefined;
        }
        if (Array.isArray(value)) {
            return value;
        }
        return [value];
    }
    static createLike(value) {
        return `%${value}%`;
    }
}
exports.EntityFilterBuilder = EntityFilterBuilder;


/***/ }),

/***/ "./src/common/builders/jwt-payload.builder.ts":
/*!****************************************************!*\
  !*** ./src/common/builders/jwt-payload.builder.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.JwtPayloadBuilder = void 0;
class JwtPayloadBuilder {
    static toUserLogin(user) {
        return {
            userId: user.id,
            user: user.fullName,
            role: user.role,
        };
    }
    static toRecoveryToken(user, GUID, expirationDate) {
        return {
            GUID,
            expirationDate,
            user: JwtPayloadBuilder.toUserLogin(user),
        };
    }
}
exports.JwtPayloadBuilder = JwtPayloadBuilder;


/***/ }),

/***/ "./src/common/dtos/pagination.dto.ts":
/*!*******************************************!*\
  !*** ./src/common/dtos/pagination.dto.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PaginationDto = void 0;
const openapi = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const class_transformer_1 = __webpack_require__(/*! class-transformer */ "class-transformer");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
const date_fns_1 = __webpack_require__(/*! date-fns */ "date-fns");
const entity_filter_builder_1 = __webpack_require__(/*! ../builders/entity-filter.builder */ "./src/common/builders/entity-filter.builder.ts");
const parse_number_transform_1 = __webpack_require__(/*! ../transformers/parse-number.transform */ "./src/common/transformers/parse-number.transform.ts");
const SUB_WEEK = 1;
class PaginationDto {
    getWithArray(value) {
        return entity_filter_builder_1.EntityFilterBuilder.getAsArray(value);
    }
    withFilter(field, fnc) {
        entity_filter_builder_1.EntityFilterBuilder.withFilter(field, fnc);
    }
    withOrderBy(field, value, fnc) {
        entity_filter_builder_1.EntityFilterBuilder.withOrderBy(field, value, fnc);
    }
    createLike(value) {
        return entity_filter_builder_1.EntityFilterBuilder.createLike(value);
    }
    createOrder(queryBuilder) {
        if (this.order) {
            Object.entries(this.order).forEach(([field, value]) => {
                queryBuilder.addOrderBy(`${queryBuilder.alias}.${field}`, value);
            });
        }
    }
    static _OPENAPI_METADATA_FACTORY() {
        return { page: { required: false, type: () => Number }, limit: { required: false, type: () => Number }, startAt: { required: false, type: () => String }, endAt: { required: false, type: () => String } };
    }
}
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Pagina atual',
        example: 1,
        default: 1,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Transform)(parse_number_transform_1.ParseNumberTransform),
    __metadata("design:type", Number)
], PaginationDto.prototype, "page", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Limite de entidades por página',
        example: 10,
        default: 10,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Transform)(parse_number_transform_1.ParseNumberTransform),
    __metadata("design:type", Number)
], PaginationDto.prototype, "limit", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Ordenação',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.Allow)(),
    __metadata("design:type", Object)
], PaginationDto.prototype, "order", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Entidades a partir de uma data',
        example: (0, date_fns_1.format)((0, date_fns_1.subWeeks)(new Date(), SUB_WEEK), 'yyyy-MM-dd'),
    }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], PaginationDto.prototype, "startAt", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Entidades até de uma data',
        example: (0, date_fns_1.format)(new Date(), 'yyyy-MM-dd'),
    }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], PaginationDto.prototype, "endAt", void 0);
exports.PaginationDto = PaginationDto;


/***/ }),

/***/ "./src/common/entities/unique-identifier.entity.ts":
/*!*********************************************************!*\
  !*** ./src/common/entities/unique-identifier.entity.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UniqueIdentifierEntity = void 0;
const openapi = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const uuid_1 = __webpack_require__(/*! uuid */ "uuid");
class UniqueIdentifierEntity {
    generateId() {
        if (this.id) {
            return;
        }
        this.id = (0, uuid_1.v4)();
    }
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => String }, createdAt: { required: true, type: () => Date }, updatedAt: { required: true, type: () => Date } };
    }
}
__decorate([
    (0, typeorm_1.PrimaryColumn)('uuid'),
    __metadata("design:type", String)
], UniqueIdentifierEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({
        name: 'created_at',
        type: 'timestamp',
    }),
    __metadata("design:type", Date)
], UniqueIdentifierEntity.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({
        name: 'updated_at',
        type: 'timestamp',
    }),
    __metadata("design:type", Date)
], UniqueIdentifierEntity.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.BeforeInsert)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UniqueIdentifierEntity.prototype, "generateId", null);
exports.UniqueIdentifierEntity = UniqueIdentifierEntity;


/***/ }),

/***/ "./src/common/exceptions/entity-conflict-error.exception.ts":
/*!******************************************************************!*\
  !*** ./src/common/exceptions/entity-conflict-error.exception.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EntityConflictError = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
class EntityConflictError extends common_1.HttpException {
    constructor(entityClassName, criterio) {
        super(`Dado já existente na entidade ${entityClassName.name}. Criterio: ${criterio}`, common_1.HttpStatus.CONFLICT);
    }
}
exports.EntityConflictError = EntityConflictError;


/***/ }),

/***/ "./src/common/exceptions/entity-not-found-error.exception.ts":
/*!*******************************************************************!*\
  !*** ./src/common/exceptions/entity-not-found-error.exception.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EntityNotFoundError = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
class EntityNotFoundError extends common_1.HttpException {
    constructor(entityClassName, criteria) {
        super(criteria
            ? `No data found on ${entityClassName.name} entity. Criteria: ${criteria}.`
            : `No data found on ${entityClassName.name} entity.`, common_1.HttpStatus.NOT_FOUND);
    }
}
exports.EntityNotFoundError = EntityNotFoundError;


/***/ }),

/***/ "./src/common/filters/bad-request.filter.ts":
/*!**************************************************!*\
  !*** ./src/common/filters/bad-request.filter.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BadRequestExceptionFilter = void 0;
const swagger_decorators_1 = __webpack_require__(/*! @app/swagger-decorators */ "./libs/swagger-decorators/src/index.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
let BadRequestExceptionFilter = class BadRequestExceptionFilter {
    catch(exception, host) {
        const context = host.switchToHttp();
        const response = context.getResponse();
        (0, swagger_decorators_1.BadRequestResponse)({ description: exception.message });
        return response.status(common_1.HttpStatus.BAD_REQUEST).json({
            error: 'Bad request',
            message: exception.getResponse().message,
        });
    }
};
BadRequestExceptionFilter = __decorate([
    (0, common_1.Catch)(common_1.BadRequestException)
], BadRequestExceptionFilter);
exports.BadRequestExceptionFilter = BadRequestExceptionFilter;


/***/ }),

/***/ "./src/common/filters/entity-conflict.filter.ts":
/*!******************************************************!*\
  !*** ./src/common/filters/entity-conflict.filter.ts ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EntityConflictExceptionFilter = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const entity_conflict_error_exception_1 = __webpack_require__(/*! ../exceptions/entity-conflict-error.exception */ "./src/common/exceptions/entity-conflict-error.exception.ts");
let EntityConflictExceptionFilter = class EntityConflictExceptionFilter {
    catch(exception, host) {
        const context = host.switchToHttp();
        const response = context.getResponse();
        (0, swagger_1.ApiConflictResponse)({ description: exception.message });
        return response.status(common_1.HttpStatus.CONFLICT).json({
            error: 'Conflict',
            message: exception.message,
        });
    }
};
EntityConflictExceptionFilter = __decorate([
    (0, common_1.Catch)(entity_conflict_error_exception_1.EntityConflictError)
], EntityConflictExceptionFilter);
exports.EntityConflictExceptionFilter = EntityConflictExceptionFilter;


/***/ }),

/***/ "./src/common/filters/entity-not-found.filter.ts":
/*!*******************************************************!*\
  !*** ./src/common/filters/entity-not-found.filter.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EntityNotFoundExceptionFilter = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const rxjs_1 = __webpack_require__(/*! rxjs */ "rxjs");
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
let EntityNotFoundExceptionFilter = class EntityNotFoundExceptionFilter {
    catch(exception, host) {
        const context = host.switchToHttp();
        const response = context.getResponse();
        (0, swagger_1.ApiNotFoundResponse)({ description: exception.message });
        return response.status(common_1.HttpStatus.NOT_FOUND).json({
            error: 'Not Found',
            message: exception.message,
        });
    }
};
EntityNotFoundExceptionFilter = __decorate([
    (0, common_1.Catch)(typeorm_1.EntityNotFoundError, rxjs_1.NotFoundError)
], EntityNotFoundExceptionFilter);
exports.EntityNotFoundExceptionFilter = EntityNotFoundExceptionFilter;


/***/ }),

/***/ "./src/common/filters/unauthorized.filter.ts":
/*!***************************************************!*\
  !*** ./src/common/filters/unauthorized.filter.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UnauthorizedExceptionFilter = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
let UnauthorizedExceptionFilter = class UnauthorizedExceptionFilter {
    catch(exception, host) {
        const context = host.switchToHttp();
        const response = context.getResponse();
        (0, swagger_1.ApiUnauthorizedResponse)({ description: exception.message });
        return response.status(common_1.HttpStatus.UNAUTHORIZED).json({
            error: 'Unauthorized',
            message: 'Você não está autorizado.',
        });
    }
};
UnauthorizedExceptionFilter = __decorate([
    (0, common_1.Catch)(common_1.UnauthorizedException)
], UnauthorizedExceptionFilter);
exports.UnauthorizedExceptionFilter = UnauthorizedExceptionFilter;


/***/ }),

/***/ "./src/common/filters/unprocessable-entity.filter.ts":
/*!***********************************************************!*\
  !*** ./src/common/filters/unprocessable-entity.filter.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UnprocessableEntityExceptionFilter = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
let UnprocessableEntityExceptionFilter = class UnprocessableEntityExceptionFilter {
    catch(exception, host) {
        const context = host.switchToHttp();
        const response = context.getResponse();
        (0, swagger_1.ApiUnprocessableEntityResponse)({ description: exception.message });
        return response.status(common_1.HttpStatus.UNPROCESSABLE_ENTITY).json({
            error: 'Unprocessable entity',
            message: exception.message,
        });
    }
};
UnprocessableEntityExceptionFilter = __decorate([
    (0, common_1.Catch)(common_1.UnprocessableEntityException)
], UnprocessableEntityExceptionFilter);
exports.UnprocessableEntityExceptionFilter = UnprocessableEntityExceptionFilter;


/***/ }),

/***/ "./src/common/parsers/pagination.parser.ts":
/*!*************************************************!*\
  !*** ./src/common/parsers/pagination.parser.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PaginationParser = void 0;
class PaginationParser {
    static toPagination(paginate, mapperFn) {
        return {
            items: paginate.items.map(mapperFn),
            meta: paginate.meta,
        };
    }
}
exports.PaginationParser = PaginationParser;


/***/ }),

/***/ "./src/common/parsers/typeorm-column.parser.ts":
/*!*****************************************************!*\
  !*** ./src/common/parsers/typeorm-column.parser.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TypeOrmColumnParser = void 0;
const typeorm_encrypted_1 = __webpack_require__(/*! typeorm-encrypted */ "typeorm-encrypted");
class TypeOrmColumnParser {
    static toTransformer(options) {
        if (options && options.transformer) {
            return options.transformer;
        }
        return {
            to: (value) => {
                if (value && typeof value === 'string') {
                    return value.trim();
                }
                return value;
            },
            from: (value) => value,
        };
    }
    static toEncryptedTransformer() {
        return new typeorm_encrypted_1.EncryptionTransformer({
            key: 'e41c966f21f9e1577802463f8924e6a3fe3e9751f201304213b2f845d8841d61',
            algorithm: 'aes-256-cbc',
            ivLength: 16,
            iv: 'ff5ac19190424b1d88f9419ef949ae56',
        });
    }
    static toName(propertyKey, options) {
        if (options && options.name) {
            return options.name;
        }
        return this.camelToSnakeCase(propertyKey);
    }
    static camelToSnakeCase(value) {
        const toSnakeCase = value.replace(/[A-Z]/g, (x) => `_${x.toLowerCase()}`);
        return toSnakeCase;
    }
}
exports.TypeOrmColumnParser = TypeOrmColumnParser;


/***/ }),

/***/ "./src/common/transformers/decrypted-transform.ts":
/*!********************************************************!*\
  !*** ./src/common/transformers/decrypted-transform.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DecryptedTransform = void 0;
const typeorm_column_parser_1 = __webpack_require__(/*! ../parsers/typeorm-column.parser */ "./src/common/parsers/typeorm-column.parser.ts");
const DecryptedTransform = (property) => typeorm_column_parser_1.TypeOrmColumnParser.toEncryptedTransformer().to(property.value);
exports.DecryptedTransform = DecryptedTransform;


/***/ }),

/***/ "./src/common/transformers/keep-all-numbers.transform.ts":
/*!***************************************************************!*\
  !*** ./src/common/transformers/keep-all-numbers.transform.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.KeepAllNumbersTransform = void 0;
const KeepAllNumbersTransform = (property) => {
    return property.value.replace(/\D+/g, '');
};
exports.KeepAllNumbersTransform = KeepAllNumbersTransform;


/***/ }),

/***/ "./src/common/transformers/lower-case.transform.ts":
/*!*********************************************************!*\
  !*** ./src/common/transformers/lower-case.transform.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LowerCaseTransform = void 0;
const LowerCaseTransform = (property) => {
    return String(property.value).toLocaleLowerCase();
};
exports.LowerCaseTransform = LowerCaseTransform;


/***/ }),

/***/ "./src/common/transformers/parse-number.transform.ts":
/*!***********************************************************!*\
  !*** ./src/common/transformers/parse-number.transform.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ParseNumberTransform = void 0;
const ParseNumberTransform = (property) => {
    return Number(property.value);
};
exports.ParseNumberTransform = ParseNumberTransform;


/***/ }),

/***/ "./src/configs/app.config.ts":
/*!***********************************!*\
  !*** ./src/configs/app.config.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
exports["default"] = (0, config_1.registerAs)('app', () => {
    return {
        port: parseInt(process.env.PORT) || 3030,
        urls: {
            api: process.env.API_URL || 'http://localhost:3030',
            web: process.env.WEB_URL || 'http://localhost:3001',
        },
    };
});


/***/ }),

/***/ "./src/configs/jwt.config.ts":
/*!***********************************!*\
  !*** ./src/configs/jwt.config.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
exports["default"] = (0, config_1.registerAs)('jwt', () => {
    return {
        secret: process.env.JWT_SECRET || 'fake_secret_bf0f3cf36e',
        signOptions: {
            expiresIn: process.env.JWT_EXPIRES_IN || '10 days',
        },
    };
});


/***/ }),

/***/ "./src/configs/mailer.config.ts":
/*!**************************************!*\
  !*** ./src/configs/mailer.config.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const handlebars_adapter_1 = __webpack_require__(/*! @nestjs-modules/mailer/dist/adapters/handlebars.adapter */ "@nestjs-modules/mailer/dist/adapters/handlebars.adapter");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const path_1 = __webpack_require__(/*! path */ "path");
exports["default"] = (0, config_1.registerAs)('mailer', () => {
    return {
        transport: {
            host: 'smtp.mailtrap.io',
            port: 2525,
            ignoreTLS: true,
            secure: false,
            auth: {
                user: process.env.MAILDEV_INCOMING_USER || 'fcd6797c1e2719',
                pass: process.env.MAILDEV_INCOMING_PASS || '06e0020021f726',
            },
        },
        defaults: {
            from: '"No Reply" <no-reply@localhost>',
        },
        preview: true,
        template: {
            dir: (0, path_1.join)(__dirname, '../templates/'),
            adapter: new handlebars_adapter_1.HandlebarsAdapter(),
            options: {
                strict: true,
            },
        },
    };
});


/***/ }),

/***/ "./src/configs/orm.config.ts":
/*!***********************************!*\
  !*** ./src/configs/orm.config.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const path_1 = __webpack_require__(/*! path */ "path");
exports["default"] = {
    type: 'postgres',
    host: process.env.DB_HOST || 'tuffi.db.elephantsql.com',
    port: process.env.DB_PORT || 5432,
    username: process.env.DB_USERNAME || 'zgxpwzyc',
    password: process.env.DB_PASSWORD || 'ShTXC_ozcNyXceKeLndBtSWZvOpsUy4r',
    database: process.env.DB_DATABASE || 'zgxpwzyc',
    entities: [process.env.DB_ENTITIES || 'dist/**/*.entity.js'],
    autoLoadEntities: true,
    synchronize: false,
    dropSchema: false,
    migrationsRun: true,
    logging: true,
    logger: 'advanced-console',
    entityPrefix: 'tb_',
    migrations: [
        (0, path_1.join)(__dirname, process.env.DB_MIGRATIONS || '../migrations/*{.ts,.js}'),
    ],
    cli: {
        migrationsDir: process.env.DB_ENTITIES_DIR || './src/migrations',
    },
    seeds: [(0, path_1.join)(__dirname, process.env.DB_SEEDS || '../seeds/*.seed.{.ts,.js}')],
};


/***/ }),

/***/ "./src/decorators/encrypted-column.decorator.ts":
/*!******************************************************!*\
  !*** ./src/decorators/encrypted-column.decorator.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EncryptedColumn = void 0;
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const typeorm_column_parser_1 = __webpack_require__(/*! ../common/parsers/typeorm-column.parser */ "./src/common/parsers/typeorm-column.parser.ts");
function EncryptedColumn(options) {
    return function (target, propertyKey) {
        (0, typeorm_1.Column)(Object.assign(Object.assign({}, options), { name: typeorm_column_parser_1.TypeOrmColumnParser.toName(propertyKey, options), transformer: typeorm_column_parser_1.TypeOrmColumnParser.toEncryptedTransformer() }))(target, propertyKey);
    };
}
exports.EncryptedColumn = EncryptedColumn;


/***/ }),

/***/ "./src/decorators/jwt-guard.decorator.ts":
/*!***********************************************!*\
  !*** ./src/decorators/jwt-guard.decorator.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.JwtGuardSetup = void 0;
const swagger_decorators_1 = __webpack_require__(/*! @app/swagger-decorators */ "./libs/swagger-decorators/src/index.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const jwt_auth_guard_1 = __webpack_require__(/*! ../guards/jwt-auth.guard */ "./src/guards/jwt-auth.guard.ts");
const IS_JWT_AUTH_GUARD = 'jwtAuthGuard';
function JwtGuardSetup() {
    return (0, common_1.applyDecorators)((0, common_1.SetMetadata)(IS_JWT_AUTH_GUARD, null), (0, swagger_1.ApiBearerAuth)(), (0, swagger_decorators_1.UnauthorizedResponse)(), (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard));
}
exports.JwtGuardSetup = JwtGuardSetup;


/***/ }),

/***/ "./src/decorators/normalized-column.decorator.ts":
/*!*******************************************************!*\
  !*** ./src/decorators/normalized-column.decorator.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NormalizedColumn = void 0;
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const typeorm_column_parser_1 = __webpack_require__(/*! ../common/parsers/typeorm-column.parser */ "./src/common/parsers/typeorm-column.parser.ts");
function NormalizedColumn(options) {
    return function (target, propertyKey) {
        (0, typeorm_1.Column)(Object.assign(Object.assign({}, options), { transformer: typeorm_column_parser_1.TypeOrmColumnParser.toTransformer(propertyKey), name: typeorm_column_parser_1.TypeOrmColumnParser.toName(propertyKey, options) }))(target, propertyKey);
    };
}
exports.NormalizedColumn = NormalizedColumn;


/***/ }),

/***/ "./src/decorators/public-route.decorator.ts":
/*!**************************************************!*\
  !*** ./src/decorators/public-route.decorator.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Public = exports.IS_PUBLIC_KEY = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
exports.IS_PUBLIC_KEY = 'isPublic';
const Public = () => (0, common_1.SetMetadata)(exports.IS_PUBLIC_KEY, true);
exports.Public = Public;


/***/ }),

/***/ "./src/guards/jwt-auth.guard.ts":
/*!**************************************!*\
  !*** ./src/guards/jwt-auth.guard.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.JwtAuthGuard = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const core_1 = __webpack_require__(/*! @nestjs/core */ "@nestjs/core");
const passport_1 = __webpack_require__(/*! @nestjs/passport */ "@nestjs/passport");
const public_route_decorator_1 = __webpack_require__(/*! ../decorators/public-route.decorator */ "./src/decorators/public-route.decorator.ts");
let JwtAuthGuard = class JwtAuthGuard extends (0, passport_1.AuthGuard)('jwt') {
    constructor(_reflector) {
        super();
        this._reflector = _reflector;
    }
    canActivate(context) {
        const isPublic = this._reflector.getAllAndOverride(public_route_decorator_1.IS_PUBLIC_KEY, [
            context.getHandler(),
            context.getClass(),
        ]);
        if (isPublic) {
            return true;
        }
        return super.canActivate(context);
    }
    handleRequest(err, user) {
        if (err || !user) {
            throw err || new common_1.UnauthorizedException();
        }
        return user;
    }
};
JwtAuthGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [core_1.Reflector])
], JwtAuthGuard);
exports.JwtAuthGuard = JwtAuthGuard;


/***/ }),

/***/ "./src/middlewares/logger.middleware.ts":
/*!**********************************************!*\
  !*** ./src/middlewares/logger.middleware.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _LoggerMiddleware_logger;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LoggerMiddleware = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
let LoggerMiddleware = class LoggerMiddleware {
    constructor() {
        _LoggerMiddleware_logger.set(this, new common_1.Logger('HTTP'));
    }
    use(request, response, next) {
        if (process.env.DISABLE_LOGGER) {
            next();
        }
        const { method, originalUrl } = request;
        const startingRequest = Date.now();
        response.on('finish', () => {
            __classPrivateFieldGet(this, _LoggerMiddleware_logger, "f").verbose(`${method}: ${originalUrl}`);
            __classPrivateFieldGet(this, _LoggerMiddleware_logger, "f").verbose(`Tempo de resposta: ${Date.now() - startingRequest}ms`);
        });
        next();
    }
};
_LoggerMiddleware_logger = new WeakMap();
LoggerMiddleware = __decorate([
    (0, common_1.Injectable)()
], LoggerMiddleware);
exports.LoggerMiddleware = LoggerMiddleware;


/***/ }),

/***/ "./src/modules/auth/auth.controller.ts":
/*!*********************************************!*\
  !*** ./src/modules/auth/auth.controller.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthController = void 0;
const openapi = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const swagger_decorators_1 = __webpack_require__(/*! @app/swagger-decorators */ "./libs/swagger-decorators/src/index.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const jwt_auth_guard_1 = __webpack_require__(/*! ../../guards/jwt-auth.guard */ "./src/guards/jwt-auth.guard.ts");
const auth_service_1 = __webpack_require__(/*! ./auth.service */ "./src/modules/auth/auth.service.ts");
const authed_dto_1 = __webpack_require__(/*! ./dto/authed.dto */ "./src/modules/auth/dto/authed.dto.ts");
const login_auth_dto_1 = __webpack_require__(/*! ./dto/login-auth.dto */ "./src/modules/auth/dto/login-auth.dto.ts");
const auth_parser_1 = __webpack_require__(/*! ./parsers/auth.parser */ "./src/modules/auth/parsers/auth.parser.ts");
let AuthController = class AuthController {
    constructor(_authService) {
        this._authService = _authService;
    }
    async create(dto) {
        const loggedUser = await this._authService.loginUser(dto.email, dto.password);
        return auth_parser_1.AuthParser.toAuthedDto(loggedUser.user, loggedUser.token);
    }
    getProfile(req) {
        var _a;
        return (_a = req.user) !== null && _a !== void 0 ? _a : null;
    }
};
__decorate([
    (0, common_1.Post)('sign-in'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_decorators_1.OkResponse)({
        description: 'Autenticação',
        type: authed_dto_1.AuthedDto,
    }),
    (0, swagger_decorators_1.UnauthorizedResponse)(),
    (0, swagger_decorators_1.BadRequestResponse)(),
    openapi.ApiResponse({ status: common_1.HttpStatus.OK, type: __webpack_require__(/*! ./dto/authed.dto */ "./src/modules/auth/dto/authed.dto.ts").AuthedDto }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [login_auth_dto_1.LoginAuthDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('profile'),
    (0, swagger_decorators_1.OkResponse)({
        description: 'Verificação de token',
    }),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_decorators_1.UnauthorizedResponse)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "getProfile", null);
AuthController = __decorate([
    (0, swagger_decorators_1.ApiController)('auth'),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], AuthController);
exports.AuthController = AuthController;


/***/ }),

/***/ "./src/modules/auth/auth.module.ts":
/*!*****************************************!*\
  !*** ./src/modules/auth/auth.module.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const jwt_1 = __webpack_require__(/*! @nestjs/jwt */ "@nestjs/jwt");
const passport_1 = __webpack_require__(/*! @nestjs/passport */ "@nestjs/passport");
const user_module_1 = __webpack_require__(/*! ../user/user.module */ "./src/modules/user/user.module.ts");
const auth_controller_1 = __webpack_require__(/*! ./auth.controller */ "./src/modules/auth/auth.controller.ts");
const auth_service_1 = __webpack_require__(/*! ./auth.service */ "./src/modules/auth/auth.service.ts");
const jwt_strategy_1 = __webpack_require__(/*! ./strategies/jwt.strategy */ "./src/modules/auth/strategies/jwt.strategy.ts");
let AuthModule = class AuthModule {
};
AuthModule = __decorate([
    (0, common_1.Module)({
        imports: [
            user_module_1.UserModule,
            passport_1.PassportModule,
            jwt_1.JwtModule.registerAsync({
                inject: [config_1.ConfigService],
                useFactory: async (configService) => configService.get('jwt'),
            }),
        ],
        controllers: [auth_controller_1.AuthController],
        providers: [auth_service_1.AuthService, jwt_strategy_1.JwtStrategy],
        exports: [auth_service_1.AuthService, jwt_1.JwtModule],
    })
], AuthModule);
exports.AuthModule = AuthModule;


/***/ }),

/***/ "./src/modules/auth/auth.service.ts":
/*!******************************************!*\
  !*** ./src/modules/auth/auth.service.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _AuthService_instances, _AuthService_validateUserPassword, _AuthService_generateToken;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const jwt_1 = __webpack_require__(/*! @nestjs/jwt */ "@nestjs/jwt");
const bcrypt_1 = __webpack_require__(/*! bcrypt */ "bcrypt");
const jwt_payload_builder_1 = __webpack_require__(/*! ../../common/builders/jwt-payload.builder */ "./src/common/builders/jwt-payload.builder.ts");
const user_service_1 = __webpack_require__(/*! ../user/user.service */ "./src/modules/user/user.service.ts");
let AuthService = class AuthService {
    constructor(_userService, _jwtService) {
        this._userService = _userService;
        this._jwtService = _jwtService;
        _AuthService_instances.add(this);
    }
    async loginUser(email, password) {
        const user = await this._userService.findOneByEmail(email);
        if (!user) {
            throw new common_1.UnauthorizedException();
        }
        await __classPrivateFieldGet(this, _AuthService_instances, "m", _AuthService_validateUserPassword).call(this, password, user.password);
        const token = __classPrivateFieldGet(this, _AuthService_instances, "m", _AuthService_generateToken).call(this, user);
        return {
            user,
            token,
        };
    }
};
_AuthService_instances = new WeakSet(), _AuthService_validateUserPassword = async function _AuthService_validateUserPassword(plainPass, hashedPass) {
    const user = await (0, bcrypt_1.compare)(plainPass, hashedPass);
    if (!user) {
        throw new common_1.UnauthorizedException();
    }
}, _AuthService_generateToken = function _AuthService_generateToken(user) {
    const payload = jwt_payload_builder_1.JwtPayloadBuilder.toUserLogin(user);
    return this._jwtService.sign(payload);
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_service_1.UserService,
        jwt_1.JwtService])
], AuthService);
exports.AuthService = AuthService;


/***/ }),

/***/ "./src/modules/auth/dto/authed.dto.ts":
/*!********************************************!*\
  !*** ./src/modules/auth/dto/authed.dto.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthedDto = void 0;
const openapi = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const user_dto_1 = __webpack_require__(/*! src/modules/user/dto/user.dto */ "./src/modules/user/dto/user.dto.ts");
class AuthedDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { user: { required: true, type: () => __webpack_require__(/*! ../../user/dto/user.dto */ "./src/modules/user/dto/user.dto.ts").UserDto }, token: { required: true, type: () => String } };
    }
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", user_dto_1.UserDto)
], AuthedDto.prototype, "user", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], AuthedDto.prototype, "token", void 0);
exports.AuthedDto = AuthedDto;


/***/ }),

/***/ "./src/modules/auth/dto/login-auth.dto.ts":
/*!************************************************!*\
  !*** ./src/modules/auth/dto/login-auth.dto.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LoginAuthDto = void 0;
const openapi = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const class_transformer_1 = __webpack_require__(/*! class-transformer */ "class-transformer");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
const lower_case_transform_1 = __webpack_require__(/*! ../../../common/transformers/lower-case.transform */ "./src/common/transformers/lower-case.transform.ts");
class LoginAuthDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { email: { required: true, type: () => String, minLength: 2 }, password: { required: true, type: () => String, minLength: 2 } };
    }
}
__decorate([
    (0, class_validator_1.IsEmail)({}, { message: 'E-mail digitado é inválido' }),
    (0, class_validator_1.MinLength)(2, { message: 'O nome deve possuir no mínimo 2 caracteres.' }),
    (0, swagger_1.ApiProperty)(),
    (0, class_transformer_1.Transform)(lower_case_transform_1.LowerCaseTransform),
    __metadata("design:type", String)
], LoginAuthDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'A senha é obrigatória.' }),
    (0, class_validator_1.MinLength)(2, { message: 'A senha deve possuir no mínimo 2 caracteres.' }),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], LoginAuthDto.prototype, "password", void 0);
exports.LoginAuthDto = LoginAuthDto;


/***/ }),

/***/ "./src/modules/auth/dto/recovery-password.dto.ts":
/*!*******************************************************!*\
  !*** ./src/modules/auth/dto/recovery-password.dto.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RecoveryPasswordDto = void 0;
const openapi = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const class_transformer_1 = __webpack_require__(/*! class-transformer */ "class-transformer");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
const lower_case_transform_1 = __webpack_require__(/*! ../../../common/transformers/lower-case.transform */ "./src/common/transformers/lower-case.transform.ts");
class RecoveryPasswordDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { email: { required: true, type: () => String, minLength: 2 } };
    }
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'mail@mail.com' }),
    (0, class_validator_1.IsEmail)({}, { message: 'E-mail digitado é inválido' }),
    (0, class_validator_1.MinLength)(2, { message: 'O nome deve possuir no mínimo 2 caracteres.' }),
    (0, swagger_1.ApiProperty)(),
    (0, class_transformer_1.Transform)(lower_case_transform_1.LowerCaseTransform),
    __metadata("design:type", String)
], RecoveryPasswordDto.prototype, "email", void 0);
exports.RecoveryPasswordDto = RecoveryPasswordDto;


/***/ }),

/***/ "./src/modules/auth/parsers/auth.parser.ts":
/*!*************************************************!*\
  !*** ./src/modules/auth/parsers/auth.parser.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthParser = void 0;
const user_parser_1 = __webpack_require__(/*! ../../user/parsers/user.parser */ "./src/modules/user/parsers/user.parser.ts");
class AuthParser {
    static toAuthedDto(user, token) {
        return {
            user: user_parser_1.UserParser.toUserDto(user),
            token,
        };
    }
}
exports.AuthParser = AuthParser;


/***/ }),

/***/ "./src/modules/auth/strategies/jwt.strategy.ts":
/*!*****************************************************!*\
  !*** ./src/modules/auth/strategies/jwt.strategy.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.JwtStrategy = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const passport_1 = __webpack_require__(/*! @nestjs/passport */ "@nestjs/passport");
const passport_jwt_1 = __webpack_require__(/*! passport-jwt */ "passport-jwt");
let JwtStrategy = class JwtStrategy extends (0, passport_1.PassportStrategy)(passport_jwt_1.Strategy) {
    constructor() {
        super({
            jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: process.env.JWT_SECRET || 'fake_secret_bf0f3cf36e',
        });
    }
    async validate(payload) {
        return payload;
    }
};
JwtStrategy = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], JwtStrategy);
exports.JwtStrategy = JwtStrategy;


/***/ }),

/***/ "./src/modules/bcrypt/bcrypt.service.ts":
/*!**********************************************!*\
  !*** ./src/modules/bcrypt/bcrypt.service.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _a, _BcryptService_genSalts;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BcryptService = void 0;
const bcrypt_1 = __webpack_require__(/*! bcrypt */ "bcrypt");
class BcryptService {
    static hash(data, customSaltOrRounds) {
        return (0, bcrypt_1.hash)(data, __classPrivateFieldGet(BcryptService, _a, "m", _BcryptService_genSalts).call(BcryptService, customSaltOrRounds));
    }
    static hashSync(data, customSaltOrRounds) {
        return (0, bcrypt_1.hashSync)(data, __classPrivateFieldGet(BcryptService, _a, "m", _BcryptService_genSalts).call(BcryptService, customSaltOrRounds));
    }
}
exports.BcryptService = BcryptService;
_a = BcryptService, _BcryptService_genSalts = function _BcryptService_genSalts(customSaltOrRounds) {
    return (0, bcrypt_1.genSaltSync)(customSaltOrRounds !== null && customSaltOrRounds !== void 0 ? customSaltOrRounds : BcryptService.SALT_ROUNDS);
};
BcryptService.SALT_ROUNDS = 10;


/***/ }),

/***/ "./src/modules/password/dtos/recovery-password-confirm.dto.ts":
/*!********************************************************************!*\
  !*** ./src/modules/password/dtos/recovery-password-confirm.dto.ts ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RecoveryPasswordConfirmDto = void 0;
const openapi = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
const Faker = __webpack_require__(/*! faker-br */ "faker-br");
class RecoveryPasswordConfirmDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { recoveryToken: { required: true, type: () => String }, newPassword: { required: true, type: () => String, minLength: 5 } };
    }
}
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',
    }),
    (0, class_validator_1.IsJWT)({ message: 'Json Web Token é inválido.' }),
    __metadata("design:type", String)
], RecoveryPasswordConfirmDto.prototype, "recoveryToken", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: Faker.internet.password() }),
    (0, class_validator_1.IsString)({ message: 'A senha é obrigatória.' }),
    (0, class_validator_1.MinLength)(5, { message: 'A senha. Deve possuir no mínimo 5 caracteres.' }),
    __metadata("design:type", String)
], RecoveryPasswordConfirmDto.prototype, "newPassword", void 0);
exports.RecoveryPasswordConfirmDto = RecoveryPasswordConfirmDto;


/***/ }),

/***/ "./src/modules/password/dtos/reset-password.dto.ts":
/*!*********************************************************!*\
  !*** ./src/modules/password/dtos/reset-password.dto.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ResetPasswordDto = void 0;
const openapi = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
const Faker = __webpack_require__(/*! faker-br */ "faker-br");
class ResetPasswordDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { currentPassword: { required: true, type: () => String, minLength: 5 }, newPassword: { required: true, type: () => String, minLength: 5 } };
    }
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: Faker.internet.password() }),
    (0, class_validator_1.IsString)({ message: 'A senha atual é obrigatória.' }),
    (0, class_validator_1.MinLength)(5, { message: 'A senha. Deve possuir no mínimo 5 caracteres.' }),
    __metadata("design:type", String)
], ResetPasswordDto.prototype, "currentPassword", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: Faker.internet.password() }),
    (0, class_validator_1.IsString)({ message: 'A nova senha é obrigatória.' }),
    (0, class_validator_1.MinLength)(5, { message: 'A senha. Deve possuir no mínimo 5 caracteres.' }),
    __metadata("design:type", String)
], ResetPasswordDto.prototype, "newPassword", void 0);
exports.ResetPasswordDto = ResetPasswordDto;


/***/ }),

/***/ "./src/modules/password/password.controller.ts":
/*!*****************************************************!*\
  !*** ./src/modules/password/password.controller.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PasswordController = void 0;
const openapi = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const src_1 = __webpack_require__(/*! ../../../libs/swagger-decorators/src */ "./libs/swagger-decorators/src/index.ts");
const jwt_auth_guard_1 = __webpack_require__(/*! ../../guards/jwt-auth.guard */ "./src/guards/jwt-auth.guard.ts");
const recovery_password_dto_1 = __webpack_require__(/*! ../auth/dto/recovery-password.dto */ "./src/modules/auth/dto/recovery-password.dto.ts");
const recovery_password_confirm_dto_1 = __webpack_require__(/*! ./dtos/recovery-password-confirm.dto */ "./src/modules/password/dtos/recovery-password-confirm.dto.ts");
const reset_password_dto_1 = __webpack_require__(/*! ./dtos/reset-password.dto */ "./src/modules/password/dtos/reset-password.dto.ts");
const password_service_1 = __webpack_require__(/*! ./password.service */ "./src/modules/password/password.service.ts");
let PasswordController = class PasswordController {
    constructor(_passwordService) {
        this._passwordService = _passwordService;
    }
    recoveryPassword(dto) {
        return this._passwordService.recoveryPassword(dto);
    }
    recoveryPasswordConfirm(dto) {
        return this._passwordService.recoveryPasswordConfirm(dto);
    }
    resetPassword(dto, req) {
        return this._passwordService.resetPassword(req.user.userId, dto);
    }
};
__decorate([
    (0, common_1.Post)('recovery'),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    (0, src_1.NoContentResponse)({ description: 'Solicitação de recuperação de senha' }),
    openapi.ApiResponse({ status: common_1.HttpStatus.NO_CONTENT }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [recovery_password_dto_1.RecoveryPasswordDto]),
    __metadata("design:returntype", void 0)
], PasswordController.prototype, "recoveryPassword", null);
__decorate([
    (0, common_1.Post)('recovery-confirm'),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    (0, src_1.NoContentResponse)({ description: 'Confirmação de recuperação de senha' }),
    (0, src_1.UnprocessableEntityResponse)(),
    openapi.ApiResponse({ status: common_1.HttpStatus.NO_CONTENT }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [recovery_password_confirm_dto_1.RecoveryPasswordConfirmDto]),
    __metadata("design:returntype", void 0)
], PasswordController.prototype, "recoveryPasswordConfirm", null);
__decorate([
    (0, common_1.Put)('reset'),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    (0, swagger_1.ApiBearerAuth)(),
    (0, src_1.NoContentResponse)({ description: 'Reset de senha' }),
    (0, src_1.UnauthorizedResponse)(),
    (0, src_1.UnprocessableEntityResponse)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    openapi.ApiResponse({ status: common_1.HttpStatus.NO_CONTENT }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [reset_password_dto_1.ResetPasswordDto, Object]),
    __metadata("design:returntype", void 0)
], PasswordController.prototype, "resetPassword", null);
PasswordController = __decorate([
    (0, src_1.ApiController)('password'),
    __metadata("design:paramtypes", [password_service_1.PasswordService])
], PasswordController);
exports.PasswordController = PasswordController;


/***/ }),

/***/ "./src/modules/password/password.module.ts":
/*!*************************************************!*\
  !*** ./src/modules/password/password.module.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PasswordModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const jwt_1 = __webpack_require__(/*! @nestjs/jwt */ "@nestjs/jwt");
const user_module_1 = __webpack_require__(/*! ../user/user.module */ "./src/modules/user/user.module.ts");
const password_controller_1 = __webpack_require__(/*! ./password.controller */ "./src/modules/password/password.controller.ts");
const password_service_1 = __webpack_require__(/*! ./password.service */ "./src/modules/password/password.service.ts");
let PasswordModule = class PasswordModule {
};
PasswordModule = __decorate([
    (0, common_1.Module)({
        imports: [
            user_module_1.UserModule,
            jwt_1.JwtModule.registerAsync({
                inject: [config_1.ConfigService],
                useFactory: (configService) => configService.get('jwt'),
            }),
        ],
        controllers: [password_controller_1.PasswordController],
        providers: [password_service_1.PasswordService],
        exports: [password_service_1.PasswordService],
    })
], PasswordModule);
exports.PasswordModule = PasswordModule;


/***/ }),

/***/ "./src/modules/password/password.service.ts":
/*!**************************************************!*\
  !*** ./src/modules/password/password.service.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _PasswordService_instances, _PasswordService_validateIfcurrentPasswordAndNewPasswordIsEquals, _PasswordService_generateUrlToRecoveryToken, _PasswordService_generateRecoveryToken, _PasswordService_generateHashedTokenToRecovery, _PasswordService_decodeHashedTokenToConfirmRecovery;
var PasswordService_1;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PasswordService = void 0;
const mailer_1 = __webpack_require__(/*! @nestjs-modules/mailer */ "@nestjs-modules/mailer");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const jwt_1 = __webpack_require__(/*! @nestjs/jwt */ "@nestjs/jwt");
const date_fns_1 = __webpack_require__(/*! date-fns */ "date-fns");
const uuid_1 = __webpack_require__(/*! uuid */ "uuid");
const jwt_payload_builder_1 = __webpack_require__(/*! ../../common/builders/jwt-payload.builder */ "./src/common/builders/jwt-payload.builder.ts");
const bcrypt_service_1 = __webpack_require__(/*! ../bcrypt/bcrypt.service */ "./src/modules/bcrypt/bcrypt.service.ts");
const user_service_1 = __webpack_require__(/*! ../user/user.service */ "./src/modules/user/user.service.ts");
const password_proxy_1 = __webpack_require__(/*! ./proxies/password.proxy */ "./src/modules/password/proxies/password.proxy.ts");
let PasswordService = PasswordService_1 = class PasswordService {
    constructor(_userService, _jwtService, _configService, _mailerService) {
        this._userService = _userService;
        this._jwtService = _jwtService;
        this._configService = _configService;
        this._mailerService = _mailerService;
        _PasswordService_instances.add(this);
    }
    async recoveryPassword(dto) {
        const user = await this._userService.findOneByEmail(dto.email);
        if (!user) {
            return;
        }
        const recoveryToken = await __classPrivateFieldGet(this, _PasswordService_instances, "m", _PasswordService_generateRecoveryToken).call(this, user);
        const generateUrlToRecoveryToken = __classPrivateFieldGet(this, _PasswordService_instances, "m", _PasswordService_generateUrlToRecoveryToken).call(this, recoveryToken);
        await this._mailerService.sendMail({
            to: dto.email,
            subject: '-- - Esqueci minha senha',
            template: __dirname + '../../templates/recovery-password.hbs',
            context: {
                user: user.fullName,
                generateUrlToRecoveryToken,
            },
        });
    }
    async recoveryPasswordConfirm(dto) {
        const user = await this._userService.findUserByRecoveryToken(dto.recoveryToken);
        const recoveryToken = __classPrivateFieldGet(this, _PasswordService_instances, "m", _PasswordService_decodeHashedTokenToConfirmRecovery).call(this, dto.recoveryToken);
        const userRecoveryToken = __classPrivateFieldGet(this, _PasswordService_instances, "m", _PasswordService_decodeHashedTokenToConfirmRecovery).call(this, user.recoveryToken);
        new password_proxy_1.PasswordProxy(recoveryToken, userRecoveryToken)
            .validateIfRecoveryTokenExpired()
            .validateIfExpirationDateIsEquals()
            .validateIfGUIDIsEquals();
        const password = await bcrypt_service_1.BcryptService.hash(dto.newPassword);
        await this._userService.updatePartialUser(user.id, {
            password,
            recoveryToken: null,
        });
    }
    async resetPassword(userId, dto) {
        const user = await this._userService.findOne(userId);
        const newPassword = await bcrypt_service_1.BcryptService.hash(dto.newPassword);
        __classPrivateFieldGet(this, _PasswordService_instances, "m", _PasswordService_validateIfcurrentPasswordAndNewPasswordIsEquals).call(this, user.password, newPassword);
        await this._userService.updatePartialUser(userId, {
            password: dto.newPassword,
        });
    }
};
_PasswordService_instances = new WeakSet(), _PasswordService_validateIfcurrentPasswordAndNewPasswordIsEquals = function _PasswordService_validateIfcurrentPasswordAndNewPasswordIsEquals(currentPassword, newPassword) {
    if (currentPassword === newPassword) {
        throw new common_1.UnprocessableEntityException('As senhas são identicas.');
    }
}, _PasswordService_generateUrlToRecoveryToken = function _PasswordService_generateUrlToRecoveryToken(recoveryToken) {
    return `${this._configService.get('app.urls.web')}/resetar-senha?recoveryToken=${recoveryToken}`;
}, _PasswordService_generateRecoveryToken = async function _PasswordService_generateRecoveryToken(user) {
    const expirationDate = (0, date_fns_1.addDays)(new Date(), PasswordService_1.AMOUNT_ADD_DAY);
    const hashedRecoveryToken = __classPrivateFieldGet(this, _PasswordService_instances, "m", _PasswordService_generateHashedTokenToRecovery).call(this, user, (0, uuid_1.v4)(), expirationDate);
    await this._userService.updatePartialUser(user.id, {
        recoveryToken: hashedRecoveryToken,
    });
    return hashedRecoveryToken;
}, _PasswordService_generateHashedTokenToRecovery = function _PasswordService_generateHashedTokenToRecovery(user, GUID, expirationDate) {
    const payload = jwt_payload_builder_1.JwtPayloadBuilder.toRecoveryToken(user, GUID, expirationDate);
    return this._jwtService.sign(payload);
}, _PasswordService_decodeHashedTokenToConfirmRecovery = function _PasswordService_decodeHashedTokenToConfirmRecovery(recoveryToken) {
    const decodedToken = this._jwtService.decode(recoveryToken);
    if (!decodedToken) {
        throw new common_1.UnprocessableEntityException();
    }
    return decodedToken;
};
PasswordService.AMOUNT_ADD_DAY = 1;
PasswordService = PasswordService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_service_1.UserService,
        jwt_1.JwtService,
        config_1.ConfigService,
        mailer_1.MailerService])
], PasswordService);
exports.PasswordService = PasswordService;


/***/ }),

/***/ "./src/modules/password/proxies/password.proxy.ts":
/*!********************************************************!*\
  !*** ./src/modules/password/proxies/password.proxy.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PasswordProxy = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const date_fns_1 = __webpack_require__(/*! date-fns */ "date-fns");
class PasswordProxy {
    constructor(recoveryToken, userRecoveryToken) {
        this._logger = new common_1.Logger('PasswordProxy');
        this._recoveryToken = recoveryToken;
        this._userRecoveryToken = userRecoveryToken;
    }
    validateIfRecoveryTokenExpired() {
        const isValidExpirationDate = (0, date_fns_1.isFuture)(new Date(this._recoveryToken.expirationDate));
        if (!isValidExpirationDate) {
            throw new common_1.UnprocessableEntityException('Token de recuperação senha expirou.');
        }
        return this;
    }
    validateIfGUIDIsEquals() {
        const isEquals = this._recoveryToken.GUID === this._userRecoveryToken.GUID;
        if (!isEquals) {
            this._logger.error('GUID não é identico');
            throw new common_1.UnprocessableEntityException('Token de recuperação é inválido.');
        }
        return this;
    }
    validateIfExpirationDateIsEquals() {
        const isEquals = (0, date_fns_1.isEqual)(new Date(this._recoveryToken.expirationDate), new Date(this._userRecoveryToken.expirationDate));
        if (!isEquals) {
            this._logger.error('Data de expiração não é identica');
            throw new common_1.UnprocessableEntityException('Token de recuperação é inválido.');
        }
        return this;
    }
}
exports.PasswordProxy = PasswordProxy;


/***/ }),

/***/ "./src/modules/user/dto/create-user.dto.ts":
/*!*************************************************!*\
  !*** ./src/modules/user/dto/create-user.dto.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateUserDto = void 0;
const openapi = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const class_transformer_1 = __webpack_require__(/*! class-transformer */ "class-transformer");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
const Faker = __webpack_require__(/*! faker-br */ "faker-br");
const app_roles_1 = __webpack_require__(/*! ../../../app.roles */ "./src/app.roles.ts");
const keep_all_numbers_transform_1 = __webpack_require__(/*! ../../../common/transformers/keep-all-numbers.transform */ "./src/common/transformers/keep-all-numbers.transform.ts");
const lower_case_transform_1 = __webpack_require__(/*! ../../../common/transformers/lower-case.transform */ "./src/common/transformers/lower-case.transform.ts");
class CreateUserDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { fullName: { required: true, type: () => String, minLength: 2, maxLength: 255 }, email: { required: true, type: () => String, minLength: 2, maxLength: 255 }, phoneNumber: { required: false, type: () => String, minLength: 8, maxLength: 16 }, address: { required: false, type: () => String }, role: { required: true, type: () => String }, password: { required: true, type: () => String, minLength: 5 } };
    }
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: Faker.name.findName() }),
    (0, class_validator_1.IsString)({ message: 'Nome é inválido.' }),
    (0, class_validator_1.MaxLength)(255, {
        message: 'Tamanho máximo do nome. Deve ser menor que 255 caracteres.',
    }),
    (0, class_validator_1.MinLength)(2, {
        message: 'Tamanho mínimo do nome. Deve ser maior que 2 caracteres.',
    }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "fullName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: Faker.internet.email(),
    }),
    (0, class_validator_1.MaxLength)(255, {
        message: 'Tamanho máximo do email. Deve ser menor que 255 caracteres.',
    }),
    (0, class_validator_1.MinLength)(2, {
        message: 'Tamanho mínimo do email. Deve ser maior que 2 caracteres.',
    }),
    (0, class_validator_1.IsEmail)({}, { message: 'Email inválido.' }),
    (0, class_transformer_1.Transform)(lower_case_transform_1.LowerCaseTransform),
    __metadata("design:type", String)
], CreateUserDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: Faker.phone.phoneNumber() }),
    (0, class_validator_1.MaxLength)(16, {
        message: 'Tamanho máximo do telefone. Deve ser menor que 16 caracteres.',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: 'Telefone é inválido.' }),
    (0, class_validator_1.MinLength)(8, {
        message: 'Tamanho mínimo do telefone. Deve ser maior que 8 caracteres.',
    }),
    (0, class_transformer_1.Transform)(keep_all_numbers_transform_1.KeepAllNumbersTransform),
    __metadata("design:type", String)
], CreateUserDto.prototype, "phoneNumber", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        example: `${Faker.address.streetAddress()} - ${Faker.address.state()}`,
    }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateUserDto.prototype, "address", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: app_roles_1.AppRoles.USER }),
    (0, class_validator_1.IsString)({ message: 'A role é obrigatória.' }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "role", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: Faker.internet.password() }),
    (0, class_validator_1.IsString)({ message: 'A senha é obrigatória.' }),
    (0, class_validator_1.MinLength)(5, { message: 'A senha. Deve possuir no mínimo 5 caracteres.' }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "password", void 0);
exports.CreateUserDto = CreateUserDto;


/***/ }),

/***/ "./src/modules/user/dto/filter-user.dto.ts":
/*!*************************************************!*\
  !*** ./src/modules/user/dto/filter-user.dto.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FilterUserDto = void 0;
const openapi = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const class_transformer_1 = __webpack_require__(/*! class-transformer */ "class-transformer");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
const pagination_dto_1 = __webpack_require__(/*! ../../../common/dtos/pagination.dto */ "./src/common/dtos/pagination.dto.ts");
const decrypted_transform_1 = __webpack_require__(/*! ../../../common/transformers/decrypted-transform */ "./src/common/transformers/decrypted-transform.ts");
class FilterUserDto extends pagination_dto_1.PaginationDto {
    createWhere(queryBuilder) {
        this.withFilter(this.fullName, () => queryBuilder.andWhere('u.fullName like :fullName', {
            name: this.createLike(this.fullName),
        }));
        this.withFilter(this.email, () => queryBuilder.andWhere('u.email like :email', {
            email: this.createLike(this.email),
        }));
        this.withFilter(this.startAt, () => queryBuilder.andWhere('date(u.createdAt) >= :startAt', {
            startAt: this.startAt,
        }));
        this.withFilter(this.endAt, () => queryBuilder.andWhere('date(u.createdAt) <= :endAt', {
            endAt: this.endAt,
        }));
    }
    createOrder(queryBuilder) {
        if (this.order) {
            Object.entries(this.order).forEach(([field, value]) => {
                this.withOrderBy(field, 'fullName', () => queryBuilder.addOrderBy('u.fullName', value));
            });
        }
    }
    static _OPENAPI_METADATA_FACTORY() {
        return { fullName: { required: false, type: () => String }, email: { required: false, type: () => String } };
    }
}
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'José Maria' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Transform)(decrypted_transform_1.DecryptedTransform),
    __metadata("design:type", String)
], FilterUserDto.prototype, "fullName", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Transform)(decrypted_transform_1.DecryptedTransform),
    __metadata("design:type", String)
], FilterUserDto.prototype, "email", void 0);
exports.FilterUserDto = FilterUserDto;


/***/ }),

/***/ "./src/modules/user/dto/update-user.dto.ts":
/*!*************************************************!*\
  !*** ./src/modules/user/dto/update-user.dto.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateUserDto = void 0;
const openapi = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const create_user_dto_1 = __webpack_require__(/*! ./create-user.dto */ "./src/modules/user/dto/create-user.dto.ts");
class UpdateUserDto extends (0, swagger_1.PartialType)((0, swagger_1.OmitType)(create_user_dto_1.CreateUserDto, ['role'])) {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.UpdateUserDto = UpdateUserDto;


/***/ }),

/***/ "./src/modules/user/dto/user.dto.ts":
/*!******************************************!*\
  !*** ./src/modules/user/dto/user.dto.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserDto = void 0;
const openapi = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const app_roles_1 = __webpack_require__(/*! ../../../app.roles */ "./src/app.roles.ts");
const Faker = __webpack_require__(/*! faker-br */ "faker-br");
class UserDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => String }, fullName: { required: true, type: () => String }, email: { required: true, type: () => String }, role: { required: true, type: () => String }, phoneNumber: { required: false, type: () => String }, address: { required: false, type: () => String } };
    }
}
__decorate([
    (0, swagger_1.ApiProperty)({
        format: 'uuid',
        type: String,
    }),
    __metadata("design:type", String)
], UserDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: Faker.name.findName() }),
    __metadata("design:type", String)
], UserDto.prototype, "fullName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: Faker.internet.email(),
    }),
    __metadata("design:type", String)
], UserDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: app_roles_1.AppRoles.USER,
    }),
    __metadata("design:type", String)
], UserDto.prototype, "role", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: Faker.phone.phoneNumber() }),
    __metadata("design:type", String)
], UserDto.prototype, "phoneNumber", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        example: `${Faker.address.streetAddress()} - ${Faker.address.state()}`,
    }),
    __metadata("design:type", String)
], UserDto.prototype, "address", void 0);
exports.UserDto = UserDto;


/***/ }),

/***/ "./src/modules/user/entities/user.entity.ts":
/*!**************************************************!*\
  !*** ./src/modules/user/entities/user.entity.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.User = void 0;
const openapi = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const app_roles_1 = __webpack_require__(/*! ../../../app.roles */ "./src/app.roles.ts");
const unique_identifier_entity_1 = __webpack_require__(/*! ../../../common/entities/unique-identifier.entity */ "./src/common/entities/unique-identifier.entity.ts");
const encrypted_column_decorator_1 = __webpack_require__(/*! ../../../decorators/encrypted-column.decorator */ "./src/decorators/encrypted-column.decorator.ts");
const normalized_column_decorator_1 = __webpack_require__(/*! ../../../decorators/normalized-column.decorator */ "./src/decorators/normalized-column.decorator.ts");
let User = class User extends unique_identifier_entity_1.UniqueIdentifierEntity {
    static _OPENAPI_METADATA_FACTORY() {
        return { fullName: { required: true, type: () => String }, email: { required: true, type: () => String }, phoneNumber: { required: false, type: () => String }, address: { required: false, type: () => String }, role: { required: true, type: () => String }, password: { required: true, type: () => String }, recoveryToken: { required: true, type: () => String } };
    }
};
__decorate([
    (0, encrypted_column_decorator_1.EncryptedColumn)(),
    __metadata("design:type", String)
], User.prototype, "fullName", void 0);
__decorate([
    (0, encrypted_column_decorator_1.EncryptedColumn)(),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    (0, encrypted_column_decorator_1.EncryptedColumn)(),
    __metadata("design:type", String)
], User.prototype, "phoneNumber", void 0);
__decorate([
    (0, normalized_column_decorator_1.NormalizedColumn)(),
    __metadata("design:type", String)
], User.prototype, "address", void 0);
__decorate([
    (0, normalized_column_decorator_1.NormalizedColumn)({
        default: app_roles_1.AppRoles.USER,
        length: 40,
    }),
    __metadata("design:type", String)
], User.prototype, "role", void 0);
__decorate([
    (0, normalized_column_decorator_1.NormalizedColumn)(),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    (0, normalized_column_decorator_1.NormalizedColumn)(),
    __metadata("design:type", String)
], User.prototype, "recoveryToken", void 0);
User = __decorate([
    (0, typeorm_1.Entity)()
], User);
exports.User = User;


/***/ }),

/***/ "./src/modules/user/parsers/user.parser.ts":
/*!*************************************************!*\
  !*** ./src/modules/user/parsers/user.parser.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserParser = void 0;
class UserParser {
    static toUserDto(entity) {
        return {
            id: entity.id,
            fullName: entity.fullName,
            email: entity.email,
            address: entity === null || entity === void 0 ? void 0 : entity.address,
            phoneNumber: entity === null || entity === void 0 ? void 0 : entity.phoneNumber,
            role: entity.role,
        };
    }
}
exports.UserParser = UserParser;


/***/ }),

/***/ "./src/modules/user/user.controller.ts":
/*!*********************************************!*\
  !*** ./src/modules/user/user.controller.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserController = void 0;
const openapi = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const swagger_decorators_1 = __webpack_require__(/*! @app/swagger-decorators */ "./libs/swagger-decorators/src/index.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const pagination_parser_1 = __webpack_require__(/*! ../../common/parsers/pagination.parser */ "./src/common/parsers/pagination.parser.ts");
const jwt_guard_decorator_1 = __webpack_require__(/*! ../../decorators/jwt-guard.decorator */ "./src/decorators/jwt-guard.decorator.ts");
const create_user_dto_1 = __webpack_require__(/*! ./dto/create-user.dto */ "./src/modules/user/dto/create-user.dto.ts");
const filter_user_dto_1 = __webpack_require__(/*! ./dto/filter-user.dto */ "./src/modules/user/dto/filter-user.dto.ts");
const update_user_dto_1 = __webpack_require__(/*! ./dto/update-user.dto */ "./src/modules/user/dto/update-user.dto.ts");
const user_dto_1 = __webpack_require__(/*! ./dto/user.dto */ "./src/modules/user/dto/user.dto.ts");
const user_parser_1 = __webpack_require__(/*! ./parsers/user.parser */ "./src/modules/user/parsers/user.parser.ts");
const user_service_1 = __webpack_require__(/*! ./user.service */ "./src/modules/user/user.service.ts");
let UserController = class UserController {
    constructor(_userService) {
        this._userService = _userService;
    }
    async create(dto) {
        const result = await this._userService.create(dto);
        return user_parser_1.UserParser.toUserDto(result);
    }
    async paginate(filter) {
        const paginate = await this._userService.paginate(filter);
        return pagination_parser_1.PaginationParser.toPagination(paginate, user_parser_1.UserParser.toUserDto);
    }
    async findOne(id) {
        const result = await this._userService.findOne(id);
        return user_parser_1.UserParser.toUserDto(result);
    }
    async update(id, dto) {
        const result = await this._userService.update(id, dto);
        return user_parser_1.UserParser.toUserDto(result);
    }
    remove(id) {
        return this._userService.remove(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, swagger_decorators_1.CreatedResponse)({
        description: 'Criação de Usuário',
        type: user_dto_1.UserDto,
    }),
    (0, swagger_decorators_1.BadRequestResponse)(),
    openapi.ApiResponse({ status: 201, type: __webpack_require__(/*! ./dto/user.dto */ "./src/modules/user/dto/user.dto.ts").UserDto }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_dto_1.CreateUserDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_decorators_1.PaginatedOkResponse)(user_dto_1.UserDto, { description: 'Paginação de Usuários' }),
    (0, swagger_decorators_1.BadRequestResponse)(),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [filter_user_dto_1.FilterUserDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "paginate", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_decorators_1.OkResponse)({
        type: user_dto_1.UserDto,
        description: 'Detalhes de Usuário',
    }),
    (0, swagger_decorators_1.BadRequestResponse)(),
    (0, swagger_decorators_1.NotFoundResponse)(),
    openapi.ApiResponse({ status: 200, type: __webpack_require__(/*! ./dto/user.dto */ "./src/modules/user/dto/user.dto.ts").UserDto }),
    __param(0, (0, common_1.Param)('id', new common_1.ParseUUIDPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_decorators_1.OkResponse)({
        type: user_dto_1.UserDto,
        description: 'Atualização de dados do Usuário',
    }),
    (0, swagger_decorators_1.NotFoundResponse)(),
    (0, swagger_decorators_1.BadRequestResponse)(),
    (0, jwt_guard_decorator_1.JwtGuardSetup)(),
    openapi.ApiResponse({ status: 200, type: __webpack_require__(/*! ./dto/user.dto */ "./src/modules/user/dto/user.dto.ts").UserDto }),
    __param(0, (0, common_1.Param)('id', new common_1.ParseUUIDPipe())),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_user_dto_1.UpdateUserDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_decorators_1.NoContentResponse)({ description: 'Deleção de Usuário' }),
    (0, swagger_decorators_1.NotFoundResponse)(),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('id', new common_1.ParseUUIDPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "remove", null);
UserController = __decorate([
    (0, swagger_decorators_1.ApiController)('user'),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserController);
exports.UserController = UserController;


/***/ }),

/***/ "./src/modules/user/user.module.ts":
/*!*****************************************!*\
  !*** ./src/modules/user/user.module.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const user_entity_1 = __webpack_require__(/*! ./entities/user.entity */ "./src/modules/user/entities/user.entity.ts");
const user_controller_1 = __webpack_require__(/*! ./user.controller */ "./src/modules/user/user.controller.ts");
const user_service_1 = __webpack_require__(/*! ./user.service */ "./src/modules/user/user.service.ts");
let UserModule = class UserModule {
};
UserModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([user_entity_1.User])],
        controllers: [user_controller_1.UserController],
        providers: [user_service_1.UserService],
        exports: [user_service_1.UserService],
    })
], UserModule);
exports.UserModule = UserModule;


/***/ }),

/***/ "./src/modules/user/user.service.ts":
/*!******************************************!*\
  !*** ./src/modules/user/user.service.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const nestjs_typeorm_paginate_1 = __webpack_require__(/*! nestjs-typeorm-paginate */ "nestjs-typeorm-paginate");
const typeorm_2 = __webpack_require__(/*! typeorm */ "typeorm");
const entity_not_found_error_exception_1 = __webpack_require__(/*! ../../common/exceptions/entity-not-found-error.exception */ "./src/common/exceptions/entity-not-found-error.exception.ts");
const bcrypt_service_1 = __webpack_require__(/*! ../bcrypt/bcrypt.service */ "./src/modules/bcrypt/bcrypt.service.ts");
const user_entity_1 = __webpack_require__(/*! ./entities/user.entity */ "./src/modules/user/entities/user.entity.ts");
let UserService = class UserService {
    constructor(_userRepo) {
        this._userRepo = _userRepo;
    }
    async create(dto) {
        const password = await bcrypt_service_1.BcryptService.hash(dto.password);
        const user = this._userRepo.create(Object.assign(Object.assign({}, dto), { password }));
        return this._userRepo.save(user);
    }
    paginate(filter) {
        const queryBuilder = this._userRepo.createQueryBuilder('u');
        filter.createOrder(queryBuilder);
        filter.createWhere(queryBuilder);
        return (0, nestjs_typeorm_paginate_1.paginate)(queryBuilder, {
            page: filter.page,
            limit: filter.limit,
        });
    }
    async findOne(id) {
        const user = await this._userRepo.findOne(id);
        if (!user) {
            throw new entity_not_found_error_exception_1.EntityNotFoundError(user_entity_1.User, id);
        }
        return user;
    }
    findOneByEmail(email) {
        return this._userRepo.findOne({
            where: {
                email,
            },
        });
    }
    async findUserByRecoveryToken(recoveryToken) {
        const user = await this._userRepo.findOne({
            where: {
                recoveryToken,
            },
        });
        if (!user) {
            throw new common_1.UnprocessableEntityException('Usuário não solicitou recuperação de senha.');
        }
        return user;
    }
    async updatePartialUser(id, partialUser) {
        const updateResult = await this._userRepo.update(id, partialUser);
        if (updateResult.affected === 0) {
            throw new entity_not_found_error_exception_1.EntityNotFoundError(user_entity_1.User, id);
        }
    }
    async update(id, dto) {
        const updateResult = await this._userRepo.update(id, dto);
        if (updateResult.affected === 0) {
            throw new entity_not_found_error_exception_1.EntityNotFoundError(user_entity_1.User, id);
        }
        return this._userRepo.findOne(id);
    }
    async remove(id) {
        const deleteResult = await this._userRepo.delete(id);
        if (deleteResult.affected === 0) {
            throw new entity_not_found_error_exception_1.EntityNotFoundError(user_entity_1.User, id);
        }
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UserService);
exports.UserService = UserService;


/***/ }),

/***/ "@nestjs-modules/mailer":
/*!*****************************************!*\
  !*** external "@nestjs-modules/mailer" ***!
  \*****************************************/
/***/ ((module) => {

module.exports = require("@nestjs-modules/mailer");

/***/ }),

/***/ "@nestjs-modules/mailer/dist/adapters/handlebars.adapter":
/*!**************************************************************************!*\
  !*** external "@nestjs-modules/mailer/dist/adapters/handlebars.adapter" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("@nestjs-modules/mailer/dist/adapters/handlebars.adapter");

/***/ }),

/***/ "@nestjs/common":
/*!*********************************!*\
  !*** external "@nestjs/common" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@nestjs/common");

/***/ }),

/***/ "@nestjs/config":
/*!*********************************!*\
  !*** external "@nestjs/config" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@nestjs/config");

/***/ }),

/***/ "@nestjs/core":
/*!*******************************!*\
  !*** external "@nestjs/core" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("@nestjs/core");

/***/ }),

/***/ "@nestjs/jwt":
/*!******************************!*\
  !*** external "@nestjs/jwt" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("@nestjs/jwt");

/***/ }),

/***/ "@nestjs/passport":
/*!***********************************!*\
  !*** external "@nestjs/passport" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("@nestjs/passport");

/***/ }),

/***/ "@nestjs/serve-static":
/*!***************************************!*\
  !*** external "@nestjs/serve-static" ***!
  \***************************************/
/***/ ((module) => {

module.exports = require("@nestjs/serve-static");

/***/ }),

/***/ "@nestjs/swagger":
/*!**********************************!*\
  !*** external "@nestjs/swagger" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("@nestjs/swagger");

/***/ }),

/***/ "@nestjs/typeorm":
/*!**********************************!*\
  !*** external "@nestjs/typeorm" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("@nestjs/typeorm");

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

/***/ "class-transformer":
/*!************************************!*\
  !*** external "class-transformer" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("class-transformer");

/***/ }),

/***/ "class-validator":
/*!**********************************!*\
  !*** external "class-validator" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("class-validator");

/***/ }),

/***/ "date-fns":
/*!***************************!*\
  !*** external "date-fns" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("date-fns");

/***/ }),

/***/ "faker-br":
/*!***************************!*\
  !*** external "faker-br" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("faker-br");

/***/ }),

/***/ "nestjs-typeorm-paginate":
/*!******************************************!*\
  !*** external "nestjs-typeorm-paginate" ***!
  \******************************************/
/***/ ((module) => {

module.exports = require("nestjs-typeorm-paginate");

/***/ }),

/***/ "passport-jwt":
/*!*******************************!*\
  !*** external "passport-jwt" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("passport-jwt");

/***/ }),

/***/ "rxjs":
/*!***********************!*\
  !*** external "rxjs" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("rxjs");

/***/ }),

/***/ "typeorm":
/*!**************************!*\
  !*** external "typeorm" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("typeorm");

/***/ }),

/***/ "typeorm-encrypted":
/*!************************************!*\
  !*** external "typeorm-encrypted" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("typeorm-encrypted");

/***/ }),

/***/ "uuid":
/*!***********************!*\
  !*** external "uuid" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("uuid");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const core_1 = __webpack_require__(/*! @nestjs/core */ "@nestjs/core");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const app_module_1 = __webpack_require__(/*! ./app.module */ "./src/app.module.ts");
const bad_request_filter_1 = __webpack_require__(/*! ./common/filters/bad-request.filter */ "./src/common/filters/bad-request.filter.ts");
const entity_conflict_filter_1 = __webpack_require__(/*! ./common/filters/entity-conflict.filter */ "./src/common/filters/entity-conflict.filter.ts");
const entity_not_found_filter_1 = __webpack_require__(/*! ./common/filters/entity-not-found.filter */ "./src/common/filters/entity-not-found.filter.ts");
const unauthorized_filter_1 = __webpack_require__(/*! ./common/filters/unauthorized.filter */ "./src/common/filters/unauthorized.filter.ts");
const unprocessable_entity_filter_1 = __webpack_require__(/*! ./common/filters/unprocessable-entity.filter */ "./src/common/filters/unprocessable-entity.filter.ts");
const bootstrap = async () => {
    const logger = new common_1.Logger('MainApi');
    logger.verbose(`Starting app 🚀`);
    const app = await core_1.NestFactory.create(app_module_1.AppModule, {
        cors: true,
        logger: ['debug', 'verbose', 'error', 'warn'],
    });
    app.useGlobalFilters(new entity_not_found_filter_1.EntityNotFoundExceptionFilter(), new entity_conflict_filter_1.EntityConflictExceptionFilter(), new bad_request_filter_1.BadRequestExceptionFilter(), new unprocessable_entity_filter_1.UnprocessableEntityExceptionFilter(), new unauthorized_filter_1.UnauthorizedExceptionFilter());
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
    }));
    app.useGlobalInterceptors(new common_1.ClassSerializerInterceptor(app.get(core_1.Reflector)));
    app.setGlobalPrefix('/v1/api');
    const config = new swagger_1.DocumentBuilder()
        .setTitle('WEB API - Boilerplate')
        .setDescription('API responsável: Boilerplate')
        .setVersion('1.0')
        .addBearerAuth()
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('swagger', app, document);
    app.enableCors();
    const configService = app.get(config_1.ConfigService);
    const port = configService.get('app.port');
    await app.listen(port);
    const url = await app.getUrl();
    logger.debug(`Swagger application is running on: ${url}/swagger`);
};
bootstrap();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUcsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUVqQixNQUFNLGFBQWEsR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLHNCQUFhLENBQUMsQ0FBQztJQUM3QyxNQUFNLElBQUksR0FBRyxhQUFhLENBQUMsR0FBRyxDQUFTLFVBQVUsQ0FBQyxDQUFDO0lBRW5ELE1BQU0sR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN2QixNQUFNLEdBQUcsR0FBRyxNQUFNLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUUvQixNQUFNLENBQUMsS0FBSyxDQUFDLHNDQUFzQyxHQUFHLFVBQVUsQ0FBQyxDQUFDO0FBQ3BFLENBQUMsQ0FBQztBQUVGLFNBQVMsRUFBRSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLS0vLi9saWJzL3N3YWdnZXItZGVjb3JhdG9ycy9zcmMvYXBpLWNvbnRyb2xsZXIuZGVjb3JhdG9yLnRzIiwid2VicGFjazovLy0tLy4vbGlicy9zd2FnZ2VyLWRlY29yYXRvcnMvc3JjL2FwaS1maWxlLmRlY29yYXRvci50cyIsIndlYnBhY2s6Ly8tLS8uL2xpYnMvc3dhZ2dlci1kZWNvcmF0b3JzL3NyYy9hcGktcHJvcHJvcGVydHktdXVpZC5kZWNvcmF0b3IudHMiLCJ3ZWJwYWNrOi8vLS0vLi9saWJzL3N3YWdnZXItZGVjb3JhdG9ycy9zcmMvYmFkLXJlcXVlc3QtcmVzcG9uc2UuZGVjb3JhdG9yLnRzIiwid2VicGFjazovLy0tLy4vbGlicy9zd2FnZ2VyLWRlY29yYXRvcnMvc3JjL2NyZWF0ZWQtcmVzcG9uc2UuZGVjb3JhdG9yLnRzIiwid2VicGFjazovLy0tLy4vbGlicy9zd2FnZ2VyLWRlY29yYXRvcnMvc3JjL2R0b3MvYXBpLWdlbmVyaWMtZXJyb3IuZHRvLnRzIiwid2VicGFjazovLy0tLy4vbGlicy9zd2FnZ2VyLWRlY29yYXRvcnMvc3JjL2R0b3MvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLS0vLi9saWJzL3N3YWdnZXItZGVjb3JhdG9ycy9zcmMvZm9yYmlkZGVuLXJlc3BvbnNlLmRlY29yYXRvci50cyIsIndlYnBhY2s6Ly8tLS8uL2xpYnMvc3dhZ2dlci1kZWNvcmF0b3JzL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly8tLS8uL2xpYnMvc3dhZ2dlci1kZWNvcmF0b3JzL3NyYy9uby1jb250ZW50LXJlc3BvbnNlLmRlY29yYXRvci50cyIsIndlYnBhY2s6Ly8tLS8uL2xpYnMvc3dhZ2dlci1kZWNvcmF0b3JzL3NyYy9ub3QtZm91bmQtcmVzcG9uc2UuZGVjb3JhdG9yLnRzIiwid2VicGFjazovLy0tLy4vbGlicy9zd2FnZ2VyLWRlY29yYXRvcnMvc3JjL29rLXJlc3BvbnNlLmRlY29yYXRvci50cyIsIndlYnBhY2s6Ly8tLS8uL2xpYnMvc3dhZ2dlci1kZWNvcmF0b3JzL3NyYy9wYWdpbmF0ZWQtb2stcmVzcG9uc2UuZGVjb3JhdG9yLnRzIiwid2VicGFjazovLy0tLy4vbGlicy9zd2FnZ2VyLWRlY29yYXRvcnMvc3JjL3VuYXV0aG9yaXplZC1yZXNwb25zZS5kZWNvcmF0b3IudHMiLCJ3ZWJwYWNrOi8vLS0vLi9saWJzL3N3YWdnZXItZGVjb3JhdG9ycy9zcmMvdW5wcm9jZXNzYWJsZS1lbnRpdHktcmVzcG9uc2UuZGVjb3JhdG9yLnRzIiwid2VicGFjazovLy0tLy4vc3JjL2FwcC5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLS0vLi9zcmMvYXBwLnJvbGVzLnRzIiwid2VicGFjazovLy0tLy4vc3JjL2NvbW1vbi9idWlsZGVycy9lbnRpdHktZmlsdGVyLmJ1aWxkZXIudHMiLCJ3ZWJwYWNrOi8vLS0vLi9zcmMvY29tbW9uL2J1aWxkZXJzL2p3dC1wYXlsb2FkLmJ1aWxkZXIudHMiLCJ3ZWJwYWNrOi8vLS0vLi9zcmMvY29tbW9uL2R0b3MvcGFnaW5hdGlvbi5kdG8udHMiLCJ3ZWJwYWNrOi8vLS0vLi9zcmMvY29tbW9uL2VudGl0aWVzL3VuaXF1ZS1pZGVudGlmaWVyLmVudGl0eS50cyIsIndlYnBhY2s6Ly8tLS8uL3NyYy9jb21tb24vZXhjZXB0aW9ucy9lbnRpdHktY29uZmxpY3QtZXJyb3IuZXhjZXB0aW9uLnRzIiwid2VicGFjazovLy0tLy4vc3JjL2NvbW1vbi9leGNlcHRpb25zL2VudGl0eS1ub3QtZm91bmQtZXJyb3IuZXhjZXB0aW9uLnRzIiwid2VicGFjazovLy0tLy4vc3JjL2NvbW1vbi9maWx0ZXJzL2JhZC1yZXF1ZXN0LmZpbHRlci50cyIsIndlYnBhY2s6Ly8tLS8uL3NyYy9jb21tb24vZmlsdGVycy9lbnRpdHktY29uZmxpY3QuZmlsdGVyLnRzIiwid2VicGFjazovLy0tLy4vc3JjL2NvbW1vbi9maWx0ZXJzL2VudGl0eS1ub3QtZm91bmQuZmlsdGVyLnRzIiwid2VicGFjazovLy0tLy4vc3JjL2NvbW1vbi9maWx0ZXJzL3VuYXV0aG9yaXplZC5maWx0ZXIudHMiLCJ3ZWJwYWNrOi8vLS0vLi9zcmMvY29tbW9uL2ZpbHRlcnMvdW5wcm9jZXNzYWJsZS1lbnRpdHkuZmlsdGVyLnRzIiwid2VicGFjazovLy0tLy4vc3JjL2NvbW1vbi9wYXJzZXJzL3BhZ2luYXRpb24ucGFyc2VyLnRzIiwid2VicGFjazovLy0tLy4vc3JjL2NvbW1vbi9wYXJzZXJzL3R5cGVvcm0tY29sdW1uLnBhcnNlci50cyIsIndlYnBhY2s6Ly8tLS8uL3NyYy9jb21tb24vdHJhbnNmb3JtZXJzL2RlY3J5cHRlZC10cmFuc2Zvcm0udHMiLCJ3ZWJwYWNrOi8vLS0vLi9zcmMvY29tbW9uL3RyYW5zZm9ybWVycy9rZWVwLWFsbC1udW1iZXJzLnRyYW5zZm9ybS50cyIsIndlYnBhY2s6Ly8tLS8uL3NyYy9jb21tb24vdHJhbnNmb3JtZXJzL2xvd2VyLWNhc2UudHJhbnNmb3JtLnRzIiwid2VicGFjazovLy0tLy4vc3JjL2NvbW1vbi90cmFuc2Zvcm1lcnMvcGFyc2UtbnVtYmVyLnRyYW5zZm9ybS50cyIsIndlYnBhY2s6Ly8tLS8uL3NyYy9jb25maWdzL2FwcC5jb25maWcudHMiLCJ3ZWJwYWNrOi8vLS0vLi9zcmMvY29uZmlncy9qd3QuY29uZmlnLnRzIiwid2VicGFjazovLy0tLy4vc3JjL2NvbmZpZ3MvbWFpbGVyLmNvbmZpZy50cyIsIndlYnBhY2s6Ly8tLS8uL3NyYy9jb25maWdzL29ybS5jb25maWcudHMiLCJ3ZWJwYWNrOi8vLS0vLi9zcmMvZGVjb3JhdG9ycy9lbmNyeXB0ZWQtY29sdW1uLmRlY29yYXRvci50cyIsIndlYnBhY2s6Ly8tLS8uL3NyYy9kZWNvcmF0b3JzL2p3dC1ndWFyZC5kZWNvcmF0b3IudHMiLCJ3ZWJwYWNrOi8vLS0vLi9zcmMvZGVjb3JhdG9ycy9ub3JtYWxpemVkLWNvbHVtbi5kZWNvcmF0b3IudHMiLCJ3ZWJwYWNrOi8vLS0vLi9zcmMvZGVjb3JhdG9ycy9wdWJsaWMtcm91dGUuZGVjb3JhdG9yLnRzIiwid2VicGFjazovLy0tLy4vc3JjL2d1YXJkcy9qd3QtYXV0aC5ndWFyZC50cyIsIndlYnBhY2s6Ly8tLS8uL3NyYy9taWRkbGV3YXJlcy9sb2dnZXIubWlkZGxld2FyZS50cyIsIndlYnBhY2s6Ly8tLS8uL3NyYy9tb2R1bGVzL2F1dGgvYXV0aC5jb250cm9sbGVyLnRzIiwid2VicGFjazovLy0tLy4vc3JjL21vZHVsZXMvYXV0aC9hdXRoLm1vZHVsZS50cyIsIndlYnBhY2s6Ly8tLS8uL3NyYy9tb2R1bGVzL2F1dGgvYXV0aC5zZXJ2aWNlLnRzIiwid2VicGFjazovLy0tLy4vc3JjL21vZHVsZXMvYXV0aC9kdG8vYXV0aGVkLmR0by50cyIsIndlYnBhY2s6Ly8tLS8uL3NyYy9tb2R1bGVzL2F1dGgvZHRvL2xvZ2luLWF1dGguZHRvLnRzIiwid2VicGFjazovLy0tLy4vc3JjL21vZHVsZXMvYXV0aC9kdG8vcmVjb3ZlcnktcGFzc3dvcmQuZHRvLnRzIiwid2VicGFjazovLy0tLy4vc3JjL21vZHVsZXMvYXV0aC9wYXJzZXJzL2F1dGgucGFyc2VyLnRzIiwid2VicGFjazovLy0tLy4vc3JjL21vZHVsZXMvYXV0aC9zdHJhdGVnaWVzL2p3dC5zdHJhdGVneS50cyIsIndlYnBhY2s6Ly8tLS8uL3NyYy9tb2R1bGVzL2JjcnlwdC9iY3J5cHQuc2VydmljZS50cyIsIndlYnBhY2s6Ly8tLS8uL3NyYy9tb2R1bGVzL3Bhc3N3b3JkL2R0b3MvcmVjb3ZlcnktcGFzc3dvcmQtY29uZmlybS5kdG8udHMiLCJ3ZWJwYWNrOi8vLS0vLi9zcmMvbW9kdWxlcy9wYXNzd29yZC9kdG9zL3Jlc2V0LXBhc3N3b3JkLmR0by50cyIsIndlYnBhY2s6Ly8tLS8uL3NyYy9tb2R1bGVzL3Bhc3N3b3JkL3Bhc3N3b3JkLmNvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vLS0vLi9zcmMvbW9kdWxlcy9wYXNzd29yZC9wYXNzd29yZC5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLS0vLi9zcmMvbW9kdWxlcy9wYXNzd29yZC9wYXNzd29yZC5zZXJ2aWNlLnRzIiwid2VicGFjazovLy0tLy4vc3JjL21vZHVsZXMvcGFzc3dvcmQvcHJveGllcy9wYXNzd29yZC5wcm94eS50cyIsIndlYnBhY2s6Ly8tLS8uL3NyYy9tb2R1bGVzL3VzZXIvZHRvL2NyZWF0ZS11c2VyLmR0by50cyIsIndlYnBhY2s6Ly8tLS8uL3NyYy9tb2R1bGVzL3VzZXIvZHRvL2ZpbHRlci11c2VyLmR0by50cyIsIndlYnBhY2s6Ly8tLS8uL3NyYy9tb2R1bGVzL3VzZXIvZHRvL3VwZGF0ZS11c2VyLmR0by50cyIsIndlYnBhY2s6Ly8tLS8uL3NyYy9tb2R1bGVzL3VzZXIvZHRvL3VzZXIuZHRvLnRzIiwid2VicGFjazovLy0tLy4vc3JjL21vZHVsZXMvdXNlci9lbnRpdGllcy91c2VyLmVudGl0eS50cyIsIndlYnBhY2s6Ly8tLS8uL3NyYy9tb2R1bGVzL3VzZXIvcGFyc2Vycy91c2VyLnBhcnNlci50cyIsIndlYnBhY2s6Ly8tLS8uL3NyYy9tb2R1bGVzL3VzZXIvdXNlci5jb250cm9sbGVyLnRzIiwid2VicGFjazovLy0tLy4vc3JjL21vZHVsZXMvdXNlci91c2VyLm1vZHVsZS50cyIsIndlYnBhY2s6Ly8tLS8uL3NyYy9tb2R1bGVzL3VzZXIvdXNlci5zZXJ2aWNlLnRzIiwid2VicGFjazovLy0tL2V4dGVybmFsIGNvbW1vbmpzIFwiQG5lc3Rqcy1tb2R1bGVzL21haWxlclwiIiwid2VicGFjazovLy0tL2V4dGVybmFsIGNvbW1vbmpzIFwiQG5lc3Rqcy1tb2R1bGVzL21haWxlci9kaXN0L2FkYXB0ZXJzL2hhbmRsZWJhcnMuYWRhcHRlclwiIiwid2VicGFjazovLy0tL2V4dGVybmFsIGNvbW1vbmpzIFwiQG5lc3Rqcy9jb21tb25cIiIsIndlYnBhY2s6Ly8tLS9leHRlcm5hbCBjb21tb25qcyBcIkBuZXN0anMvY29uZmlnXCIiLCJ3ZWJwYWNrOi8vLS0vZXh0ZXJuYWwgY29tbW9uanMgXCJAbmVzdGpzL2NvcmVcIiIsIndlYnBhY2s6Ly8tLS9leHRlcm5hbCBjb21tb25qcyBcIkBuZXN0anMvand0XCIiLCJ3ZWJwYWNrOi8vLS0vZXh0ZXJuYWwgY29tbW9uanMgXCJAbmVzdGpzL3Bhc3Nwb3J0XCIiLCJ3ZWJwYWNrOi8vLS0vZXh0ZXJuYWwgY29tbW9uanMgXCJAbmVzdGpzL3NlcnZlLXN0YXRpY1wiIiwid2VicGFjazovLy0tL2V4dGVybmFsIGNvbW1vbmpzIFwiQG5lc3Rqcy9zd2FnZ2VyXCIiLCJ3ZWJwYWNrOi8vLS0vZXh0ZXJuYWwgY29tbW9uanMgXCJAbmVzdGpzL3R5cGVvcm1cIiIsIndlYnBhY2s6Ly8tLS9leHRlcm5hbCBjb21tb25qcyBcImJjcnlwdFwiIiwid2VicGFjazovLy0tL2V4dGVybmFsIGNvbW1vbmpzIFwiY2xhc3MtdHJhbnNmb3JtZXJcIiIsIndlYnBhY2s6Ly8tLS9leHRlcm5hbCBjb21tb25qcyBcImNsYXNzLXZhbGlkYXRvclwiIiwid2VicGFjazovLy0tL2V4dGVybmFsIGNvbW1vbmpzIFwiZGF0ZS1mbnNcIiIsIndlYnBhY2s6Ly8tLS9leHRlcm5hbCBjb21tb25qcyBcImZha2VyLWJyXCIiLCJ3ZWJwYWNrOi8vLS0vZXh0ZXJuYWwgY29tbW9uanMgXCJuZXN0anMtdHlwZW9ybS1wYWdpbmF0ZVwiIiwid2VicGFjazovLy0tL2V4dGVybmFsIGNvbW1vbmpzIFwicGFzc3BvcnQtand0XCIiLCJ3ZWJwYWNrOi8vLS0vZXh0ZXJuYWwgY29tbW9uanMgXCJyeGpzXCIiLCJ3ZWJwYWNrOi8vLS0vZXh0ZXJuYWwgY29tbW9uanMgXCJ0eXBlb3JtXCIiLCJ3ZWJwYWNrOi8vLS0vZXh0ZXJuYWwgY29tbW9uanMgXCJ0eXBlb3JtLWVuY3J5cHRlZFwiIiwid2VicGFjazovLy0tL2V4dGVybmFsIGNvbW1vbmpzIFwidXVpZFwiIiwid2VicGFjazovLy0tL2V4dGVybmFsIG5vZGUtY29tbW9uanMgXCJwYXRoXCIiLCJ3ZWJwYWNrOi8vLS0vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLS0vLi9zcmMvbWFpbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuaW1wb3J0IHsgQXBpVGFncyB9IGZyb20gJ0BuZXN0anMvc3dhZ2dlcic7XG5cbi8qKlxuICogSWYgZG9uJ3QgcGFzcyBgY3VzdG9tVGFnTmFtZWAgdGhpcyBkZWNvcmF0b3JzIHdpbGwgYXNzdW1lcyB0byB1c2UgQXBpVGFnIHdpbGwgYmUgc2FtZSBgY29udHJvbGxlck5hbWVgXG5cbiAqIEBwYXJhbSBjb250cm9sbGVyTmFtZSAtIENvbnRyb2xsZXIgbmFtZVxuICogQHBhcmFtIGN1c3RvbVRhZ05hbWUgLSBBcGlUYWcgbmFtZSAob3B0aW9uYWwpXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBBcGlDb250cm9sbGVyKFxuICBjb250cm9sbGVyTmFtZTogc3RyaW5nLFxuICBjdXN0b21UYWdOYW1lPzogc3RyaW5nLFxuKTogQ2xhc3NEZWNvcmF0b3Ige1xuICByZXR1cm4gKHRhcmdldCkgPT4ge1xuICAgIENvbnRyb2xsZXIoY29udHJvbGxlck5hbWUpKHRhcmdldCk7XG4gICAgQXBpVGFncyhjdXN0b21UYWdOYW1lID8/IGNvbnRyb2xsZXJOYW1lKSh0YXJnZXQpO1xuICB9O1xufVxuIiwiaW1wb3J0IHsgQXBpQm9keSB9IGZyb20gJ0BuZXN0anMvc3dhZ2dlcic7XG5cbmV4cG9ydCBjb25zdCBBcGlGaWxlID1cbiAgKGZpbGVOYW1lID0gJ2ZpbGUnLCBpc0FycmF5ID0gZmFsc2UpOiBNZXRob2REZWNvcmF0b3IgPT5cbiAgKHRhcmdldDogYW55LCBwcm9wZXJ0eUtleTogc3RyaW5nLCBkZXNjcmlwdG9yOiBQcm9wZXJ0eURlc2NyaXB0b3IpID0+IHtcbiAgICBpZiAoaXNBcnJheSkge1xuICAgICAgQXBpQm9keSh7XG4gICAgICAgIHNjaGVtYToge1xuICAgICAgICAgIHR5cGU6ICdvYmplY3QnLFxuICAgICAgICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgICAgIFtmaWxlTmFtZV06IHtcbiAgICAgICAgICAgICAgdHlwZTogJ2FycmF5JyxcbiAgICAgICAgICAgICAgaXRlbXM6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgICAgICAgICBmb3JtYXQ6ICdiaW5hcnknLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSkodGFyZ2V0LCBwcm9wZXJ0eUtleSwgZGVzY3JpcHRvcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIEFwaUJvZHkoe1xuICAgICAgICBzY2hlbWE6IHtcbiAgICAgICAgICB0eXBlOiAnb2JqZWN0JyxcbiAgICAgICAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgICAgICBbZmlsZU5hbWVdOiB7XG4gICAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICAgICAgICBmb3JtYXQ6ICdiaW5hcnknLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSkodGFyZ2V0LCBwcm9wZXJ0eUtleSwgZGVzY3JpcHRvcik7XG4gICAgfVxuICB9O1xuIiwiaW1wb3J0IHsgYXBwbHlEZWNvcmF0b3JzLCBTZXRNZXRhZGF0YSB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcbmltcG9ydCB7IEFwaVByb3BlcnR5LCBBcGlQcm9wZXJ0eU9wdGlvbnMgfSBmcm9tICdAbmVzdGpzL3N3YWdnZXInO1xuaW1wb3J0IHsgSXNVVUlELCBVVUlEVmVyc2lvbiwgVmFsaWRhdGlvbk9wdGlvbnMgfSBmcm9tICdjbGFzcy12YWxpZGF0b3InO1xuaW1wb3J0IHsgdjQgYXMgdXVpZCB9IGZyb20gJ3V1aWQnO1xuXG5jb25zdCBJU19BUElfUFJPUEVSVFlfVVVJRCA9ICdhcGlQcm9wZXJ0eVV1aWQnO1xuXG4vKipcbiAqXG4gKiBAcGFyYW0gb3B0aW9ucyAtIFRoZXNlIGFyZSB0aGUgc2FtZSB0eXBlcyBhcyBgQXBpUHJvcGVydHlgXG4gKiBAcGFyYW0gdmVyc2lvbiAtIFRoZXNlIGFyZSB0aGUgc2FtZSB0eXBlcyBhcyBgSXNVVUlEYFxuICogQHBhcmFtIHZhbGlkYXRpb25PcHRpb25zIC0gVGhlc2UgYXJlIHRoZSBzYW1lIHR5cGVzIGFzIGBJc1VVSURgXG4gKlxuICogQGRlZmF1bHRcbiAqIG9wdGlvbnM6IHsgdHlwZTogU3RyaW5nLCBmb3JtYXQ6ICd1dWlkJyB9XG4gKiB2YWxpZGF0aW9uT3B0aW9ucy5tZXNzYWdlOiAnRm9ybWF0byBkZSBHVUlEIGludsOhbGlkby4nXG4gKiB2ZXJzaW9uOiA0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBBcGlQcm9wZXJ0eVV1aWQoXG4gIG9wdGlvbnM/OiBBcGlQcm9wZXJ0eU9wdGlvbnMsXG4gIHZlcnNpb24/OiBVVUlEVmVyc2lvbixcbiAgdmFsaWRhdGlvbk9wdGlvbnM/OiBWYWxpZGF0aW9uT3B0aW9ucyxcbikge1xuICByZXR1cm4gYXBwbHlEZWNvcmF0b3JzKFxuICAgIFNldE1ldGFkYXRhKElTX0FQSV9QUk9QRVJUWV9VVUlELCBvcHRpb25zKSxcbiAgICBBcGlQcm9wZXJ0eSh7XG4gICAgICAuLi5vcHRpb25zLFxuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZm9ybWF0OiAndXVpZCcsXG4gICAgICBkZXNjcmlwdGlvbjogJ0dVSUQgLSBJZGVudGlmaWNhZG9yIMOabmljbyBVbml2ZXJzYWwnLFxuICAgICAgZXhhbXBsZTogdXVpZCgpLFxuICAgIH0pLFxuICAgIElzVVVJRCh2ZXJzaW9uID8/ICc0Jywge1xuICAgICAgLi4udmFsaWRhdGlvbk9wdGlvbnMsXG4gICAgICBtZXNzYWdlOiB2YWxpZGF0aW9uT3B0aW9ucz8ubWVzc2FnZSA/PyAnRm9ybWF0byBkZSBHVUlEIGludsOhbGlkby4nLFxuICAgIH0pLFxuICApO1xufVxuIiwiaW1wb3J0IHsgYXBwbHlEZWNvcmF0b3JzLCBTZXRNZXRhZGF0YSB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcbmltcG9ydCB7XG4gIEFwaUJhZFJlcXVlc3RSZXNwb25zZSxcbiAgQXBpT3BlcmF0aW9uLFxuICBBcGlSZXNwb25zZU9wdGlvbnMsXG59IGZyb20gJ0BuZXN0anMvc3dhZ2dlcic7XG5pbXBvcnQgeyBBcGlHZW5lcmljRXJyb0R0byB9IGZyb20gJy4vZHRvcyc7XG5cbmNvbnN0IElTX0JBRF9SRVFVRVNUX1JFU1BPTlNFID0gJ2JhZFJlcXVlc3RSZXNwb25zZSc7XG5cbmNvbnN0IEJBRF9SRVFVRVNUX01FU1NBR0UgPVxuICAnUmVzcG9uc2Ugc3RhdHVzIGNvZGUgaW5kaWNhdGVzIHRoYXQgdGhlIHNlcnZlciBjYW5ub3Qgb3Igd2lsbCBub3QgcHJvY2VzcyB0aGUgcmVxdWVzdCBkdWUgdG8gc29tZXRoaW5nIHRoYXQgaXMgcGVyY2VpdmVkIHRvIGJlIGEgY2xpZW50IGVycm9yJztcblxuLyoqXG4gKiBUaGUgSHlwZXJUZXh0IFRyYW5zZmVyIFByb3RvY29sIChIVFRQKSBgNDAwIEJhZCBSZXF1ZXN0YCByZXNwb25zZSBzdGF0dXMgY29kZSBpbmRpY2F0ZXMgdGhhdCB0aGUgc2VydmVyIGNhbm5vdCBvciB3aWxsIG5vdCBwcm9jZXNzIHRoZVxuICogcmVxdWVzdCBkdWUgdG8gc29tZXRoaW5nIHRoYXQgaXMgcGVyY2VpdmVkIHRvIGJlIGEgY2xpZW50IGVycm9yIChlLmcuLCBtYWxmb3JtZWQgcmVxdWVzdCBzeW50YXgsIGludmFsaWQgcmVxdWVzdCBtZXNzYWdlIGZyYW1pbmcsIG9yXG4gKiBkZWNlcHRpdmUgcmVxdWVzdCByb3V0aW5nKS5cbiAqXG4gKiBAc2VlIFs0MDAgQmFkIFJlcXVlc3RdKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0hUVFAvU3RhdHVzLzQwMClcbiAqIEBwYXJhbSBvcHRpb25zIC0gVGhlc2UgYXJlIHRoZSBzYW1lIHR5cGVzIGFzIEFwaVJlc3BvbnNlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBCYWRSZXF1ZXN0UmVzcG9uc2Uob3B0aW9ucz86IEFwaVJlc3BvbnNlT3B0aW9ucykge1xuICByZXR1cm4gYXBwbHlEZWNvcmF0b3JzKFxuICAgIFNldE1ldGFkYXRhKElTX0JBRF9SRVFVRVNUX1JFU1BPTlNFLCBvcHRpb25zKSxcbiAgICBBcGlCYWRSZXF1ZXN0UmVzcG9uc2Uoe1xuICAgICAgLi4ub3B0aW9ucyxcbiAgICAgIGRlc2NyaXB0aW9uOiBvcHRpb25zPy5kZXNjcmlwdGlvbiA/PyBCQURfUkVRVUVTVF9NRVNTQUdFLFxuICAgICAgdHlwZTogQXBpR2VuZXJpY0Vycm9EdG8sXG4gICAgfSksXG4gICAgQXBpT3BlcmF0aW9uKHsgc3VtbWFyeTogb3B0aW9ucz8uZGVzY3JpcHRpb24gfSksXG4gICk7XG59XG4iLCJpbXBvcnQge1xuICBhcHBseURlY29yYXRvcnMsXG4gIEh0dHBDb2RlLFxuICBIdHRwU3RhdHVzLFxuICBTZXRNZXRhZGF0YSxcbn0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuaW1wb3J0IHtcbiAgQXBpQ3JlYXRlZFJlc3BvbnNlLFxuICBBcGlPcGVyYXRpb24sXG4gIEFwaVJlc3BvbnNlT3B0aW9ucyxcbn0gZnJvbSAnQG5lc3Rqcy9zd2FnZ2VyJztcblxuY29uc3QgSVNfQ1JFQVRFRF9SRVNQT05TRSA9ICdjcmVhdGVkUmVzcG9uc2UnO1xuXG5jb25zdCBDUkVBVEVEX01FU1NBR0UgPVxuICAnU3VjY2VzcyBzdGF0dXMgcmVzcG9uc2UgY29kZSBpbmRpY2F0ZXMgdGhhdCB0aGUgcmVxdWVzdCBoYXMgc3VjY2VlZGVkIGFuZCBoYXMgbGVkIHRvIHRoZSBjcmVhdGlvbiBvZiBhIHJlc291cmNlJztcblxuLyoqXG4gKiBUaGUgSFRUUCBgMjAxIENyZWF0ZWRgIHN1Y2Nlc3Mgc3RhdHVzIHJlc3BvbnNlIGNvZGUgaW5kaWNhdGVzIHRoYXQgdGhlIHJlcXVlc3QgaGFzIHN1Y2NlZWRlZCBhbmQgaGFzIGxlZCB0byB0aGUgY3JlYXRpb24gb2YgYVxuICogcmVzb3VyY2UuIFRoZSBuZXcgcmVzb3VyY2UgaXMgZWZmZWN0aXZlbHkgY3JlYXRlZCBiZWZvcmUgdGhpcyByZXNwb25zZSBpcyBzZW50IGJhY2sgYW5kIHRoZSBuZXcgcmVzb3VyY2UgaXMgcmV0dXJuZWQgaW4gdGhlIGJvZHlcbiAqIG9mIHRoZSBtZXNzYWdlLCBpdHMgW2xvY2F0aW9uXShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9IVFRQL0hlYWRlcnMvTG9jYXRpb24pIGJlaW5nIGVpdGhlciB0aGUgVVJMIG9mIHRoZVxuICogcmVxdWVzdCwgb3IgdGhlIGNvbnRlbnQgb2YgdGhlIExvY2F0aW9uIGhlYWRlci5cbiAqXG4gKiBUaGUgY29tbW9uIHVzZSBjYXNlIG9mIHRoaXMgc3RhdHVzIGNvZGUgaXMgYXMgdGhlIHJlc3VsdCBvZiBhIFtQT1NUXShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9IVFRQL01ldGhvZHMvUE9TVCkgcmVxdWVzdC5cbiAqXG4gKiBAc2VlIFsyMDEgQ3JlYXRlZF0oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSFRUUC9TdGF0dXMvMjAxKVxuICogQHBhcmFtIG9wdGlvbnMgLSBUaGVzZSBhcmUgdGhlIHNhbWUgdHlwZXMgYXMgQXBpUmVzcG9uc2VcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIENyZWF0ZWRSZXNwb25zZShvcHRpb25zPzogQXBpUmVzcG9uc2VPcHRpb25zKSB7XG4gIHJldHVybiBhcHBseURlY29yYXRvcnMoXG4gICAgU2V0TWV0YWRhdGEoSVNfQ1JFQVRFRF9SRVNQT05TRSwgb3B0aW9ucyksXG4gICAgSHR0cENvZGUoSHR0cFN0YXR1cy5DUkVBVEVEKSxcbiAgICBBcGlDcmVhdGVkUmVzcG9uc2Uoe1xuICAgICAgLi4ub3B0aW9ucyxcbiAgICAgIGRlc2NyaXB0aW9uOiBvcHRpb25zPy5kZXNjcmlwdGlvbiA/PyBDUkVBVEVEX01FU1NBR0UsXG4gICAgfSksXG4gICAgQXBpT3BlcmF0aW9uKHsgc3VtbWFyeTogb3B0aW9ucz8uZGVzY3JpcHRpb24gfSksXG4gICk7XG59XG4iLCJpbXBvcnQgeyBBcGlQcm9wZXJ0eSB9IGZyb20gJ0BuZXN0anMvc3dhZ2dlcic7XG5cbmV4cG9ydCBjbGFzcyBBcGlHZW5lcmljRXJyb0R0byB7XG4gIEBBcGlQcm9wZXJ0eSh7XG4gICAgZXhhbXBsZTogJ0dlbmVyaWMgZXJyb3InLFxuICB9KVxuICBlcnJvcjogc3RyaW5nO1xuXG4gIEBBcGlQcm9wZXJ0eSh7XG4gICAgZXhhbXBsZTogJ0dlbmVyaWMgbWVzc2FnZSBlcnJvcicsXG4gIH0pXG4gIG1lc3NhZ2U6IHN0cmluZztcbn1cbiIsImV4cG9ydCAqIGZyb20gJy4vYXBpLWdlbmVyaWMtZXJyb3IuZHRvJztcbiIsImltcG9ydCB7IGFwcGx5RGVjb3JhdG9ycywgU2V0TWV0YWRhdGEgfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5pbXBvcnQge1xuICBBcGlGb3JiaWRkZW5SZXNwb25zZSxcbiAgQXBpT3BlcmF0aW9uLFxuICBBcGlSZXNwb25zZU9wdGlvbnMsXG59IGZyb20gJ0BuZXN0anMvc3dhZ2dlcic7XG5pbXBvcnQgeyBBcGlHZW5lcmljRXJyb0R0byB9IGZyb20gJy4vZHRvcyc7XG5cbmNvbnN0IElTX0ZPUkJJRERFTl9SRVNQT05TRSA9ICdmb3JiaWRkZW5SZXNwb25zZSc7XG5cbmNvbnN0IEZPUkJJRERFTl9NRVNTQUdFID1cbiAgJ0NsaWVudCBlcnJvciBzdGF0dXMgcmVzcG9uc2UgY29kZSBpbmRpY2F0ZXMgdGhhdCB0aGUgc2VydmVyIHVuZGVyc3Rvb2QgdGhlIHJlcXVlc3QgYnV0IHJlZnVzZXMgdG8gYXV0aG9yaXplIGl0Jztcbi8qKlxuICogVGhlIEhUVFAgYDQwMyBGb3JiaWRkZW5gIGNsaWVudCBlcnJvciBzdGF0dXMgcmVzcG9uc2UgY29kZSBpbmRpY2F0ZXMgdGhhdCB0aGUgc2VydmVyIHVuZGVyc3Rvb2QgdGhlIHJlcXVlc3QgYnV0IHJlZnVzZXMgdG8gYXV0aG9yaXplIGl0LlxuICpcbiAqIFRoaXMgc3RhdHVzIGlzIHNpbWlsYXIgdG8gWzQwMV0oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSFRUUC9TdGF0dXMvNDAxKSwgYnV0IGluIHRoaXMgY2FzZSwgcmUtYXV0aGVudGljYXRpbmcgd2lsbCBtYWtlIG5vIGRpZmZlcmVuY2UuIFRoZSBhY2Nlc3MgaXMgcGVybWFuZW50bHkgZm9yYmlkZGVuIGFuZCB0aWVkIHRvIHRoZSBhcHBsaWNhdGlvbiBsb2dpYywgc3VjaCBhcyBpbnN1ZmZpY2llbnQgcmlnaHRzIHRvIGEgcmVzb3VyY2UuXG4gKlxuICogQHNlZSBbNDAzIEZvcmJpZGRlbl0oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSFRUUC9TdGF0dXMvNDAzKVxuICogQHBhcmFtIG9wdGlvbnMgVGhlc2UgYXJlIHRoZSBzYW1lIHR5cGVzIGFzIEFwaVJlc3BvbnNlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBGb3JiaWRkZW5SZXNwb25zZShvcHRpb25zPzogQXBpUmVzcG9uc2VPcHRpb25zKSB7XG4gIHJldHVybiBhcHBseURlY29yYXRvcnMoXG4gICAgU2V0TWV0YWRhdGEoSVNfRk9SQklEREVOX1JFU1BPTlNFLCBvcHRpb25zKSxcbiAgICBBcGlGb3JiaWRkZW5SZXNwb25zZSh7XG4gICAgICAuLi5vcHRpb25zLFxuICAgICAgZGVzY3JpcHRpb246IG9wdGlvbnM/LmRlc2NyaXB0aW9uID8/IEZPUkJJRERFTl9NRVNTQUdFLFxuICAgICAgdHlwZTogQXBpR2VuZXJpY0Vycm9EdG8sXG4gICAgfSksXG4gICAgQXBpT3BlcmF0aW9uKHsgc3VtbWFyeTogb3B0aW9ucz8uZGVzY3JpcHRpb24gfSksXG4gICk7XG59XG4iLCJleHBvcnQgKiBmcm9tICcuL2FwaS1jb250cm9sbGVyLmRlY29yYXRvcic7XG5leHBvcnQgKiBmcm9tICcuL2FwaS1maWxlLmRlY29yYXRvcic7XG5leHBvcnQgKiBmcm9tICcuL2FwaS1wcm9wcm9wZXJ0eS11dWlkLmRlY29yYXRvcic7XG5leHBvcnQgKiBmcm9tICcuL2JhZC1yZXF1ZXN0LXJlc3BvbnNlLmRlY29yYXRvcic7XG5leHBvcnQgKiBmcm9tICcuL2NyZWF0ZWQtcmVzcG9uc2UuZGVjb3JhdG9yJztcbmV4cG9ydCAqIGZyb20gJy4vZm9yYmlkZGVuLXJlc3BvbnNlLmRlY29yYXRvcic7XG5leHBvcnQgKiBmcm9tICcuL25vLWNvbnRlbnQtcmVzcG9uc2UuZGVjb3JhdG9yJztcbmV4cG9ydCAqIGZyb20gJy4vbm90LWZvdW5kLXJlc3BvbnNlLmRlY29yYXRvcic7XG5leHBvcnQgKiBmcm9tICcuL29rLXJlc3BvbnNlLmRlY29yYXRvcic7XG5leHBvcnQgKiBmcm9tICcuL3BhZ2luYXRlZC1vay1yZXNwb25zZS5kZWNvcmF0b3InO1xuZXhwb3J0ICogZnJvbSAnLi91bmF1dGhvcml6ZWQtcmVzcG9uc2UuZGVjb3JhdG9yJztcbmV4cG9ydCAqIGZyb20gJy4vdW5wcm9jZXNzYWJsZS1lbnRpdHktcmVzcG9uc2UuZGVjb3JhdG9yJztcbiIsImltcG9ydCB7IGFwcGx5RGVjb3JhdG9ycywgU2V0TWV0YWRhdGEgfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5pbXBvcnQge1xuICBBcGlOb0NvbnRlbnRSZXNwb25zZSxcbiAgQXBpT3BlcmF0aW9uLFxuICBBcGlSZXNwb25zZU9wdGlvbnMsXG59IGZyb20gJ0BuZXN0anMvc3dhZ2dlcic7XG5cbmNvbnN0IElTX05PX0NPTlRFTlRfUkVTUE9OU0UgPSAnbm9Db250ZW50UmVzcG9uc2UnO1xuXG5jb25zdCBOT19DT05URU5UX01FU1NBR0UgPSBgU3VjY2VzcyBzdGF0dXMgcmVzcG9uc2UgY29kZSBpbmRpY2F0ZXMgdGhhdCBhIHJlcXVlc3QgaGFzIHN1Y2NlZWRlZCwgYnV0IHRoYXQgdGhlIGNsaWVudCBkb2Vzbid0IG5lZWQgdG8gbmF2aWdhdGUgYXdheSBmcm9tIGl0cyBjdXJyZW50IHBhZ2VgO1xuXG4vKipcbiAqIFRoZSBIVFRQIGAyMDQgTm8gQ29udGVudGAgc3VjY2VzcyBzdGF0dXMgcmVzcG9uc2UgY29kZSBpbmRpY2F0ZXMgdGhhdCBhIHJlcXVlc3QgaGFzIHN1Y2NlZWRlZCwgYnV0IHRoYXQgdGhlIGNsaWVudCBkb2Vzbid0IG5lZWQgdG8gbmF2aWdhdGUgYXdheSBmcm9tIGl0cyBjdXJyZW50IHBhZ2UuXG4gKlxuICogVGhpcyBtaWdodCBiZSB1c2VkLCBmb3IgZXhhbXBsZSwgd2hlbiBpbXBsZW1lbnRpbmcgXCJzYXZlIGFuZCBjb250aW51ZSBlZGl0aW5nXCIgZnVuY3Rpb25hbGl0eSBmb3IgYSB3aWtpIHNpdGUuIEluIHRoaXMgY2FzZSBhIFtQVVRdKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0hUVFAvTWV0aG9kcy9QVVQpIHJlcXVlc3Qgd291bGQgYmUgdXNlZCB0byBzYXZlIHRoZSBwYWdlLCBhbmQgdGhlIDIwNCBObyBDb250ZW50IHJlc3BvbnNlIHdvdWxkIGJlIHNlbnQgdG8gaW5kaWNhdGUgdGhhdCB0aGUgZWRpdG9yIHNob3VsZCBub3QgYmUgcmVwbGFjZWQgYnkgc29tZSBvdGhlciBwYWdlLlxuICpcbiAqIEEgMjA0IHJlc3BvbnNlIGlzIGNhY2hlYWJsZSBieSBkZWZhdWx0IChhbiBbRVRhZ10oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSFRUUC9IZWFkZXJzL0VUYWcpIGhlYWRlciBpcyBpbmNsdWRlZCBpbiBzdWNoIGEgcmVzcG9uc2UpLlxuICpcbiAqIEBzZWUgWzIwNCBObyBDb250ZW50XShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9IVFRQL1N0YXR1cy8yMDQpXG4gKiBAcGFyYW0gb3B0aW9ucyAtIFRoZXNlIGFyZSB0aGUgc2FtZSB0eXBlcyBhcyBBcGlSZXNwb25zZVxuICovXG5leHBvcnQgZnVuY3Rpb24gTm9Db250ZW50UmVzcG9uc2Uob3B0aW9ucz86IEFwaVJlc3BvbnNlT3B0aW9ucykge1xuICByZXR1cm4gYXBwbHlEZWNvcmF0b3JzKFxuICAgIFNldE1ldGFkYXRhKElTX05PX0NPTlRFTlRfUkVTUE9OU0UsIG9wdGlvbnMpLFxuICAgIEFwaU5vQ29udGVudFJlc3BvbnNlKHtcbiAgICAgIC4uLm9wdGlvbnMsXG4gICAgICBkZXNjcmlwdGlvbjogb3B0aW9ucz8uZGVzY3JpcHRpb24gPz8gTk9fQ09OVEVOVF9NRVNTQUdFLFxuICAgICAgdHlwZTogbnVsbCxcbiAgICB9KSxcbiAgICBBcGlPcGVyYXRpb24oeyBzdW1tYXJ5OiBvcHRpb25zPy5kZXNjcmlwdGlvbiB9KSxcbiAgKTtcbn1cbiIsImltcG9ydCB7IGFwcGx5RGVjb3JhdG9ycywgU2V0TWV0YWRhdGEgfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5pbXBvcnQge1xuICBBcGlOb3RGb3VuZFJlc3BvbnNlLFxuICBBcGlPcGVyYXRpb24sXG4gIEFwaVJlc3BvbnNlT3B0aW9ucyxcbn0gZnJvbSAnQG5lc3Rqcy9zd2FnZ2VyJztcblxuY29uc3QgSVNfTk9UX0ZPVU5EX1JFU1BPTlNFID0gJ25vdEZvdW5kUmVzcG9uc2UnO1xuXG5jb25zdCBOT1RfRk9VTkRfTUVTU0FHRSA9IGBDbGllbnQgZXJyb3IgcmVzcG9uc2UgY29kZSBpbmRpY2F0ZXMgdGhhdCB0aGUgc2VydmVyIGNhbid0IGZpbmQgdGhlIHJlcXVlc3RlZCByZXNvdXJjZWA7XG5cbi8qKlxuICogVGhlIEhUVFAgYDQwNCBOb3QgRm91bmRgIGNsaWVudCBlcnJvciByZXNwb25zZSBjb2RlIGluZGljYXRlcyB0aGF0IHRoZSBzZXJ2ZXIgY2FuJ3QgZmluZCB0aGUgcmVxdWVzdGVkIHJlc291cmNlLiBMaW5rcyB0aGF0IGxlYWQgdG8gYVxuICogNDA0IHBhZ2UgYXJlIG9mdGVuIGNhbGxlZCBicm9rZW4gb3IgZGVhZCBsaW5rcyBhbmQgY2FuIGJlIHN1YmplY3QgdG8gW2xpbmsgcm90XShodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9MaW5rX3JvdCkuXG4gKlxuICogQSA0MDQgc3RhdHVzIGNvZGUgZG9lcyBub3QgaW5kaWNhdGUgd2hldGhlciB0aGUgcmVzb3VyY2UgaXMgdGVtcG9yYXJpbHkgb3IgcGVybWFuZW50bHkgbWlzc2luZy4gQnV0IGlmIGEgcmVzb3VyY2UgaXMgcGVybWFuZW50bHlcbiAqIHJlbW92ZWQsIGEgWzQxMF0oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSFRUUC9TdGF0dXMvNDEwKSAoR29uZSkgc2hvdWxkIGJlIHVzZWQgaW5zdGVhZCBvZiBhIDQwNCBzdGF0dXMuXG4gKlxuICogQHNlZSBbNDA0IEJhZCBSZXF1ZXN0XShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9IVFRQL1N0YXR1cy80MDQpXG4gKiBAcGFyYW0gb3B0aW9ucyBUaGVzZSBhcmUgdGhlIHNhbWUgdHlwZXMgYXMgQXBpUmVzcG9uc2VcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIE5vdEZvdW5kUmVzcG9uc2Uob3B0aW9ucz86IEFwaVJlc3BvbnNlT3B0aW9ucykge1xuICByZXR1cm4gYXBwbHlEZWNvcmF0b3JzKFxuICAgIFNldE1ldGFkYXRhKElTX05PVF9GT1VORF9SRVNQT05TRSwgb3B0aW9ucyksXG4gICAgQXBpTm90Rm91bmRSZXNwb25zZSh7XG4gICAgICAuLi5vcHRpb25zLFxuICAgICAgZGVzY3JpcHRpb246IG9wdGlvbnM/LmRlc2NyaXB0aW9uID8/IE5PVF9GT1VORF9NRVNTQUdFLFxuICAgICAgdHlwZTogbnVsbCxcbiAgICB9KSxcbiAgICBBcGlPcGVyYXRpb24oeyBzdW1tYXJ5OiBvcHRpb25zPy5kZXNjcmlwdGlvbiB9KSxcbiAgKTtcbn1cbiIsImltcG9ydCB7XG4gIGFwcGx5RGVjb3JhdG9ycyxcbiAgSHR0cENvZGUsXG4gIEh0dHBTdGF0dXMsXG4gIFNldE1ldGFkYXRhLFxufSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5pbXBvcnQge1xuICBBcGlPa1Jlc3BvbnNlLFxuICBBcGlPcGVyYXRpb24sXG4gIEFwaVJlc3BvbnNlT3B0aW9ucyxcbn0gZnJvbSAnQG5lc3Rqcy9zd2FnZ2VyJztcblxuY29uc3QgSVNfT0tfUkVTUE9OU0UgPSAnb2tSZXNwb25zZSc7XG5cbmNvbnN0IE9LX01FU1NBR0UgPVxuICAnU3VjY2VzcyBzdGF0dXMgcmVzcG9uc2UgY29kZSBpbmRpY2F0ZXMgdGhhdCB0aGUgcmVxdWVzdCBoYXMgc3VjY2VlZGVkJztcblxuLyoqXG4gKiBUaGUgSFRUUCBgMjAwIE9LYCBzdWNjZXNzIHN0YXR1cyByZXNwb25zZSBjb2RlIGluZGljYXRlcyB0aGF0IHRoZSByZXF1ZXN0IGhhcyBzdWNjZWVkZWQuIEEgMjAwIHJlc3BvbnNlIGlzIGNhY2hlYWJsZSBieSBkZWZhdWx0LlxuICogVGhlIG1lYW5pbmcgb2YgYSBzdWNjZXNzIGRlcGVuZHMgb24gdGhlIEhUVFAgcmVxdWVzdCBtZXRob2Q6XG4gKlxuICogLSBbR0VUXShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9IVFRQL01ldGhvZHMvR0VUKTogVGhlIHJlc291cmNlIGhhcyBiZWVuIGZldGNoZWQgYW5kIGlzIHRyYW5zbWl0dGVkIGluIHRoZSBtZXNzYWdlIGJvZHkuXG4gKiAtIFtIRUFEXShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9IVFRQL01ldGhvZHMvSEVBRCk6IFRoZSByZXByZXNlbnRhdGlvbiBoZWFkZXJzIGFyZSBpbmNsdWRlZCBpbiB0aGUgcmVzcG9uc2Ugd2l0aG91dCBhbnkgbWVzc2FnZSBib2R5XG4gKiAtIFtQT1NUXShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9IVFRQL01ldGhvZHMvUE9TVCk6IFRoZSByZXNvdXJjZSBkZXNjcmliaW5nIHRoZSByZXN1bHQgb2YgdGhlIGFjdGlvbiBpcyB0cmFuc21pdHRlZCBpbiB0aGUgbWVzc2FnZSBib2R5XG4gKiAtIFtUUkFDRV0oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSFRUUC9NZXRob2RzL1RSQUNFKTogVGhlIG1lc3NhZ2UgYm9keSBjb250YWlucyB0aGUgcmVxdWVzdCBtZXNzYWdlIGFzIHJlY2VpdmVkIGJ5IHRoZSBzZXJ2ZXIuXG4gKlxuICogVGhlIHN1Y2Nlc3NmdWwgcmVzdWx0IG9mIGEgW1BVVF0oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSFRUUC9NZXRob2RzL1BVVCkgb3IgYSBbREVMRVRFXShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9IVFRQL01ldGhvZHMvREVMRVRFKSBpcyBvZnRlbiBub3QgYSAyMDAgT0sgYnV0IGEgWzIwNF0oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSFRUUC9TdGF0dXMvMjA0KSBObyBDb250ZW50IChvciBhIFsyMDFdKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0hUVFAvU3RhdHVzLzIwMSkgQ3JlYXRlZCB3aGVuIHRoZSByZXNvdXJjZSBpcyB1cGxvYWRlZCBmb3IgdGhlIGZpcnN0IHRpbWUpLlxuICpcbiAqIEBzZWUgWzIwMCBPa10oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSFRUUC9TdGF0dXMvMjAwKVxuICogQHBhcmFtIG9wdGlvbnMgLSBUaGVzZSBhcmUgdGhlIHNhbWUgdHlwZXMgYXMgQXBpUmVzcG9uc2VcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIE9rUmVzcG9uc2Uob3B0aW9ucz86IEFwaVJlc3BvbnNlT3B0aW9ucykge1xuICByZXR1cm4gYXBwbHlEZWNvcmF0b3JzKFxuICAgIFNldE1ldGFkYXRhKElTX09LX1JFU1BPTlNFLCBvcHRpb25zKSxcbiAgICBIdHRwQ29kZShIdHRwU3RhdHVzLk9LKSxcbiAgICBBcGlPa1Jlc3BvbnNlKHtcbiAgICAgIC4uLm9wdGlvbnMsXG4gICAgICBkZXNjcmlwdGlvbjogb3B0aW9ucz8uZGVzY3JpcHRpb24gPz8gT0tfTUVTU0FHRSxcbiAgICB9KSxcbiAgICBBcGlPcGVyYXRpb24oeyBzdW1tYXJ5OiBvcHRpb25zPy5kZXNjcmlwdGlvbiA/PyBPS19NRVNTQUdFIH0pLFxuICApO1xufVxuIiwiaW1wb3J0IHsgYXBwbHlEZWNvcmF0b3JzLCBUeXBlIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuaW1wb3J0IHtcbiAgQXBpRXh0cmFNb2RlbHMsXG4gIEFwaVJlc3BvbnNlT3B0aW9ucyxcbiAgZ2V0U2NoZW1hUGF0aCxcbn0gZnJvbSAnQG5lc3Rqcy9zd2FnZ2VyJztcbmltcG9ydCB7IE9rUmVzcG9uc2UgfSBmcm9tICcuL29rLXJlc3BvbnNlLmRlY29yYXRvcic7XG5cbmV4cG9ydCBjb25zdCBQYWdpbmF0ZWRPa1Jlc3BvbnNlID0gPFRNb2RlbCBleHRlbmRzIFR5cGU8YW55Pj4oXG4gIG1vZGVsOiBUTW9kZWwsXG4gIG9wdGlvbnM/OiBBcGlSZXNwb25zZU9wdGlvbnMsXG4pID0+IHtcbiAgcmV0dXJuIGFwcGx5RGVjb3JhdG9ycyhcbiAgICBBcGlFeHRyYU1vZGVscyhtb2RlbCksXG4gICAgT2tSZXNwb25zZSh7XG4gICAgICBjb250ZW50OiB7XG4gICAgICAgICdhcHBsaWNhdGlvbi1qc29uJzoge1xuICAgICAgICAgIHNjaGVtYToge1xuICAgICAgICAgICAgcHJvcGVydGllczoge1xuICAgICAgICAgICAgICBpdGVtczoge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdhcnJheScsXG4gICAgICAgICAgICAgICAgaXRlbXM6IHtcbiAgICAgICAgICAgICAgICAgICRyZWY6IGdldFNjaGVtYVBhdGgobW9kZWwpLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIG1ldGE6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnb2JqZWN0JyxcbiAgICAgICAgICAgICAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgICAgICAgICAgICB0b3RhbEl0ZW1zOiB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdudW1iZXInLFxuICAgICAgICAgICAgICAgICAgICBudWxsYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBpdGVtQ291bnQ6IHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ251bWJlcicsXG4gICAgICAgICAgICAgICAgICAgIG51bGxhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIGl0ZW1zUGVyUGFnZToge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnbnVtYmVyJyxcbiAgICAgICAgICAgICAgICAgICAgbnVsbGFibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgdG90YWxQYWdlczoge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnbnVtYmVyJyxcbiAgICAgICAgICAgICAgICAgICAgbnVsbGFibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgY3VycmVudFBhZ2U6IHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ251bWJlcicsXG4gICAgICAgICAgICAgICAgICAgIG51bGxhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIC4uLm9wdGlvbnMsXG4gICAgfSksXG4gICk7XG59O1xuIiwiaW1wb3J0IHsgYXBwbHlEZWNvcmF0b3JzLCBTZXRNZXRhZGF0YSB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcbmltcG9ydCB7XG4gIEFwaU9wZXJhdGlvbixcbiAgQXBpUmVzcG9uc2VPcHRpb25zLFxuICBBcGlVbmF1dGhvcml6ZWRSZXNwb25zZSxcbn0gZnJvbSAnQG5lc3Rqcy9zd2FnZ2VyJztcblxuY29uc3QgSVNfVU5BVVRIT1JJWkVEX1JFU1BPTlNFID0gJ3VuYXV0aG9yaXplZFJlc3BvbnNlJztcblxuY29uc3QgVU5BVVRIT1JJWkVEX01FU1NBR0UgPVxuICAnQ2xpZW50IGVycm9yIHN0YXR1cyByZXNwb25zZSBjb2RlIGluZGljYXRlcyB0aGF0IHRoZSByZXF1ZXN0IGhhcyBub3QgYmVlbiBhcHBsaWVkIGJlY2F1c2UgaXQgbGFja3MgdmFsaWQgYXV0aGVudGljYXRpb24gY3JlZGVudGlhbHMgZm9yIHRoZSB0YXJnZXQgcmVzb3VyY2UnO1xuXG4vKipcbiAqIFRoZSBIVFRQIGA0MDEgVW5hdXRob3JpemVkYCBjbGllbnQgZXJyb3Igc3RhdHVzIHJlc3BvbnNlIGNvZGUgaW5kaWNhdGVzIHRoYXQgdGhlIHJlcXVlc3QgaGFzIG5vdCBiZWVuIGFwcGxpZWQgYmVjYXVzZSBpdCBsYWNrcyB2YWxpZCBhdXRoZW50aWNhdGlvbiBjcmVkZW50aWFscyBmb3IgdGhlIHRhcmdldCByZXNvdXJjZS5cblxuICogVGhpcyBzdGF0dXMgaXMgc2VudCB3aXRoIGEgW1dXVy1BdXRoZW50aWNhdGVdKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0hUVFAvSGVhZGVycy9XV1ctQXV0aGVudGljYXRlKSBoZWFkZXIgdGhhdCBjb250YWlucyBpbmZvcm1hdGlvbiBvbiBob3cgdG8gYXV0aG9yaXplIGNvcnJlY3RseS5cbiAqXG4gKiBUaGlzIHN0YXR1cyBpcyBzaW1pbGFyIHRvIFs0MDNdKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0hUVFAvU3RhdHVzLzQwMyksIGJ1dCBpbiB0aGlzIGNhc2UsIGF1dGhlbnRpY2F0aW9uIGlzIHBvc3NpYmxlLlxuICpcbiAqIEBzZWUgWzQwMSBVbmF1dGhvcml6ZWRdKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0hUVFAvU3RhdHVzLzQwMSlcbiAqIEBwYXJhbSBvcHRpb25zIC0gVGhlc2UgYXJlIHRoZSBzYW1lIHR5cGVzIGFzIEFwaVJlc3BvbnNlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBVbmF1dGhvcml6ZWRSZXNwb25zZShvcHRpb25zPzogQXBpUmVzcG9uc2VPcHRpb25zKSB7XG4gIHJldHVybiBhcHBseURlY29yYXRvcnMoXG4gICAgU2V0TWV0YWRhdGEoSVNfVU5BVVRIT1JJWkVEX1JFU1BPTlNFLCBvcHRpb25zKSxcbiAgICBBcGlVbmF1dGhvcml6ZWRSZXNwb25zZSh7XG4gICAgICAuLi5vcHRpb25zLFxuICAgICAgZGVzY3JpcHRpb246IG9wdGlvbnM/LmRlc2NyaXB0aW9uID8/IFVOQVVUSE9SSVpFRF9NRVNTQUdFLFxuICAgIH0pLFxuICAgIEFwaU9wZXJhdGlvbih7IHN1bW1hcnk6IG9wdGlvbnM/LmRlc2NyaXB0aW9uIH0pLFxuICApO1xufVxuIiwiaW1wb3J0IHsgYXBwbHlEZWNvcmF0b3JzLCBTZXRNZXRhZGF0YSB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcbmltcG9ydCB7XG4gIEFwaU9wZXJhdGlvbixcbiAgQXBpUmVzcG9uc2VPcHRpb25zLFxuICBBcGlVbnByb2Nlc3NhYmxlRW50aXR5UmVzcG9uc2UsXG59IGZyb20gJ0BuZXN0anMvc3dhZ2dlcic7XG5cbmNvbnN0IElTX1VOUFJPQ0VTU0FCTEVfRU5USVRZX1JFU1BPTlNFID0gJ3VucHJvY2Vzc2FibGVFbnRpdHlSZXNwb25zZSc7XG5cbmNvbnN0IFVOUFJPQ0VTU0FCTEVfRU5USVRZX01FU1NBR0UgPVxuICAnVGhlIEh5cGVyVGV4dCBUcmFuc2ZlciBQcm90b2NvbCAoSFRUUCkgYDQyMiBVbnByb2Nlc3NhYmxlIEVudGl0eWAgcmVzcG9uc2Ugc3RhdHVzIGNvZGUgaW5kaWNhdGVzIHRoYXQgdGhlIHNlcnZlciB1bmRlcnN0YW5kcyB0aGUgY29udGVudCB0eXBlIG9mIHRoZSByZXF1ZXN0IGVudGl0eSwgYW5kIHRoZSBzeW50YXggb2YgdGhlIHJlcXVlc3QgZW50aXR5IGlzIGNvcnJlY3QsIGJ1dCBpdCB3YXMgdW5hYmxlIHRvIHByb2Nlc3MgdGhlIGNvbnRhaW5lZCBpbnN0cnVjdGlvbnMnO1xuXG4vKipcbiAqIFRoZSBIeXBlclRleHQgVHJhbnNmZXIgUHJvdG9jb2wgKEhUVFApIGA0MjIgVW5wcm9jZXNzYWJsZSBFbnRpdHlgIHJlc3BvbnNlIHN0YXR1cyBjb2RlIGluZGljYXRlcyB0aGF0IHRoZSBzZXJ2ZXIgdW5kZXJzdGFuZHMgdGhlIGNvbnRlbnQgdHlwZSBvZiB0aGUgcmVxdWVzdCBlbnRpdHksIGFuZCB0aGUgc3ludGF4IG9mIHRoZSByZXF1ZXN0IGVudGl0eSBpcyBjb3JyZWN0LCBidXQgaXQgd2FzIHVuYWJsZSB0byBwcm9jZXNzIHRoZSBjb250YWluZWQgaW5zdHJ1Y3Rpb25zLlxuICpcbiAqIEBzZWUgWzQyMiBVbnByb2Nlc3NhYmxlIEVudGl0eV0oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSFRUUC9TdGF0dXMvNDIyKVxuICogQHBhcmFtIG9wdGlvbnMgLSBUaGVzZSBhcmUgdGhlIHNhbWUgdHlwZXMgYXMgQXBpUmVzcG9uc2VcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIFVucHJvY2Vzc2FibGVFbnRpdHlSZXNwb25zZShvcHRpb25zPzogQXBpUmVzcG9uc2VPcHRpb25zKSB7XG4gIHJldHVybiBhcHBseURlY29yYXRvcnMoXG4gICAgU2V0TWV0YWRhdGEoSVNfVU5QUk9DRVNTQUJMRV9FTlRJVFlfUkVTUE9OU0UsIG9wdGlvbnMpLFxuICAgIEFwaVVucHJvY2Vzc2FibGVFbnRpdHlSZXNwb25zZSh7XG4gICAgICAuLi5vcHRpb25zLFxuICAgICAgZGVzY3JpcHRpb246IG9wdGlvbnM/LmRlc2NyaXB0aW9uID8/IFVOUFJPQ0VTU0FCTEVfRU5USVRZX01FU1NBR0UsXG4gICAgfSksXG4gICAgQXBpT3BlcmF0aW9uKHtcbiAgICAgIHN1bW1hcnk6IG9wdGlvbnM/LmRlc2NyaXB0aW9uID8/IFVOUFJPQ0VTU0FCTEVfRU5USVRZX01FU1NBR0UsXG4gICAgfSksXG4gICk7XG59XG4iLCJpbXBvcnQgeyBNYWlsZXJNb2R1bGUgfSBmcm9tICdAbmVzdGpzLW1vZHVsZXMvbWFpbGVyJztcbmltcG9ydCB7IE1pZGRsZXdhcmVDb25zdW1lciwgTW9kdWxlLCBOZXN0TW9kdWxlIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuaW1wb3J0IHsgQ29uZmlnTW9kdWxlLCBDb25maWdTZXJ2aWNlIH0gZnJvbSAnQG5lc3Rqcy9jb25maWcnO1xuaW1wb3J0IHsgU2VydmVTdGF0aWNNb2R1bGUgfSBmcm9tICdAbmVzdGpzL3NlcnZlLXN0YXRpYyc7XG5pbXBvcnQgeyBUeXBlT3JtTW9kdWxlIH0gZnJvbSAnQG5lc3Rqcy90eXBlb3JtJztcbmltcG9ydCB7IGpvaW4gfSBmcm9tICdwYXRoJztcbmltcG9ydCB7IGRlZmF1bHQgYXMgQXBwQ29uZmlnIH0gZnJvbSAnLi9jb25maWdzL2FwcC5jb25maWcnO1xuaW1wb3J0IHsgZGVmYXVsdCBhcyBKd3RDb25maWcgfSBmcm9tICcuL2NvbmZpZ3Mvand0LmNvbmZpZyc7XG5pbXBvcnQgeyBkZWZhdWx0IGFzIE1haWxlckNvbmZpZyB9IGZyb20gJy4vY29uZmlncy9tYWlsZXIuY29uZmlnJztcbmltcG9ydCB7IGRlZmF1bHQgYXMgVHlwZW9ybUNvbmZpZyB9IGZyb20gJy4vY29uZmlncy9vcm0uY29uZmlnJztcbmltcG9ydCB7IExvZ2dlck1pZGRsZXdhcmUgfSBmcm9tICcuL21pZGRsZXdhcmVzL2xvZ2dlci5taWRkbGV3YXJlJztcbmltcG9ydCB7IEF1dGhNb2R1bGUgfSBmcm9tICcuL21vZHVsZXMvYXV0aC9hdXRoLm1vZHVsZSc7XG5pbXBvcnQgeyBQYXNzd29yZE1vZHVsZSB9IGZyb20gJy4vbW9kdWxlcy9wYXNzd29yZC9wYXNzd29yZC5tb2R1bGUnO1xuaW1wb3J0IHsgVXNlck1vZHVsZSB9IGZyb20gJy4vbW9kdWxlcy91c2VyL3VzZXIubW9kdWxlJztcblxuQE1vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb25maWdNb2R1bGUuZm9yUm9vdCh7XG4gICAgICBpc0dsb2JhbDogdHJ1ZSxcbiAgICAgIGxvYWQ6IFtKd3RDb25maWcsIEFwcENvbmZpZywgTWFpbGVyQ29uZmlnXSxcbiAgICB9KSxcbiAgICBTZXJ2ZVN0YXRpY01vZHVsZS5mb3JSb290KHtcbiAgICAgIHJvb3RQYXRoOiBqb2luKF9fZGlybmFtZSwgJy4uJywgJ3B1YmxpYycpLFxuICAgIH0pLFxuICAgIFR5cGVPcm1Nb2R1bGUuZm9yUm9vdChUeXBlb3JtQ29uZmlnKSxcbiAgICBNYWlsZXJNb2R1bGUuZm9yUm9vdEFzeW5jKHtcbiAgICAgIGltcG9ydHM6IFtDb25maWdTZXJ2aWNlXSxcbiAgICAgIGluamVjdDogW0NvbmZpZ1NlcnZpY2VdLFxuICAgICAgdXNlRmFjdG9yeTogYXN5bmMgKGNvbmZpZ1NlcnZpY2U6IENvbmZpZ1NlcnZpY2UpID0+XG4gICAgICAgIGNvbmZpZ1NlcnZpY2UuZ2V0KCdtYWlsZXInKSxcbiAgICB9KSxcbiAgICBBdXRoTW9kdWxlLFxuICAgIFBhc3N3b3JkTW9kdWxlLFxuICAgIFVzZXJNb2R1bGUsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSBpbXBsZW1lbnRzIE5lc3RNb2R1bGUge1xuICBjb25maWd1cmUoY29uc3VtZXI6IE1pZGRsZXdhcmVDb25zdW1lcikge1xuICAgIGNvbnN1bWVyLmFwcGx5KExvZ2dlck1pZGRsZXdhcmUpLmZvclJvdXRlcygnKicpO1xuICB9XG59XG4iLCJleHBvcnQgZW51bSBBcHBSb2xlcyB7XG4gIEFETUlOID0gJ0FETUlOJyxcbiAgVVNFUiA9ICdVU0VSJyxcbn1cbiIsImV4cG9ydCB0eXBlIEJ1aWxkZXJGdW5jdGlvbjxUPiA9IChmaWVsZFZhbHVlOiBUKSA9PiB2b2lkO1xuXG5leHBvcnQgY2xhc3MgRW50aXR5RmlsdGVyQnVpbGRlciB7XG4gIHN0YXRpYyB3aXRoRmlsdGVyPFQ+KGZpZWxkOiBULCBmbmM6IEJ1aWxkZXJGdW5jdGlvbjxUPikge1xuICAgIGlmIChcbiAgICAgIChmaWVsZCAhPT0gdW5kZWZpbmVkICYmIGZpZWxkICE9PSBudWxsKSB8fFxuICAgICAgKEFycmF5LmlzQXJyYXkoZmllbGQpICYmIGZpZWxkLmxlbmd0aCA+IDApXG4gICAgKSB7XG4gICAgICBmbmMoZmllbGQpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyB3aXRoT3JkZXJCeTxUPihmaWVsZDogVCwgdmFsdWU6IFQsIGZuYzogQnVpbGRlckZ1bmN0aW9uPFQ+KSB7XG4gICAgaWYgKGZpZWxkICYmIGZpZWxkID09PSB2YWx1ZSkge1xuICAgICAgZm5jKHZhbHVlKTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgZ2V0QXNBcnJheTxUPih2YWx1ZTogVCB8IFRbXSk6IFRbXSB8IHVuZGVmaW5lZCB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQgfHwgdmFsdWUgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gW3ZhbHVlXTtcbiAgfVxuXG4gIHN0YXRpYyBjcmVhdGVMaWtlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gYCUke3ZhbHVlfSVgO1xuICB9XG59XG4iLCJpbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi4vLi4vbW9kdWxlcy91c2VyL2VudGl0aWVzL3VzZXIuZW50aXR5JztcblxuZXhwb3J0IGNsYXNzIEp3dFBheWxvYWRCdWlsZGVyIHtcbiAgc3RhdGljIHRvVXNlckxvZ2luKHVzZXI6IFVzZXIpOiBFeHByZXNzLlVzZXIge1xuICAgIHJldHVybiB7XG4gICAgICB1c2VySWQ6IHVzZXIuaWQsXG4gICAgICB1c2VyOiB1c2VyLmZ1bGxOYW1lLFxuICAgICAgcm9sZTogdXNlci5yb2xlLFxuICAgIH07XG4gIH1cblxuICBzdGF0aWMgdG9SZWNvdmVyeVRva2VuKFxuICAgIHVzZXI6IFVzZXIsXG4gICAgR1VJRDogc3RyaW5nLFxuICAgIGV4cGlyYXRpb25EYXRlOiBEYXRlLFxuICApOiBFeHByZXNzLlJlY292ZXJ5IHtcbiAgICByZXR1cm4ge1xuICAgICAgR1VJRCxcbiAgICAgIGV4cGlyYXRpb25EYXRlLFxuICAgICAgdXNlcjogSnd0UGF5bG9hZEJ1aWxkZXIudG9Vc2VyTG9naW4odXNlciksXG4gICAgfTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQXBpUHJvcGVydHlPcHRpb25hbCB9IGZyb20gJ0BuZXN0anMvc3dhZ2dlcic7XG5pbXBvcnQgeyBUcmFuc2Zvcm0gfSBmcm9tICdjbGFzcy10cmFuc2Zvcm1lcic7XG5pbXBvcnQgeyBBbGxvdywgSXNPcHRpb25hbCB9IGZyb20gJ2NsYXNzLXZhbGlkYXRvcic7XG5pbXBvcnQgeyBmb3JtYXQsIHN1YldlZWtzIH0gZnJvbSAnZGF0ZS1mbnMnO1xuaW1wb3J0IHsgU2VsZWN0UXVlcnlCdWlsZGVyIH0gZnJvbSAndHlwZW9ybSc7XG5pbXBvcnQge1xuICBCdWlsZGVyRnVuY3Rpb24sXG4gIEVudGl0eUZpbHRlckJ1aWxkZXIsXG59IGZyb20gJy4uL2J1aWxkZXJzL2VudGl0eS1maWx0ZXIuYnVpbGRlcic7XG5pbXBvcnQgeyBQYXJzZU51bWJlclRyYW5zZm9ybSB9IGZyb20gJy4uL3RyYW5zZm9ybWVycy9wYXJzZS1udW1iZXIudHJhbnNmb3JtJztcblxuY29uc3QgU1VCX1dFRUsgPSAxO1xuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFBhZ2luYXRpb25EdG8ge1xuICBAQXBpUHJvcGVydHlPcHRpb25hbCh7XG4gICAgZGVzY3JpcHRpb246ICdQYWdpbmEgYXR1YWwnLFxuICAgIGV4YW1wbGU6IDEsXG4gICAgZGVmYXVsdDogMSxcbiAgfSlcbiAgQElzT3B0aW9uYWwoKVxuICBAVHJhbnNmb3JtKFBhcnNlTnVtYmVyVHJhbnNmb3JtKVxuICBwYWdlPzogbnVtYmVyO1xuXG4gIEBBcGlQcm9wZXJ0eU9wdGlvbmFsKHtcbiAgICBkZXNjcmlwdGlvbjogJ0xpbWl0ZSBkZSBlbnRpZGFkZXMgcG9yIHDDoWdpbmEnLFxuICAgIGV4YW1wbGU6IDEwLFxuICAgIGRlZmF1bHQ6IDEwLFxuICB9KVxuICBASXNPcHRpb25hbCgpXG4gIEBUcmFuc2Zvcm0oUGFyc2VOdW1iZXJUcmFuc2Zvcm0pXG4gIGxpbWl0PzogbnVtYmVyO1xuXG4gIEBBcGlQcm9wZXJ0eU9wdGlvbmFsKHtcbiAgICBkZXNjcmlwdGlvbjogJ09yZGVuYcOnw6NvJyxcbiAgfSlcbiAgQElzT3B0aW9uYWwoKVxuICBAQWxsb3coKVxuICBvcmRlcj86IHtcbiAgICBbcHJvcDogc3RyaW5nXTogJ0FTQycgfCAnREVTQyc7XG4gIH07XG5cbiAgQEFwaVByb3BlcnR5T3B0aW9uYWwoe1xuICAgIGRlc2NyaXB0aW9uOiAnRW50aWRhZGVzIGEgcGFydGlyIGRlIHVtYSBkYXRhJyxcbiAgICBleGFtcGxlOiBmb3JtYXQoc3ViV2Vla3MobmV3IERhdGUoKSwgU1VCX1dFRUspLCAneXl5eS1NTS1kZCcpLFxuICB9KVxuICBASXNPcHRpb25hbCgpXG4gIHN0YXJ0QXQ/OiBzdHJpbmc7XG5cbiAgQEFwaVByb3BlcnR5T3B0aW9uYWwoe1xuICAgIGRlc2NyaXB0aW9uOiAnRW50aWRhZGVzIGF0w6kgZGUgdW1hIGRhdGEnLFxuICAgIGV4YW1wbGU6IGZvcm1hdChuZXcgRGF0ZSgpLCAneXl5eS1NTS1kZCcpLFxuICB9KVxuICBASXNPcHRpb25hbCgpXG4gIGVuZEF0Pzogc3RyaW5nO1xuXG4gIHByb3RlY3RlZCBnZXRXaXRoQXJyYXkodmFsdWU6IGFueSkge1xuICAgIHJldHVybiBFbnRpdHlGaWx0ZXJCdWlsZGVyLmdldEFzQXJyYXkodmFsdWUpO1xuICB9XG5cbiAgcHJvdGVjdGVkIHdpdGhGaWx0ZXI8RSA9IGFueT4oZmllbGQ6IEUsIGZuYzogQnVpbGRlckZ1bmN0aW9uPEU+KSB7XG4gICAgRW50aXR5RmlsdGVyQnVpbGRlci53aXRoRmlsdGVyKGZpZWxkLCBmbmMpO1xuICB9XG5cbiAgcHJvdGVjdGVkIHdpdGhPcmRlckJ5PEUgPSBhbnk+KGZpZWxkOiBFLCB2YWx1ZTogRSwgZm5jOiBCdWlsZGVyRnVuY3Rpb248RT4pIHtcbiAgICBFbnRpdHlGaWx0ZXJCdWlsZGVyLndpdGhPcmRlckJ5KGZpZWxkLCB2YWx1ZSwgZm5jKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBjcmVhdGVMaWtlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gRW50aXR5RmlsdGVyQnVpbGRlci5jcmVhdGVMaWtlKHZhbHVlKTtcbiAgfVxuXG4gIGFic3RyYWN0IGNyZWF0ZVdoZXJlPFQgPSBhbnk+KHF1ZXJ5QnVpbGRlcjogU2VsZWN0UXVlcnlCdWlsZGVyPFQ+KTogdm9pZDtcblxuICBjcmVhdGVPcmRlcjxUID0gYW55PihxdWVyeUJ1aWxkZXI6IFNlbGVjdFF1ZXJ5QnVpbGRlcjxUPik6IHZvaWQge1xuICAgIGlmICh0aGlzLm9yZGVyKSB7XG4gICAgICBPYmplY3QuZW50cmllcyh0aGlzLm9yZGVyKS5mb3JFYWNoKChbZmllbGQsIHZhbHVlXSkgPT4ge1xuICAgICAgICBxdWVyeUJ1aWxkZXIuYWRkT3JkZXJCeShgJHtxdWVyeUJ1aWxkZXIuYWxpYXN9LiR7ZmllbGR9YCwgdmFsdWUpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQge1xuICBCZWZvcmVJbnNlcnQsXG4gIENyZWF0ZURhdGVDb2x1bW4sXG4gIFByaW1hcnlDb2x1bW4sXG4gIFVwZGF0ZURhdGVDb2x1bW4sXG59IGZyb20gJ3R5cGVvcm0nO1xuaW1wb3J0IHsgdjQgYXMgdXVpZHY0IH0gZnJvbSAndXVpZCc7XG5cbmV4cG9ydCBjbGFzcyBVbmlxdWVJZGVudGlmaWVyRW50aXR5IHtcbiAgQFByaW1hcnlDb2x1bW4oJ3V1aWQnKVxuICBpZDogc3RyaW5nO1xuXG4gIEBDcmVhdGVEYXRlQ29sdW1uKHtcbiAgICBuYW1lOiAnY3JlYXRlZF9hdCcsXG4gICAgdHlwZTogJ3RpbWVzdGFtcCcsXG4gIH0pXG4gIGNyZWF0ZWRBdDogRGF0ZTtcblxuICBAVXBkYXRlRGF0ZUNvbHVtbih7XG4gICAgbmFtZTogJ3VwZGF0ZWRfYXQnLFxuICAgIHR5cGU6ICd0aW1lc3RhbXAnLFxuICB9KVxuICB1cGRhdGVkQXQ6IERhdGU7XG5cbiAgQEJlZm9yZUluc2VydCgpXG4gIHByaXZhdGUgZ2VuZXJhdGVJZCgpIHtcbiAgICBpZiAodGhpcy5pZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuaWQgPSB1dWlkdjQoKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgSHR0cEV4Y2VwdGlvbiwgSHR0cFN0YXR1cyB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcblxuZXhwb3J0IGNsYXNzIEVudGl0eUNvbmZsaWN0RXJyb3IgZXh0ZW5kcyBIdHRwRXhjZXB0aW9uIHtcbiAgY29uc3RydWN0b3IoZW50aXR5Q2xhc3NOYW1lOiBhbnksIGNyaXRlcmlvOiBzdHJpbmcgfCBudW1iZXIpIHtcbiAgICBzdXBlcihcbiAgICAgIGBEYWRvIGrDoSBleGlzdGVudGUgbmEgZW50aWRhZGUgJHtlbnRpdHlDbGFzc05hbWUubmFtZX0uIENyaXRlcmlvOiAke2NyaXRlcmlvfWAsXG4gICAgICBIdHRwU3RhdHVzLkNPTkZMSUNULFxuICAgICk7XG4gIH1cbn1cbiIsImltcG9ydCB7IEh0dHBFeGNlcHRpb24sIEh0dHBTdGF0dXMgfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5cbmV4cG9ydCBjbGFzcyBFbnRpdHlOb3RGb3VuZEVycm9yIGV4dGVuZHMgSHR0cEV4Y2VwdGlvbiB7XG4gIGNvbnN0cnVjdG9yKGVudGl0eUNsYXNzTmFtZTogYW55LCBjcml0ZXJpYT86IGFueSkge1xuICAgIHN1cGVyKFxuICAgICAgY3JpdGVyaWFcbiAgICAgICAgPyBgTm8gZGF0YSBmb3VuZCBvbiAke2VudGl0eUNsYXNzTmFtZS5uYW1lfSBlbnRpdHkuIENyaXRlcmlhOiAke2NyaXRlcmlhfS5gXG4gICAgICAgIDogYE5vIGRhdGEgZm91bmQgb24gJHtlbnRpdHlDbGFzc05hbWUubmFtZX0gZW50aXR5LmAsXG5cbiAgICAgIEh0dHBTdGF0dXMuTk9UX0ZPVU5ELFxuICAgICk7XG4gIH1cbn1cbiIsImltcG9ydCB7IEJhZFJlcXVlc3RSZXNwb25zZSB9IGZyb20gJ0BhcHAvc3dhZ2dlci1kZWNvcmF0b3JzJztcbmltcG9ydCB7XG4gIEFyZ3VtZW50c0hvc3QsXG4gIEJhZFJlcXVlc3RFeGNlcHRpb24sXG4gIENhdGNoLFxuICBFeGNlcHRpb25GaWx0ZXIsXG4gIEh0dHBTdGF0dXMsXG59IGZyb20gJ0BuZXN0anMvY29tbW9uJztcbmltcG9ydCB7IFJlc3BvbnNlIH0gZnJvbSAnZXhwcmVzcyc7XG5cbkBDYXRjaChCYWRSZXF1ZXN0RXhjZXB0aW9uKVxuZXhwb3J0IGNsYXNzIEJhZFJlcXVlc3RFeGNlcHRpb25GaWx0ZXIgaW1wbGVtZW50cyBFeGNlcHRpb25GaWx0ZXIge1xuICBjYXRjaChleGNlcHRpb246IEJhZFJlcXVlc3RFeGNlcHRpb24sIGhvc3Q6IEFyZ3VtZW50c0hvc3QpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gaG9zdC5zd2l0Y2hUb0h0dHAoKTtcbiAgICBjb25zdCByZXNwb25zZSA9IGNvbnRleHQuZ2V0UmVzcG9uc2U8UmVzcG9uc2U+KCk7XG5cbiAgICBCYWRSZXF1ZXN0UmVzcG9uc2UoeyBkZXNjcmlwdGlvbjogZXhjZXB0aW9uLm1lc3NhZ2UgfSk7XG5cbiAgICByZXR1cm4gcmVzcG9uc2Uuc3RhdHVzKEh0dHBTdGF0dXMuQkFEX1JFUVVFU1QpLmpzb24oe1xuICAgICAgZXJyb3I6ICdCYWQgcmVxdWVzdCcsXG4gICAgICBtZXNzYWdlOiAoZXhjZXB0aW9uLmdldFJlc3BvbnNlKCkgYXMgYW55KS5tZXNzYWdlLFxuICAgIH0pO1xuICB9XG59XG4iLCJpbXBvcnQge1xuICBBcmd1bWVudHNIb3N0LFxuICBDYXRjaCxcbiAgRXhjZXB0aW9uRmlsdGVyLFxuICBIdHRwU3RhdHVzLFxufSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5pbXBvcnQgeyBBcGlDb25mbGljdFJlc3BvbnNlIH0gZnJvbSAnQG5lc3Rqcy9zd2FnZ2VyJztcbmltcG9ydCB7IFJlc3BvbnNlIH0gZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgeyBFbnRpdHlDb25mbGljdEVycm9yIH0gZnJvbSAnLi4vZXhjZXB0aW9ucy9lbnRpdHktY29uZmxpY3QtZXJyb3IuZXhjZXB0aW9uJztcblxuQENhdGNoKEVudGl0eUNvbmZsaWN0RXJyb3IpXG5leHBvcnQgY2xhc3MgRW50aXR5Q29uZmxpY3RFeGNlcHRpb25GaWx0ZXIgaW1wbGVtZW50cyBFeGNlcHRpb25GaWx0ZXIge1xuICBjYXRjaChleGNlcHRpb246IEVudGl0eUNvbmZsaWN0RXJyb3IsIGhvc3Q6IEFyZ3VtZW50c0hvc3QpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gaG9zdC5zd2l0Y2hUb0h0dHAoKTtcbiAgICBjb25zdCByZXNwb25zZSA9IGNvbnRleHQuZ2V0UmVzcG9uc2U8UmVzcG9uc2U+KCk7XG5cbiAgICBBcGlDb25mbGljdFJlc3BvbnNlKHsgZGVzY3JpcHRpb246IGV4Y2VwdGlvbi5tZXNzYWdlIH0pO1xuXG4gICAgcmV0dXJuIHJlc3BvbnNlLnN0YXR1cyhIdHRwU3RhdHVzLkNPTkZMSUNUKS5qc29uKHtcbiAgICAgIGVycm9yOiAnQ29uZmxpY3QnLFxuICAgICAgbWVzc2FnZTogZXhjZXB0aW9uLm1lc3NhZ2UsXG4gICAgfSk7XG4gIH1cbn1cbiIsImltcG9ydCB7XG4gIEFyZ3VtZW50c0hvc3QsXG4gIENhdGNoLFxuICBFeGNlcHRpb25GaWx0ZXIsXG4gIEh0dHBTdGF0dXMsXG59IGZyb20gJ0BuZXN0anMvY29tbW9uJztcbmltcG9ydCB7IEFwaU5vdEZvdW5kUmVzcG9uc2UgfSBmcm9tICdAbmVzdGpzL3N3YWdnZXInO1xuaW1wb3J0IHsgUmVzcG9uc2UgfSBmcm9tICdleHByZXNzJztcbmltcG9ydCB7IE5vdEZvdW5kRXJyb3IgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEVudGl0eU5vdEZvdW5kRXJyb3IgfSBmcm9tICd0eXBlb3JtJztcblxuQENhdGNoKEVudGl0eU5vdEZvdW5kRXJyb3IsIE5vdEZvdW5kRXJyb3IpXG5leHBvcnQgY2xhc3MgRW50aXR5Tm90Rm91bmRFeGNlcHRpb25GaWx0ZXIgaW1wbGVtZW50cyBFeGNlcHRpb25GaWx0ZXIge1xuICBjYXRjaChleGNlcHRpb246IEVudGl0eU5vdEZvdW5kRXJyb3IgfCBOb3RGb3VuZEVycm9yLCBob3N0OiBBcmd1bWVudHNIb3N0KSB7XG4gICAgY29uc3QgY29udGV4dCA9IGhvc3Quc3dpdGNoVG9IdHRwKCk7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBjb250ZXh0LmdldFJlc3BvbnNlPFJlc3BvbnNlPigpO1xuXG4gICAgQXBpTm90Rm91bmRSZXNwb25zZSh7IGRlc2NyaXB0aW9uOiBleGNlcHRpb24ubWVzc2FnZSB9KTtcblxuICAgIHJldHVybiByZXNwb25zZS5zdGF0dXMoSHR0cFN0YXR1cy5OT1RfRk9VTkQpLmpzb24oe1xuICAgICAgZXJyb3I6ICdOb3QgRm91bmQnLFxuICAgICAgbWVzc2FnZTogZXhjZXB0aW9uLm1lc3NhZ2UsXG4gICAgfSk7XG4gIH1cbn1cbiIsImltcG9ydCB7XG4gIEFyZ3VtZW50c0hvc3QsXG4gIENhdGNoLFxuICBFeGNlcHRpb25GaWx0ZXIsXG4gIEh0dHBTdGF0dXMsXG4gIFVuYXV0aG9yaXplZEV4Y2VwdGlvbixcbn0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuaW1wb3J0IHsgQXBpVW5hdXRob3JpemVkUmVzcG9uc2UgfSBmcm9tICdAbmVzdGpzL3N3YWdnZXInO1xuaW1wb3J0IHsgUmVzcG9uc2UgfSBmcm9tICdleHByZXNzJztcblxuQENhdGNoKFVuYXV0aG9yaXplZEV4Y2VwdGlvbilcbmV4cG9ydCBjbGFzcyBVbmF1dGhvcml6ZWRFeGNlcHRpb25GaWx0ZXIgaW1wbGVtZW50cyBFeGNlcHRpb25GaWx0ZXIge1xuICBjYXRjaChleGNlcHRpb246IFVuYXV0aG9yaXplZEV4Y2VwdGlvbiwgaG9zdDogQXJndW1lbnRzSG9zdCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSBob3N0LnN3aXRjaFRvSHR0cCgpO1xuICAgIGNvbnN0IHJlc3BvbnNlID0gY29udGV4dC5nZXRSZXNwb25zZTxSZXNwb25zZT4oKTtcblxuICAgIEFwaVVuYXV0aG9yaXplZFJlc3BvbnNlKHsgZGVzY3JpcHRpb246IGV4Y2VwdGlvbi5tZXNzYWdlIH0pO1xuXG4gICAgcmV0dXJuIHJlc3BvbnNlLnN0YXR1cyhIdHRwU3RhdHVzLlVOQVVUSE9SSVpFRCkuanNvbih7XG4gICAgICBlcnJvcjogJ1VuYXV0aG9yaXplZCcsXG4gICAgICBtZXNzYWdlOiAnVm9jw6ogbsOjbyBlc3TDoSBhdXRvcml6YWRvLicsXG4gICAgfSk7XG4gIH1cbn1cbiIsImltcG9ydCB7XG4gIEFyZ3VtZW50c0hvc3QsXG4gIENhdGNoLFxuICBFeGNlcHRpb25GaWx0ZXIsXG4gIEh0dHBTdGF0dXMsXG4gIFVucHJvY2Vzc2FibGVFbnRpdHlFeGNlcHRpb24sXG59IGZyb20gJ0BuZXN0anMvY29tbW9uJztcbmltcG9ydCB7IEFwaVVucHJvY2Vzc2FibGVFbnRpdHlSZXNwb25zZSB9IGZyb20gJ0BuZXN0anMvc3dhZ2dlcic7XG5pbXBvcnQgeyBSZXNwb25zZSB9IGZyb20gJ2V4cHJlc3MnO1xuXG5AQ2F0Y2goVW5wcm9jZXNzYWJsZUVudGl0eUV4Y2VwdGlvbilcbmV4cG9ydCBjbGFzcyBVbnByb2Nlc3NhYmxlRW50aXR5RXhjZXB0aW9uRmlsdGVyIGltcGxlbWVudHMgRXhjZXB0aW9uRmlsdGVyIHtcbiAgY2F0Y2goZXhjZXB0aW9uOiBVbnByb2Nlc3NhYmxlRW50aXR5RXhjZXB0aW9uLCBob3N0OiBBcmd1bWVudHNIb3N0KSB7XG4gICAgY29uc3QgY29udGV4dCA9IGhvc3Quc3dpdGNoVG9IdHRwKCk7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBjb250ZXh0LmdldFJlc3BvbnNlPFJlc3BvbnNlPigpO1xuXG4gICAgQXBpVW5wcm9jZXNzYWJsZUVudGl0eVJlc3BvbnNlKHsgZGVzY3JpcHRpb246IGV4Y2VwdGlvbi5tZXNzYWdlIH0pO1xuXG4gICAgcmV0dXJuIHJlc3BvbnNlLnN0YXR1cyhIdHRwU3RhdHVzLlVOUFJPQ0VTU0FCTEVfRU5USVRZKS5qc29uKHtcbiAgICAgIGVycm9yOiAnVW5wcm9jZXNzYWJsZSBlbnRpdHknLFxuICAgICAgbWVzc2FnZTogZXhjZXB0aW9uLm1lc3NhZ2UsXG4gICAgfSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IElQYWdpbmF0aW9uTWV0YSwgUGFnaW5hdGlvbiB9IGZyb20gJ25lc3Rqcy10eXBlb3JtLXBhZ2luYXRlJztcbmltcG9ydCB7IFBhZ2luYXRlZER0byB9IGZyb20gJy4uL2R0b3MvcGFnaW5hdGVkLmR0byc7XG5cbmV4cG9ydCBjbGFzcyBQYWdpbmF0aW9uUGFyc2VyIHtcbiAgc3RhdGljIHRvUGFnaW5hdGlvbjxQLCBNPihcbiAgICBwYWdpbmF0ZTogUGFnaW5hdGlvbjxQLCBJUGFnaW5hdGlvbk1ldGE+LFxuICAgIG1hcHBlckZuOiAoZW50aXR5OiBQKSA9PiBNLFxuICApOiBQYWdpbmF0ZWREdG88TT4ge1xuICAgIHJldHVybiB7XG4gICAgICBpdGVtczogcGFnaW5hdGUuaXRlbXMubWFwKG1hcHBlckZuKSxcbiAgICAgIG1ldGE6IHBhZ2luYXRlLm1ldGEsXG4gICAgfTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQ29sdW1uT3B0aW9ucywgVmFsdWVUcmFuc2Zvcm1lciB9IGZyb20gJ3R5cGVvcm0nO1xuaW1wb3J0IHsgRW5jcnlwdGlvblRyYW5zZm9ybWVyIH0gZnJvbSAndHlwZW9ybS1lbmNyeXB0ZWQnO1xuXG5leHBvcnQgY2xhc3MgVHlwZU9ybUNvbHVtblBhcnNlciB7XG4gIHN0YXRpYyB0b1RyYW5zZm9ybWVyKFxuICAgIG9wdGlvbnM/OiBDb2x1bW5PcHRpb25zLFxuICApOiBWYWx1ZVRyYW5zZm9ybWVyIHwgVmFsdWVUcmFuc2Zvcm1lcltdIHtcbiAgICBpZiAob3B0aW9ucyAmJiBvcHRpb25zLnRyYW5zZm9ybWVyKSB7XG4gICAgICByZXR1cm4gb3B0aW9ucy50cmFuc2Zvcm1lcjtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgdG86ICh2YWx1ZTogc3RyaW5nKSA9PiB7XG4gICAgICAgIGlmICh2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgcmV0dXJuIHZhbHVlLnRyaW0oKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgIH0sXG4gICAgICBmcm9tOiAodmFsdWU6IHN0cmluZykgPT4gdmFsdWUsXG4gICAgfTtcbiAgfVxuXG4gIHN0YXRpYyB0b0VuY3J5cHRlZFRyYW5zZm9ybWVyKCkge1xuICAgIHJldHVybiBuZXcgRW5jcnlwdGlvblRyYW5zZm9ybWVyKHtcbiAgICAgIGtleTogJ2U0MWM5NjZmMjFmOWUxNTc3ODAyNDYzZjg5MjRlNmEzZmUzZTk3NTFmMjAxMzA0MjEzYjJmODQ1ZDg4NDFkNjEnLFxuICAgICAgYWxnb3JpdGhtOiAnYWVzLTI1Ni1jYmMnLFxuICAgICAgaXZMZW5ndGg6IDE2LFxuICAgICAgaXY6ICdmZjVhYzE5MTkwNDI0YjFkODhmOTQxOWVmOTQ5YWU1NicsXG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgdG9OYW1lKHByb3BlcnR5S2V5OiBzdHJpbmcsIG9wdGlvbnM/OiBDb2x1bW5PcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5uYW1lKSB7XG4gICAgICByZXR1cm4gb3B0aW9ucy5uYW1lO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmNhbWVsVG9TbmFrZUNhc2UocHJvcGVydHlLZXkpO1xuICB9XG5cbiAgcHJpdmF0ZSBzdGF0aWMgY2FtZWxUb1NuYWtlQ2FzZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgY29uc3QgdG9TbmFrZUNhc2UgPSB2YWx1ZS5yZXBsYWNlKC9bQS1aXS9nLCAoeCkgPT4gYF8ke3gudG9Mb3dlckNhc2UoKX1gKTtcblxuICAgIHJldHVybiB0b1NuYWtlQ2FzZTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgVHJhbnNmb3JtRm5QYXJhbXMgfSBmcm9tICdjbGFzcy10cmFuc2Zvcm1lcic7XG5pbXBvcnQgeyBUeXBlT3JtQ29sdW1uUGFyc2VyIH0gZnJvbSAnLi4vcGFyc2Vycy90eXBlb3JtLWNvbHVtbi5wYXJzZXInO1xuXG5leHBvcnQgY29uc3QgRGVjcnlwdGVkVHJhbnNmb3JtID0gKHByb3BlcnR5OiBUcmFuc2Zvcm1GblBhcmFtcykgPT5cbiAgVHlwZU9ybUNvbHVtblBhcnNlci50b0VuY3J5cHRlZFRyYW5zZm9ybWVyKCkudG8ocHJvcGVydHkudmFsdWUpO1xuIiwiaW1wb3J0IHsgVHJhbnNmb3JtRm5QYXJhbXMgfSBmcm9tICdjbGFzcy10cmFuc2Zvcm1lcic7XG5cbmV4cG9ydCBjb25zdCBLZWVwQWxsTnVtYmVyc1RyYW5zZm9ybSA9IChwcm9wZXJ0eTogVHJhbnNmb3JtRm5QYXJhbXMpID0+IHtcbiAgcmV0dXJuIHByb3BlcnR5LnZhbHVlLnJlcGxhY2UoL1xcRCsvZywgJycpO1xufTtcbiIsImltcG9ydCB7IFRyYW5zZm9ybUZuUGFyYW1zIH0gZnJvbSAnY2xhc3MtdHJhbnNmb3JtZXInO1xuXG5leHBvcnQgY29uc3QgTG93ZXJDYXNlVHJhbnNmb3JtID0gKHByb3BlcnR5OiBUcmFuc2Zvcm1GblBhcmFtcykgPT4ge1xuICByZXR1cm4gU3RyaW5nKHByb3BlcnR5LnZhbHVlKS50b0xvY2FsZUxvd2VyQ2FzZSgpO1xufTtcbiIsImltcG9ydCB7IFRyYW5zZm9ybUZuUGFyYW1zIH0gZnJvbSAnY2xhc3MtdHJhbnNmb3JtZXInO1xuXG5leHBvcnQgY29uc3QgUGFyc2VOdW1iZXJUcmFuc2Zvcm0gPSAocHJvcGVydHk6IFRyYW5zZm9ybUZuUGFyYW1zKSA9PiB7XG4gIHJldHVybiBOdW1iZXIocHJvcGVydHkudmFsdWUpO1xufTtcbiIsImltcG9ydCB7IHJlZ2lzdGVyQXMgfSBmcm9tICdAbmVzdGpzL2NvbmZpZyc7XG5cbmV4cG9ydCBkZWZhdWx0IHJlZ2lzdGVyQXMoJ2FwcCcsICgpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBwb3J0OiBwYXJzZUludChwcm9jZXNzLmVudi5QT1JUKSB8fCAzMDMwLFxuICAgIHVybHM6IHtcbiAgICAgIGFwaTogcHJvY2Vzcy5lbnYuQVBJX1VSTCB8fCAnaHR0cDovL2xvY2FsaG9zdDozMDMwJyxcbiAgICAgIHdlYjogcHJvY2Vzcy5lbnYuV0VCX1VSTCB8fCAnaHR0cDovL2xvY2FsaG9zdDozMDAxJyxcbiAgICB9LFxuICB9O1xufSk7XG4iLCJpbXBvcnQgeyByZWdpc3RlckFzIH0gZnJvbSAnQG5lc3Rqcy9jb25maWcnO1xuaW1wb3J0IHsgSnd0TW9kdWxlT3B0aW9ucyB9IGZyb20gJ0BuZXN0anMvand0JztcblxuZXhwb3J0IGRlZmF1bHQgcmVnaXN0ZXJBcygnand0JywgKCk6IEp3dE1vZHVsZU9wdGlvbnMgPT4ge1xuICByZXR1cm4ge1xuICAgIHNlY3JldDogcHJvY2Vzcy5lbnYuSldUX1NFQ1JFVCB8fCAnZmFrZV9zZWNyZXRfYmYwZjNjZjM2ZScsXG4gICAgc2lnbk9wdGlvbnM6IHtcbiAgICAgIGV4cGlyZXNJbjogcHJvY2Vzcy5lbnYuSldUX0VYUElSRVNfSU4gfHwgJzEwIGRheXMnLFxuICAgIH0sXG4gIH07XG59KTtcbiIsImltcG9ydCB7IE1haWxlck9wdGlvbnMgfSBmcm9tICdAbmVzdGpzLW1vZHVsZXMvbWFpbGVyJztcbmltcG9ydCB7IEhhbmRsZWJhcnNBZGFwdGVyIH0gZnJvbSAnQG5lc3Rqcy1tb2R1bGVzL21haWxlci9kaXN0L2FkYXB0ZXJzL2hhbmRsZWJhcnMuYWRhcHRlcic7XG5pbXBvcnQgeyByZWdpc3RlckFzIH0gZnJvbSAnQG5lc3Rqcy9jb25maWcnO1xuaW1wb3J0IHsgam9pbiB9IGZyb20gJ3BhdGgnO1xuXG5leHBvcnQgZGVmYXVsdCByZWdpc3RlckFzKCdtYWlsZXInLCAoKTogTWFpbGVyT3B0aW9ucyA9PiB7XG4gIHJldHVybiB7XG4gICAgdHJhbnNwb3J0OiB7XG4gICAgICBob3N0OiAnc210cC5tYWlsdHJhcC5pbycsXG4gICAgICBwb3J0OiAyNTI1LFxuICAgICAgaWdub3JlVExTOiB0cnVlLFxuICAgICAgc2VjdXJlOiBmYWxzZSxcbiAgICAgIGF1dGg6IHtcbiAgICAgICAgdXNlcjogcHJvY2Vzcy5lbnYuTUFJTERFVl9JTkNPTUlOR19VU0VSIHx8ICdmY2Q2Nzk3YzFlMjcxOScsXG4gICAgICAgIHBhc3M6IHByb2Nlc3MuZW52Lk1BSUxERVZfSU5DT01JTkdfUEFTUyB8fCAnMDZlMDAyMDAyMWY3MjYnLFxuICAgICAgfSxcbiAgICB9LFxuICAgIGRlZmF1bHRzOiB7XG4gICAgICBmcm9tOiAnXCJObyBSZXBseVwiIDxuby1yZXBseUBsb2NhbGhvc3Q+JyxcbiAgICB9LFxuICAgIHByZXZpZXc6IHRydWUsXG4gICAgdGVtcGxhdGU6IHtcbiAgICAgIGRpcjogam9pbihfX2Rpcm5hbWUsICcuLi90ZW1wbGF0ZXMvJyksXG4gICAgICBhZGFwdGVyOiBuZXcgSGFuZGxlYmFyc0FkYXB0ZXIoKSxcbiAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgc3RyaWN0OiB0cnVlLFxuICAgICAgfSxcbiAgICB9LFxuICB9O1xufSk7XG4iLCJpbXBvcnQgeyBUeXBlT3JtTW9kdWxlT3B0aW9ucyB9IGZyb20gJ0BuZXN0anMvdHlwZW9ybSc7XG5pbXBvcnQgeyBqb2luIH0gZnJvbSAncGF0aCc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgdHlwZTogJ3Bvc3RncmVzJyxcbiAgaG9zdDogcHJvY2Vzcy5lbnYuREJfSE9TVCB8fCAndHVmZmkuZGIuZWxlcGhhbnRzcWwuY29tJyxcbiAgcG9ydDogcHJvY2Vzcy5lbnYuREJfUE9SVCB8fCA1NDMyLFxuICB1c2VybmFtZTogcHJvY2Vzcy5lbnYuREJfVVNFUk5BTUUgfHwgJ3pneHB3enljJyxcbiAgcGFzc3dvcmQ6IHByb2Nlc3MuZW52LkRCX1BBU1NXT1JEIHx8ICdTaFRYQ19vemNOeVhjZUtlTG5kQnRTV1p2T3BzVXk0cicsXG4gIGRhdGFiYXNlOiBwcm9jZXNzLmVudi5EQl9EQVRBQkFTRSB8fCAnemd4cHd6eWMnLFxuICBlbnRpdGllczogW3Byb2Nlc3MuZW52LkRCX0VOVElUSUVTIHx8ICdkaXN0LyoqLyouZW50aXR5LmpzJ10sXG4gIGF1dG9Mb2FkRW50aXRpZXM6IHRydWUsXG4gIHN5bmNocm9uaXplOiBmYWxzZSxcbiAgZHJvcFNjaGVtYTogZmFsc2UsXG4gIG1pZ3JhdGlvbnNSdW46IHRydWUsXG4gIGxvZ2dpbmc6IHRydWUsXG4gIGxvZ2dlcjogJ2FkdmFuY2VkLWNvbnNvbGUnLFxuICBlbnRpdHlQcmVmaXg6ICd0Yl8nLFxuICBtaWdyYXRpb25zOiBbXG4gICAgam9pbihfX2Rpcm5hbWUsIHByb2Nlc3MuZW52LkRCX01JR1JBVElPTlMgfHwgJy4uL21pZ3JhdGlvbnMvKnsudHMsLmpzfScpLFxuICBdLFxuICBjbGk6IHtcbiAgICBtaWdyYXRpb25zRGlyOiBwcm9jZXNzLmVudi5EQl9FTlRJVElFU19ESVIgfHwgJy4vc3JjL21pZ3JhdGlvbnMnLFxuICB9LFxuICBzZWVkczogW2pvaW4oX19kaXJuYW1lLCBwcm9jZXNzLmVudi5EQl9TRUVEUyB8fCAnLi4vc2VlZHMvKi5zZWVkLnsudHMsLmpzfScpXSxcbn0gYXMgVHlwZU9ybU1vZHVsZU9wdGlvbnM7XG4iLCJpbXBvcnQgeyBDb2x1bW4sIENvbHVtbk9wdGlvbnMgfSBmcm9tICd0eXBlb3JtJztcbmltcG9ydCB7IFR5cGVPcm1Db2x1bW5QYXJzZXIgfSBmcm9tICcuLi9jb21tb24vcGFyc2Vycy90eXBlb3JtLWNvbHVtbi5wYXJzZXInO1xuXG4vKipcbiAqIFR5cGVvcm0gd3JhcHBlciB0byBlbmNyeXB0IGNvbHVtbiBkYXRhIGluIGRhdGFiYXNlIGFuZCBkZWNyeXB0IGluIGFwcGxpY2F0aW9uLlxuICogSWYgZGF0YSBleGlzdHMgaW4gZGF0YWJhc2UsIGRvbid0IGZvcmdldCB0byBtaWdyYXRlIGNvbHVtbiB2YWx1ZXMgdG8gZW5jcnlwdGVkIHZhbHVlcywgb3RoZXJ3aXNlIGEgSW52YWxpZCBJViBsZW5ndGggd2lsbCBiZSB0aHJvd24uXG4gKiBAcGFyYW0gb3B0aW9ucyAtIFR5cGVvcm0gQ29sdW1uIG9wdGlvbnMgLSBodHRwczovL2dpdGh1Yi5jb20vdHlwZW9ybS90eXBlb3JtL2Jsb2IvbWFzdGVyL2RvY3MvZW50aXRpZXMubWQjY29sdW1uLW9wdGlvbnNcbiAqIEByZXR1cm5zXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBFbmNyeXB0ZWRDb2x1bW4ob3B0aW9ucz86IENvbHVtbk9wdGlvbnMpOiBQcm9wZXJ0eURlY29yYXRvciB7XG4gIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBwcm9wZXJ0eUtleTogc3RyaW5nKTogdm9pZCB7XG4gICAgQ29sdW1uKHtcbiAgICAgIC4uLm9wdGlvbnMsXG4gICAgICBuYW1lOiBUeXBlT3JtQ29sdW1uUGFyc2VyLnRvTmFtZShwcm9wZXJ0eUtleSwgb3B0aW9ucyksXG4gICAgICB0cmFuc2Zvcm1lcjogVHlwZU9ybUNvbHVtblBhcnNlci50b0VuY3J5cHRlZFRyYW5zZm9ybWVyKCksXG4gICAgfSkodGFyZ2V0LCBwcm9wZXJ0eUtleSk7XG4gIH07XG59XG4iLCJpbXBvcnQgeyBVbmF1dGhvcml6ZWRSZXNwb25zZSB9IGZyb20gJ0BhcHAvc3dhZ2dlci1kZWNvcmF0b3JzJztcbmltcG9ydCB7IGFwcGx5RGVjb3JhdG9ycywgU2V0TWV0YWRhdGEsIFVzZUd1YXJkcyB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcbmltcG9ydCB7IEFwaUJlYXJlckF1dGggfSBmcm9tICdAbmVzdGpzL3N3YWdnZXInO1xuaW1wb3J0IHsgSnd0QXV0aEd1YXJkIH0gZnJvbSAnLi4vZ3VhcmRzL2p3dC1hdXRoLmd1YXJkJztcblxuY29uc3QgSVNfSldUX0FVVEhfR1VBUkQgPSAnand0QXV0aEd1YXJkJztcbmV4cG9ydCBmdW5jdGlvbiBKd3RHdWFyZFNldHVwKCkge1xuICByZXR1cm4gYXBwbHlEZWNvcmF0b3JzKFxuICAgIFNldE1ldGFkYXRhKElTX0pXVF9BVVRIX0dVQVJELCBudWxsKSxcbiAgICBBcGlCZWFyZXJBdXRoKCksXG4gICAgVW5hdXRob3JpemVkUmVzcG9uc2UoKSxcbiAgICBVc2VHdWFyZHMoSnd0QXV0aEd1YXJkKSxcbiAgKTtcbn1cbiIsImltcG9ydCB7IENvbHVtbiwgQ29sdW1uT3B0aW9ucyB9IGZyb20gJ3R5cGVvcm0nO1xuaW1wb3J0IHsgVHlwZU9ybUNvbHVtblBhcnNlciB9IGZyb20gJy4uL2NvbW1vbi9wYXJzZXJzL3R5cGVvcm0tY29sdW1uLnBhcnNlcic7XG5cbi8qKlxuICogVHlwZW9ybSB3cmFwcGVyIHRyYW5zZm9ybXMgcHJvcGVydHkgbmFtZSBmcm9tICdjYW1lbENhc2UnIGluIHRoZSBhcHAgYW5kIHRvICdzbmFrZV9jYXNlJyBpbiB0aGUgZGF0YWJhc2UgLSBhbmQgc2FuaXRpemVzIHRoZSB2YWx1ZSwgYnkgZGVmYXVsdCwgcmVtb3Zpbmcgd2hpdGUgc3BhY2UuXG4gKiBAcGFyYW0gb3B0aW9ucyAtIFR5cGVvcm0gQ29sdW1uIG9wdGlvbnMgLSBodHRwczovL2dpdGh1Yi5jb20vdHlwZW9ybS90eXBlb3JtL2Jsb2IvbWFzdGVyL2RvY3MvZW50aXRpZXMubWQjY29sdW1uLW9wdGlvbnNcbiAqIEByZXR1cm5zXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBOb3JtYWxpemVkQ29sdW1uKG9wdGlvbnM/OiBDb2x1bW5PcHRpb25zKTogUHJvcGVydHlEZWNvcmF0b3Ige1xuICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCwgcHJvcGVydHlLZXk6IHN0cmluZyk6IHZvaWQge1xuICAgIENvbHVtbih7XG4gICAgICAuLi5vcHRpb25zLFxuICAgICAgdHJhbnNmb3JtZXI6IFR5cGVPcm1Db2x1bW5QYXJzZXIudG9UcmFuc2Zvcm1lcihwcm9wZXJ0eUtleSksXG4gICAgICBuYW1lOiBUeXBlT3JtQ29sdW1uUGFyc2VyLnRvTmFtZShwcm9wZXJ0eUtleSwgb3B0aW9ucyksXG4gICAgfSkodGFyZ2V0LCBwcm9wZXJ0eUtleSk7XG4gIH07XG59XG4iLCJpbXBvcnQgeyBTZXRNZXRhZGF0YSB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcblxuZXhwb3J0IGNvbnN0IElTX1BVQkxJQ19LRVkgPSAnaXNQdWJsaWMnO1xuZXhwb3J0IGNvbnN0IFB1YmxpYyA9ICgpID0+IFNldE1ldGFkYXRhKElTX1BVQkxJQ19LRVksIHRydWUpO1xuIiwiaW1wb3J0IHtcbiAgRXhlY3V0aW9uQ29udGV4dCxcbiAgSW5qZWN0YWJsZSxcbiAgVW5hdXRob3JpemVkRXhjZXB0aW9uLFxufSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5pbXBvcnQgeyBSZWZsZWN0b3IgfSBmcm9tICdAbmVzdGpzL2NvcmUnO1xuaW1wb3J0IHsgQXV0aEd1YXJkIH0gZnJvbSAnQG5lc3Rqcy9wYXNzcG9ydCc7XG5pbXBvcnQgeyBJU19QVUJMSUNfS0VZIH0gZnJvbSAnLi4vZGVjb3JhdG9ycy9wdWJsaWMtcm91dGUuZGVjb3JhdG9yJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEp3dEF1dGhHdWFyZCBleHRlbmRzIEF1dGhHdWFyZCgnand0Jykge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IF9yZWZsZWN0b3I6IFJlZmxlY3Rvcikge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICBjYW5BY3RpdmF0ZShjb250ZXh0OiBFeGVjdXRpb25Db250ZXh0KSB7XG4gICAgY29uc3QgaXNQdWJsaWMgPSB0aGlzLl9yZWZsZWN0b3IuZ2V0QWxsQW5kT3ZlcnJpZGU8Ym9vbGVhbj4oSVNfUFVCTElDX0tFWSwgW1xuICAgICAgY29udGV4dC5nZXRIYW5kbGVyKCksXG4gICAgICBjb250ZXh0LmdldENsYXNzKCksXG4gICAgXSk7XG5cbiAgICBpZiAoaXNQdWJsaWMpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBzdXBlci5jYW5BY3RpdmF0ZShjb250ZXh0KTtcbiAgfVxuXG4gIGhhbmRsZVJlcXVlc3QoZXJyLCB1c2VyKSB7XG4gICAgaWYgKGVyciB8fCAhdXNlcikge1xuICAgICAgdGhyb3cgZXJyIHx8IG5ldyBVbmF1dGhvcml6ZWRFeGNlcHRpb24oKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdXNlcjtcbiAgfVxufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSwgTG9nZ2VyLCBOZXN0TWlkZGxld2FyZSB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcbmltcG9ydCB7IE5leHRGdW5jdGlvbiwgUmVxdWVzdCwgUmVzcG9uc2UgfSBmcm9tICdleHByZXNzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIExvZ2dlck1pZGRsZXdhcmUgaW1wbGVtZW50cyBOZXN0TWlkZGxld2FyZSB7XG4gICNsb2dnZXIgPSBuZXcgTG9nZ2VyKCdIVFRQJyk7XG4gIHVzZShyZXF1ZXN0OiBSZXF1ZXN0LCByZXNwb25zZTogUmVzcG9uc2UsIG5leHQ6IE5leHRGdW5jdGlvbik6IHZvaWQge1xuICAgIGlmIChwcm9jZXNzLmVudi5ESVNBQkxFX0xPR0dFUikge1xuICAgICAgbmV4dCgpO1xuICAgIH1cblxuICAgIGNvbnN0IHsgbWV0aG9kLCBvcmlnaW5hbFVybCB9ID0gcmVxdWVzdDtcblxuICAgIGNvbnN0IHN0YXJ0aW5nUmVxdWVzdCA9IERhdGUubm93KCk7XG4gICAgcmVzcG9uc2Uub24oJ2ZpbmlzaCcsICgpID0+IHtcbiAgICAgIHRoaXMuI2xvZ2dlci52ZXJib3NlKGAke21ldGhvZH06ICR7b3JpZ2luYWxVcmx9YCk7XG4gICAgICB0aGlzLiNsb2dnZXIudmVyYm9zZShcbiAgICAgICAgYFRlbXBvIGRlIHJlc3Bvc3RhOiAke0RhdGUubm93KCkgLSBzdGFydGluZ1JlcXVlc3R9bXNgLFxuICAgICAgKTtcbiAgICB9KTtcblxuICAgIG5leHQoKTtcbiAgfVxufVxuIiwiaW1wb3J0IHtcbiAgQXBpQ29udHJvbGxlcixcbiAgQmFkUmVxdWVzdFJlc3BvbnNlLFxuICBPa1Jlc3BvbnNlLFxuICBVbmF1dGhvcml6ZWRSZXNwb25zZSxcbn0gZnJvbSAnQGFwcC9zd2FnZ2VyLWRlY29yYXRvcnMnO1xuaW1wb3J0IHtcbiAgQm9keSxcbiAgR2V0LFxuICBIdHRwQ29kZSxcbiAgSHR0cFN0YXR1cyxcbiAgUG9zdCxcbiAgUmVxLFxuICBVc2VHdWFyZHMsXG59IGZyb20gJ0BuZXN0anMvY29tbW9uJztcbmltcG9ydCB7IEFwaUJlYXJlckF1dGggfSBmcm9tICdAbmVzdGpzL3N3YWdnZXInO1xuaW1wb3J0IHsgUmVxdWVzdCB9IGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0IHsgSnd0QXV0aEd1YXJkIH0gZnJvbSAnLi4vLi4vZ3VhcmRzL2p3dC1hdXRoLmd1YXJkJztcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi9hdXRoLnNlcnZpY2UnO1xuaW1wb3J0IHsgQXV0aGVkRHRvIH0gZnJvbSAnLi9kdG8vYXV0aGVkLmR0byc7XG5pbXBvcnQgeyBMb2dpbkF1dGhEdG8gfSBmcm9tICcuL2R0by9sb2dpbi1hdXRoLmR0byc7XG5pbXBvcnQgeyBBdXRoUGFyc2VyIH0gZnJvbSAnLi9wYXJzZXJzL2F1dGgucGFyc2VyJztcblxuQEFwaUNvbnRyb2xsZXIoJ2F1dGgnKVxuZXhwb3J0IGNsYXNzIEF1dGhDb250cm9sbGVyIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBfYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlKSB7fVxuXG4gIEBQb3N0KCdzaWduLWluJylcbiAgQEh0dHBDb2RlKEh0dHBTdGF0dXMuT0spXG4gIEBPa1Jlc3BvbnNlKHtcbiAgICBkZXNjcmlwdGlvbjogJ0F1dGVudGljYcOnw6NvJyxcbiAgICB0eXBlOiBBdXRoZWREdG8sXG4gIH0pXG4gIEBVbmF1dGhvcml6ZWRSZXNwb25zZSgpXG4gIEBCYWRSZXF1ZXN0UmVzcG9uc2UoKVxuICBhc3luYyBjcmVhdGUoQEJvZHkoKSBkdG86IExvZ2luQXV0aER0byk6IFByb21pc2U8QXV0aGVkRHRvPiB7XG4gICAgY29uc3QgbG9nZ2VkVXNlciA9IGF3YWl0IHRoaXMuX2F1dGhTZXJ2aWNlLmxvZ2luVXNlcihcbiAgICAgIGR0by5lbWFpbCxcbiAgICAgIGR0by5wYXNzd29yZCxcbiAgICApO1xuXG4gICAgcmV0dXJuIEF1dGhQYXJzZXIudG9BdXRoZWREdG8obG9nZ2VkVXNlci51c2VyLCBsb2dnZWRVc2VyLnRva2VuKTtcbiAgfVxuXG4gIEBHZXQoJ3Byb2ZpbGUnKVxuICBAT2tSZXNwb25zZSh7XG4gICAgZGVzY3JpcHRpb246ICdWZXJpZmljYcOnw6NvIGRlIHRva2VuJyxcbiAgfSlcbiAgQEFwaUJlYXJlckF1dGgoKVxuICBAVW5hdXRob3JpemVkUmVzcG9uc2UoKVxuICBAVXNlR3VhcmRzKEp3dEF1dGhHdWFyZClcbiAgZ2V0UHJvZmlsZShAUmVxKCkgcmVxOiBSZXF1ZXN0KSB7XG4gICAgcmV0dXJuIHJlcS51c2VyID8/IG51bGw7XG4gIH1cbn1cbiIsImltcG9ydCB7IE1vZHVsZSB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcbmltcG9ydCB7IENvbmZpZ1NlcnZpY2UgfSBmcm9tICdAbmVzdGpzL2NvbmZpZyc7XG5pbXBvcnQgeyBKd3RNb2R1bGUgfSBmcm9tICdAbmVzdGpzL2p3dCc7XG5pbXBvcnQgeyBQYXNzcG9ydE1vZHVsZSB9IGZyb20gJ0BuZXN0anMvcGFzc3BvcnQnO1xuaW1wb3J0IHsgVXNlck1vZHVsZSB9IGZyb20gJy4uL3VzZXIvdXNlci5tb2R1bGUnO1xuaW1wb3J0IHsgQXV0aENvbnRyb2xsZXIgfSBmcm9tICcuL2F1dGguY29udHJvbGxlcic7XG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4vYXV0aC5zZXJ2aWNlJztcbmltcG9ydCB7IEp3dFN0cmF0ZWd5IH0gZnJvbSAnLi9zdHJhdGVnaWVzL2p3dC5zdHJhdGVneSc7XG5cbkBNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgVXNlck1vZHVsZSxcbiAgICBQYXNzcG9ydE1vZHVsZSxcbiAgICBKd3RNb2R1bGUucmVnaXN0ZXJBc3luYyh7XG4gICAgICBpbmplY3Q6IFtDb25maWdTZXJ2aWNlXSxcbiAgICAgIHVzZUZhY3Rvcnk6IGFzeW5jIChjb25maWdTZXJ2aWNlOiBDb25maWdTZXJ2aWNlKSA9PlxuICAgICAgICBjb25maWdTZXJ2aWNlLmdldCgnand0JyksXG4gICAgfSksXG4gIF0sXG4gIGNvbnRyb2xsZXJzOiBbQXV0aENvbnRyb2xsZXJdLFxuICBwcm92aWRlcnM6IFtBdXRoU2VydmljZSwgSnd0U3RyYXRlZ3ldLFxuICBleHBvcnRzOiBbQXV0aFNlcnZpY2UsIEp3dE1vZHVsZV0sXG59KVxuZXhwb3J0IGNsYXNzIEF1dGhNb2R1bGUge31cbiIsImltcG9ydCB7IEluamVjdGFibGUsIFVuYXV0aG9yaXplZEV4Y2VwdGlvbiB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcbmltcG9ydCB7IEp3dFNlcnZpY2UgfSBmcm9tICdAbmVzdGpzL2p3dCc7XG5pbXBvcnQgeyBjb21wYXJlIH0gZnJvbSAnYmNyeXB0JztcbmltcG9ydCB7IEp3dFBheWxvYWRCdWlsZGVyIH0gZnJvbSAnLi4vLi4vY29tbW9uL2J1aWxkZXJzL2p3dC1wYXlsb2FkLmJ1aWxkZXInO1xuaW1wb3J0IHsgSVRva2VuVXNlciB9IGZyb20gJy4uLy4uL2NvbW1vbi9pbnRlcmZhY2VzL3Rva2VuLXVzZXIuaW50ZXJmYWNlJztcbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuLi91c2VyL2VudGl0aWVzL3VzZXIuZW50aXR5JztcbmltcG9ydCB7IFVzZXJTZXJ2aWNlIH0gZnJvbSAnLi4vdXNlci91c2VyLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQXV0aFNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHJlYWRvbmx5IF91c2VyU2VydmljZTogVXNlclNlcnZpY2UsXG4gICAgcHJpdmF0ZSByZWFkb25seSBfand0U2VydmljZTogSnd0U2VydmljZSxcbiAgKSB7fVxuXG4gIGFzeW5jIGxvZ2luVXNlcihlbWFpbDogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nKTogUHJvbWlzZTxJVG9rZW5Vc2VyPiB7XG4gICAgY29uc3QgdXNlciA9IGF3YWl0IHRoaXMuX3VzZXJTZXJ2aWNlLmZpbmRPbmVCeUVtYWlsKGVtYWlsKTtcblxuICAgIGlmICghdXNlcikge1xuICAgICAgdGhyb3cgbmV3IFVuYXV0aG9yaXplZEV4Y2VwdGlvbigpO1xuICAgIH1cblxuICAgIGF3YWl0IHRoaXMuI3ZhbGlkYXRlVXNlclBhc3N3b3JkKHBhc3N3b3JkLCB1c2VyLnBhc3N3b3JkKTtcblxuICAgIGNvbnN0IHRva2VuID0gdGhpcy4jZ2VuZXJhdGVUb2tlbih1c2VyKTtcblxuICAgIHJldHVybiB7XG4gICAgICB1c2VyLFxuICAgICAgdG9rZW4sXG4gICAgfTtcbiAgfVxuICBhc3luYyAjdmFsaWRhdGVVc2VyUGFzc3dvcmQocGxhaW5QYXNzOiBzdHJpbmcsIGhhc2hlZFBhc3M6IHN0cmluZykge1xuICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBjb21wYXJlKHBsYWluUGFzcywgaGFzaGVkUGFzcyk7XG5cbiAgICBpZiAoIXVzZXIpIHtcbiAgICAgIHRocm93IG5ldyBVbmF1dGhvcml6ZWRFeGNlcHRpb24oKTtcbiAgICB9XG4gIH1cbiAgI2dlbmVyYXRlVG9rZW4odXNlcjogVXNlcikge1xuICAgIGNvbnN0IHBheWxvYWQgPSBKd3RQYXlsb2FkQnVpbGRlci50b1VzZXJMb2dpbih1c2VyKTtcblxuICAgIHJldHVybiB0aGlzLl9qd3RTZXJ2aWNlLnNpZ24ocGF5bG9hZCk7XG4gIH1cbn1cbiIsImltcG9ydCB7IEFwaVByb3BlcnR5IH0gZnJvbSAnQG5lc3Rqcy9zd2FnZ2VyJztcbmltcG9ydCB7IFVzZXJEdG8gfSBmcm9tICdzcmMvbW9kdWxlcy91c2VyL2R0by91c2VyLmR0byc7XG5cbmV4cG9ydCBjbGFzcyBBdXRoZWREdG8ge1xuICBAQXBpUHJvcGVydHkoKVxuICB1c2VyOiBVc2VyRHRvO1xuXG4gIEBBcGlQcm9wZXJ0eSgpXG4gIHRva2VuOiBzdHJpbmc7XG59XG4iLCJpbXBvcnQgeyBBcGlQcm9wZXJ0eSB9IGZyb20gJ0BuZXN0anMvc3dhZ2dlcic7XG5pbXBvcnQgeyBUcmFuc2Zvcm0gfSBmcm9tICdjbGFzcy10cmFuc2Zvcm1lcic7XG5pbXBvcnQgeyBJc0VtYWlsLCBJc05vdEVtcHR5LCBNaW5MZW5ndGggfSBmcm9tICdjbGFzcy12YWxpZGF0b3InO1xuaW1wb3J0IHsgTG93ZXJDYXNlVHJhbnNmb3JtIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3RyYW5zZm9ybWVycy9sb3dlci1jYXNlLnRyYW5zZm9ybSc7XG5cbmV4cG9ydCBjbGFzcyBMb2dpbkF1dGhEdG8ge1xuICBASXNFbWFpbCh7fSwgeyBtZXNzYWdlOiAnRS1tYWlsIGRpZ2l0YWRvIMOpIGludsOhbGlkbycgfSlcbiAgQE1pbkxlbmd0aCgyLCB7IG1lc3NhZ2U6ICdPIG5vbWUgZGV2ZSBwb3NzdWlyIG5vIG3DrW5pbW8gMiBjYXJhY3RlcmVzLicgfSlcbiAgQEFwaVByb3BlcnR5KClcbiAgQFRyYW5zZm9ybShMb3dlckNhc2VUcmFuc2Zvcm0pXG4gIGVtYWlsOiBzdHJpbmc7XG5cbiAgQElzTm90RW1wdHkoeyBtZXNzYWdlOiAnQSBzZW5oYSDDqSBvYnJpZ2F0w7NyaWEuJyB9KVxuICBATWluTGVuZ3RoKDIsIHsgbWVzc2FnZTogJ0Egc2VuaGEgZGV2ZSBwb3NzdWlyIG5vIG3DrW5pbW8gMiBjYXJhY3RlcmVzLicgfSlcbiAgQEFwaVByb3BlcnR5KClcbiAgcGFzc3dvcmQ6IHN0cmluZztcbn1cbiIsImltcG9ydCB7IEFwaVByb3BlcnR5IH0gZnJvbSAnQG5lc3Rqcy9zd2FnZ2VyJztcbmltcG9ydCB7IFRyYW5zZm9ybSB9IGZyb20gJ2NsYXNzLXRyYW5zZm9ybWVyJztcbmltcG9ydCB7IElzRW1haWwsIE1pbkxlbmd0aCB9IGZyb20gJ2NsYXNzLXZhbGlkYXRvcic7XG5pbXBvcnQgeyBMb3dlckNhc2VUcmFuc2Zvcm0gfSBmcm9tICcuLi8uLi8uLi9jb21tb24vdHJhbnNmb3JtZXJzL2xvd2VyLWNhc2UudHJhbnNmb3JtJztcblxuZXhwb3J0IGNsYXNzIFJlY292ZXJ5UGFzc3dvcmREdG8ge1xuICBAQXBpUHJvcGVydHkoeyBleGFtcGxlOiAnbWFpbEBtYWlsLmNvbScgfSlcbiAgQElzRW1haWwoe30sIHsgbWVzc2FnZTogJ0UtbWFpbCBkaWdpdGFkbyDDqSBpbnbDoWxpZG8nIH0pXG4gIEBNaW5MZW5ndGgoMiwgeyBtZXNzYWdlOiAnTyBub21lIGRldmUgcG9zc3VpciBubyBtw61uaW1vIDIgY2FyYWN0ZXJlcy4nIH0pXG4gIEBBcGlQcm9wZXJ0eSgpXG4gIEBUcmFuc2Zvcm0oTG93ZXJDYXNlVHJhbnNmb3JtKVxuICBlbWFpbDogc3RyaW5nO1xufVxuIiwiaW1wb3J0IHsgVXNlciB9IGZyb20gJy4uLy4uL3VzZXIvZW50aXRpZXMvdXNlci5lbnRpdHknO1xuaW1wb3J0IHsgVXNlclBhcnNlciB9IGZyb20gJy4uLy4uL3VzZXIvcGFyc2Vycy91c2VyLnBhcnNlcic7XG5pbXBvcnQgeyBBdXRoZWREdG8gfSBmcm9tICcuLi9kdG8vYXV0aGVkLmR0byc7XG5cbmV4cG9ydCBjbGFzcyBBdXRoUGFyc2VyIHtcbiAgc3RhdGljIHRvQXV0aGVkRHRvKHVzZXI6IFVzZXIsIHRva2VuOiBzdHJpbmcpOiBBdXRoZWREdG8ge1xuICAgIHJldHVybiB7XG4gICAgICB1c2VyOiBVc2VyUGFyc2VyLnRvVXNlckR0byh1c2VyKSxcbiAgICAgIHRva2VuLFxuICAgIH07XG4gIH1cbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5pbXBvcnQgeyBQYXNzcG9ydFN0cmF0ZWd5IH0gZnJvbSAnQG5lc3Rqcy9wYXNzcG9ydCc7XG5pbXBvcnQgeyBFeHRyYWN0Snd0LCBTdHJhdGVneSB9IGZyb20gJ3Bhc3Nwb3J0LWp3dCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBKd3RTdHJhdGVneSBleHRlbmRzIFBhc3Nwb3J0U3RyYXRlZ3koU3RyYXRlZ3kpIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoe1xuICAgICAgand0RnJvbVJlcXVlc3Q6IEV4dHJhY3RKd3QuZnJvbUF1dGhIZWFkZXJBc0JlYXJlclRva2VuKCksXG4gICAgICBpZ25vcmVFeHBpcmF0aW9uOiBmYWxzZSxcbiAgICAgIHNlY3JldE9yS2V5OiBwcm9jZXNzLmVudi5KV1RfU0VDUkVUIHx8ICdmYWtlX3NlY3JldF9iZjBmM2NmMzZlJyxcbiAgICB9KTtcbiAgfVxuXG4gIGFzeW5jIHZhbGlkYXRlKHBheWxvYWQ6IEV4cHJlc3MuVXNlcikge1xuICAgIHJldHVybiBwYXlsb2FkO1xuICB9XG59XG4iLCJpbXBvcnQgeyBnZW5TYWx0U3luYywgaGFzaCwgaGFzaFN5bmMgfSBmcm9tICdiY3J5cHQnO1xuXG5leHBvcnQgY2xhc3MgQmNyeXB0U2VydmljZSB7XG4gIHByaXZhdGUgc3RhdGljIFNBTFRfUk9VTkRTID0gMTA7XG5cbiAgLyoqXG4gICAqIEBwYXJhbSBkYXRhIFRoZSBkYXRhIHRvIGJlIGVuY3J5cHRlZC5cbiAgICogQHBhcmFtIGN1c3RvbVNhbHRPclJvdW5kcyBUaGUgc2FsdCB0byBiZSB1c2VkIGluIGVuY3J5cHRpb24uIElmIHNwZWNpZmllZCBhcyBhIG51bWJlciB0aGVuIGFcbiAgICogc2FsdCB3aWxsIGJlIGdlbmVyYXRlZCB3aXRoIHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIHJvdW5kcyBhbmQgdXNlZCAtIGBkZWZhdWx0IGlzIDEwYC5cbiAgICogQHJldHVybiBBIHByb21pc2UgdG8gYmUgZWl0aGVyIHJlc29sdmVkIHdpdGggdGhlIGVuY3J5cHRlZCBkYXRhIHNhbHQgb3IgcmVqZWN0ZWQgd2l0aCBhbiBFcnJvclxuICAgKi9cbiAgc3RhdGljIGhhc2goZGF0YTogc3RyaW5nLCBjdXN0b21TYWx0T3JSb3VuZHM/OiBudW1iZXIpIHtcbiAgICByZXR1cm4gaGFzaChkYXRhLCBCY3J5cHRTZXJ2aWNlLiNnZW5TYWx0cyhjdXN0b21TYWx0T3JSb3VuZHMpKTtcbiAgfVxuICAvKipcbiAgICpcbiAgICogQHBhcmFtIGRhdGEgVGhlIGRhdGEgdG8gYmUgZW5jcnlwdGVkLlxuICAgKiBAcGFyYW0gc2FsdE9yUm91bmRzIFRoZSBzYWx0IHRvIGJlIHVzZWQgdG8gaGFzaCB0aGUgcGFzc3dvcmQuIElmIHNwZWNpZmllZCBhcyBhIG51bWJlciB0aGVuIGFcbiAgICogc2FsdCB3aWxsIGJlIGdlbmVyYXRlZCB3aXRoIHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIHJvdW5kcyBhbmQgdXNlZCAgLSBgZGVmYXVsdCBpcyAxMGAuXG4gICAqL1xuICBzdGF0aWMgaGFzaFN5bmMoZGF0YTogc3RyaW5nLCBjdXN0b21TYWx0T3JSb3VuZHM/OiBudW1iZXIpIHtcbiAgICByZXR1cm4gaGFzaFN5bmMoZGF0YSwgQmNyeXB0U2VydmljZS4jZ2VuU2FsdHMoY3VzdG9tU2FsdE9yUm91bmRzKSk7XG4gIH1cbiAgc3RhdGljICNnZW5TYWx0cyhjdXN0b21TYWx0T3JSb3VuZHM/OiBudW1iZXIpIHtcbiAgICByZXR1cm4gZ2VuU2FsdFN5bmMoY3VzdG9tU2FsdE9yUm91bmRzID8/IEJjcnlwdFNlcnZpY2UuU0FMVF9ST1VORFMpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBBcGlQcm9wZXJ0eSB9IGZyb20gJ0BuZXN0anMvc3dhZ2dlcic7XG5pbXBvcnQgeyBJc0pXVCwgSXNTdHJpbmcsIE1pbkxlbmd0aCB9IGZyb20gJ2NsYXNzLXZhbGlkYXRvcic7XG5pbXBvcnQgKiBhcyBGYWtlciBmcm9tICdmYWtlci1icic7XG5cbmV4cG9ydCBjbGFzcyBSZWNvdmVyeVBhc3N3b3JkQ29uZmlybUR0byB7XG4gIEBBcGlQcm9wZXJ0eSh7XG4gICAgZXhhbXBsZTpcbiAgICAgICdleUpoYkdjaU9pSklVekkxTmlJc0luUjVjQ0k2SWtwWFZDSjkuZXlKemRXSWlPaUl4TWpNME5UWTNPRGt3SWl3aWJtRnRaU0k2SWtwdmFHNGdSRzlsSWl3aWFXRjBJam94TlRFMk1qTTVNREl5ZlEuU2ZsS3h3UkpTTWVLS0YyUVQ0ZndwTWVKZjM2UE9rNnlKVl9hZFFzc3c1YycsXG4gIH0pXG4gIEBJc0pXVCh7IG1lc3NhZ2U6ICdKc29uIFdlYiBUb2tlbiDDqSBpbnbDoWxpZG8uJyB9KVxuICByZWNvdmVyeVRva2VuOiBzdHJpbmc7XG5cbiAgQEFwaVByb3BlcnR5KHsgZXhhbXBsZTogRmFrZXIuaW50ZXJuZXQucGFzc3dvcmQoKSB9KVxuICBASXNTdHJpbmcoeyBtZXNzYWdlOiAnQSBzZW5oYSDDqSBvYnJpZ2F0w7NyaWEuJyB9KVxuICBATWluTGVuZ3RoKDUsIHsgbWVzc2FnZTogJ0Egc2VuaGEuIERldmUgcG9zc3VpciBubyBtw61uaW1vIDUgY2FyYWN0ZXJlcy4nIH0pXG4gIG5ld1Bhc3N3b3JkOiBzdHJpbmc7XG59XG4iLCJpbXBvcnQgeyBBcGlQcm9wZXJ0eSB9IGZyb20gJ0BuZXN0anMvc3dhZ2dlcic7XG5pbXBvcnQgeyBJc1N0cmluZywgTWluTGVuZ3RoIH0gZnJvbSAnY2xhc3MtdmFsaWRhdG9yJztcbmltcG9ydCAqIGFzIEZha2VyIGZyb20gJ2Zha2VyLWJyJztcblxuZXhwb3J0IGNsYXNzIFJlc2V0UGFzc3dvcmREdG8ge1xuICBAQXBpUHJvcGVydHkoeyBleGFtcGxlOiBGYWtlci5pbnRlcm5ldC5wYXNzd29yZCgpIH0pXG4gIEBJc1N0cmluZyh7IG1lc3NhZ2U6ICdBIHNlbmhhIGF0dWFsIMOpIG9icmlnYXTDs3JpYS4nIH0pXG4gIEBNaW5MZW5ndGgoNSwgeyBtZXNzYWdlOiAnQSBzZW5oYS4gRGV2ZSBwb3NzdWlyIG5vIG3DrW5pbW8gNSBjYXJhY3RlcmVzLicgfSlcbiAgY3VycmVudFBhc3N3b3JkOiBzdHJpbmc7XG5cbiAgQEFwaVByb3BlcnR5KHsgZXhhbXBsZTogRmFrZXIuaW50ZXJuZXQucGFzc3dvcmQoKSB9KVxuICBASXNTdHJpbmcoeyBtZXNzYWdlOiAnQSBub3ZhIHNlbmhhIMOpIG9icmlnYXTDs3JpYS4nIH0pXG4gIEBNaW5MZW5ndGgoNSwgeyBtZXNzYWdlOiAnQSBzZW5oYS4gRGV2ZSBwb3NzdWlyIG5vIG3DrW5pbW8gNSBjYXJhY3RlcmVzLicgfSlcbiAgbmV3UGFzc3dvcmQ6IHN0cmluZztcbn1cbiIsImltcG9ydCB7XG4gIEJvZHksXG4gIEh0dHBDb2RlLFxuICBIdHRwU3RhdHVzLFxuICBQb3N0LFxuICBQdXQsXG4gIFJlcSxcbiAgVXNlR3VhcmRzLFxufSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5pbXBvcnQgeyBBcGlCZWFyZXJBdXRoIH0gZnJvbSAnQG5lc3Rqcy9zd2FnZ2VyJztcbmltcG9ydCB7IFJlcXVlc3QgfSBmcm9tICdleHByZXNzJztcbmltcG9ydCB7XG4gIEFwaUNvbnRyb2xsZXIsXG4gIE5vQ29udGVudFJlc3BvbnNlLFxuICBVbmF1dGhvcml6ZWRSZXNwb25zZSxcbiAgVW5wcm9jZXNzYWJsZUVudGl0eVJlc3BvbnNlLFxufSBmcm9tICcuLi8uLi8uLi9saWJzL3N3YWdnZXItZGVjb3JhdG9ycy9zcmMnO1xuaW1wb3J0IHsgSnd0QXV0aEd1YXJkIH0gZnJvbSAnLi4vLi4vZ3VhcmRzL2p3dC1hdXRoLmd1YXJkJztcbmltcG9ydCB7IFJlY292ZXJ5UGFzc3dvcmREdG8gfSBmcm9tICcuLi9hdXRoL2R0by9yZWNvdmVyeS1wYXNzd29yZC5kdG8nO1xuaW1wb3J0IHsgUmVjb3ZlcnlQYXNzd29yZENvbmZpcm1EdG8gfSBmcm9tICcuL2R0b3MvcmVjb3ZlcnktcGFzc3dvcmQtY29uZmlybS5kdG8nO1xuaW1wb3J0IHsgUmVzZXRQYXNzd29yZER0byB9IGZyb20gJy4vZHRvcy9yZXNldC1wYXNzd29yZC5kdG8nO1xuaW1wb3J0IHsgUGFzc3dvcmRTZXJ2aWNlIH0gZnJvbSAnLi9wYXNzd29yZC5zZXJ2aWNlJztcblxuQEFwaUNvbnRyb2xsZXIoJ3Bhc3N3b3JkJylcbmV4cG9ydCBjbGFzcyBQYXNzd29yZENvbnRyb2xsZXIge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IF9wYXNzd29yZFNlcnZpY2U6IFBhc3N3b3JkU2VydmljZSkge31cblxuICBAUG9zdCgncmVjb3ZlcnknKVxuICBASHR0cENvZGUoSHR0cFN0YXR1cy5OT19DT05URU5UKVxuICBATm9Db250ZW50UmVzcG9uc2UoeyBkZXNjcmlwdGlvbjogJ1NvbGljaXRhw6fDo28gZGUgcmVjdXBlcmHDp8OjbyBkZSBzZW5oYScgfSlcbiAgcmVjb3ZlcnlQYXNzd29yZChAQm9keSgpIGR0bzogUmVjb3ZlcnlQYXNzd29yZER0bykge1xuICAgIHJldHVybiB0aGlzLl9wYXNzd29yZFNlcnZpY2UucmVjb3ZlcnlQYXNzd29yZChkdG8pO1xuICB9XG5cbiAgQFBvc3QoJ3JlY292ZXJ5LWNvbmZpcm0nKVxuICBASHR0cENvZGUoSHR0cFN0YXR1cy5OT19DT05URU5UKVxuICBATm9Db250ZW50UmVzcG9uc2UoeyBkZXNjcmlwdGlvbjogJ0NvbmZpcm1hw6fDo28gZGUgcmVjdXBlcmHDp8OjbyBkZSBzZW5oYScgfSlcbiAgQFVucHJvY2Vzc2FibGVFbnRpdHlSZXNwb25zZSgpXG4gIHJlY292ZXJ5UGFzc3dvcmRDb25maXJtKEBCb2R5KCkgZHRvOiBSZWNvdmVyeVBhc3N3b3JkQ29uZmlybUR0bykge1xuICAgIHJldHVybiB0aGlzLl9wYXNzd29yZFNlcnZpY2UucmVjb3ZlcnlQYXNzd29yZENvbmZpcm0oZHRvKTtcbiAgfVxuXG4gIEBQdXQoJ3Jlc2V0JylcbiAgQEh0dHBDb2RlKEh0dHBTdGF0dXMuTk9fQ09OVEVOVClcbiAgQEFwaUJlYXJlckF1dGgoKVxuICBATm9Db250ZW50UmVzcG9uc2UoeyBkZXNjcmlwdGlvbjogJ1Jlc2V0IGRlIHNlbmhhJyB9KVxuICBAVW5hdXRob3JpemVkUmVzcG9uc2UoKVxuICBAVW5wcm9jZXNzYWJsZUVudGl0eVJlc3BvbnNlKClcbiAgQFVzZUd1YXJkcyhKd3RBdXRoR3VhcmQpXG4gIHJlc2V0UGFzc3dvcmQoQEJvZHkoKSBkdG86IFJlc2V0UGFzc3dvcmREdG8sIEBSZXEoKSByZXE6IFJlcXVlc3QpIHtcbiAgICByZXR1cm4gdGhpcy5fcGFzc3dvcmRTZXJ2aWNlLnJlc2V0UGFzc3dvcmQocmVxLnVzZXIudXNlcklkLCBkdG8pO1xuICB9XG59XG4iLCJpbXBvcnQgeyBNb2R1bGUgfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5pbXBvcnQgeyBDb25maWdTZXJ2aWNlIH0gZnJvbSAnQG5lc3Rqcy9jb25maWcnO1xuaW1wb3J0IHsgSnd0TW9kdWxlIH0gZnJvbSAnQG5lc3Rqcy9qd3QnO1xuaW1wb3J0IHsgVXNlck1vZHVsZSB9IGZyb20gJy4uL3VzZXIvdXNlci5tb2R1bGUnO1xuaW1wb3J0IHsgUGFzc3dvcmRDb250cm9sbGVyIH0gZnJvbSAnLi9wYXNzd29yZC5jb250cm9sbGVyJztcbmltcG9ydCB7IFBhc3N3b3JkU2VydmljZSB9IGZyb20gJy4vcGFzc3dvcmQuc2VydmljZSc7XG5cbkBNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgVXNlck1vZHVsZSxcbiAgICBKd3RNb2R1bGUucmVnaXN0ZXJBc3luYyh7XG4gICAgICBpbmplY3Q6IFtDb25maWdTZXJ2aWNlXSxcbiAgICAgIHVzZUZhY3Rvcnk6IChjb25maWdTZXJ2aWNlOiBDb25maWdTZXJ2aWNlKSA9PiBjb25maWdTZXJ2aWNlLmdldCgnand0JyksXG4gICAgfSksXG4gIF0sXG4gIGNvbnRyb2xsZXJzOiBbUGFzc3dvcmRDb250cm9sbGVyXSxcbiAgcHJvdmlkZXJzOiBbUGFzc3dvcmRTZXJ2aWNlXSxcbiAgZXhwb3J0czogW1Bhc3N3b3JkU2VydmljZV0sXG59KVxuZXhwb3J0IGNsYXNzIFBhc3N3b3JkTW9kdWxlIHt9XG4iLCJpbXBvcnQgeyBNYWlsZXJTZXJ2aWNlIH0gZnJvbSAnQG5lc3Rqcy1tb2R1bGVzL21haWxlcic7XG5pbXBvcnQgeyBJbmplY3RhYmxlLCBVbnByb2Nlc3NhYmxlRW50aXR5RXhjZXB0aW9uIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuaW1wb3J0IHsgQ29uZmlnU2VydmljZSB9IGZyb20gJ0BuZXN0anMvY29uZmlnJztcbmltcG9ydCB7IEp3dFNlcnZpY2UgfSBmcm9tICdAbmVzdGpzL2p3dCc7XG5pbXBvcnQgeyBhZGREYXlzIH0gZnJvbSAnZGF0ZS1mbnMnO1xuaW1wb3J0IHsgdjQgYXMgdXVpZCB9IGZyb20gJ3V1aWQnO1xuaW1wb3J0IHsgSnd0UGF5bG9hZEJ1aWxkZXIgfSBmcm9tICcuLi8uLi9jb21tb24vYnVpbGRlcnMvand0LXBheWxvYWQuYnVpbGRlcic7XG5pbXBvcnQgeyBSZWNvdmVyeVBhc3N3b3JkRHRvIH0gZnJvbSAnLi4vYXV0aC9kdG8vcmVjb3ZlcnktcGFzc3dvcmQuZHRvJztcbmltcG9ydCB7IEJjcnlwdFNlcnZpY2UgfSBmcm9tICcuLi9iY3J5cHQvYmNyeXB0LnNlcnZpY2UnO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4uL3VzZXIvZW50aXRpZXMvdXNlci5lbnRpdHknO1xuaW1wb3J0IHsgVXNlclNlcnZpY2UgfSBmcm9tICcuLi91c2VyL3VzZXIuc2VydmljZSc7XG5pbXBvcnQgeyBSZWNvdmVyeVBhc3N3b3JkQ29uZmlybUR0byB9IGZyb20gJy4vZHRvcy9yZWNvdmVyeS1wYXNzd29yZC1jb25maXJtLmR0byc7XG5pbXBvcnQgeyBSZXNldFBhc3N3b3JkRHRvIH0gZnJvbSAnLi9kdG9zL3Jlc2V0LXBhc3N3b3JkLmR0byc7XG5pbXBvcnQgeyBQYXNzd29yZFByb3h5IH0gZnJvbSAnLi9wcm94aWVzL3Bhc3N3b3JkLnByb3h5JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFBhc3N3b3JkU2VydmljZSB7XG4gIHByaXZhdGUgc3RhdGljIEFNT1VOVF9BRERfREFZID0gMTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHJlYWRvbmx5IF91c2VyU2VydmljZTogVXNlclNlcnZpY2UsXG4gICAgcHJpdmF0ZSByZWFkb25seSBfand0U2VydmljZTogSnd0U2VydmljZSxcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9jb25maWdTZXJ2aWNlOiBDb25maWdTZXJ2aWNlLFxuICAgIHByaXZhdGUgcmVhZG9ubHkgX21haWxlclNlcnZpY2U6IE1haWxlclNlcnZpY2UsXG4gICkge31cblxuICBhc3luYyByZWNvdmVyeVBhc3N3b3JkKGR0bzogUmVjb3ZlcnlQYXNzd29yZER0bykge1xuICAgIGNvbnN0IHVzZXIgPSBhd2FpdCB0aGlzLl91c2VyU2VydmljZS5maW5kT25lQnlFbWFpbChkdG8uZW1haWwpO1xuICAgIGlmICghdXNlcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHJlY292ZXJ5VG9rZW4gPSBhd2FpdCB0aGlzLiNnZW5lcmF0ZVJlY292ZXJ5VG9rZW4odXNlcik7XG5cbiAgICBjb25zdCBnZW5lcmF0ZVVybFRvUmVjb3ZlcnlUb2tlbiA9XG4gICAgICB0aGlzLiNnZW5lcmF0ZVVybFRvUmVjb3ZlcnlUb2tlbihyZWNvdmVyeVRva2VuKTtcblxuICAgIGF3YWl0IHRoaXMuX21haWxlclNlcnZpY2Uuc2VuZE1haWwoe1xuICAgICAgdG86IGR0by5lbWFpbCxcbiAgICAgIHN1YmplY3Q6ICctLSAtIEVzcXVlY2kgbWluaGEgc2VuaGEnLFxuICAgICAgdGVtcGxhdGU6IF9fZGlybmFtZSArICcuLi8uLi90ZW1wbGF0ZXMvcmVjb3ZlcnktcGFzc3dvcmQuaGJzJyxcbiAgICAgIGNvbnRleHQ6IHtcbiAgICAgICAgdXNlcjogdXNlci5mdWxsTmFtZSxcbiAgICAgICAgZ2VuZXJhdGVVcmxUb1JlY292ZXJ5VG9rZW4sXG4gICAgICB9LFxuICAgIH0pO1xuICB9XG4gIGFzeW5jIHJlY292ZXJ5UGFzc3dvcmRDb25maXJtKGR0bzogUmVjb3ZlcnlQYXNzd29yZENvbmZpcm1EdG8pIHtcbiAgICBjb25zdCB1c2VyID0gYXdhaXQgdGhpcy5fdXNlclNlcnZpY2UuZmluZFVzZXJCeVJlY292ZXJ5VG9rZW4oXG4gICAgICBkdG8ucmVjb3ZlcnlUb2tlbixcbiAgICApO1xuXG4gICAgY29uc3QgcmVjb3ZlcnlUb2tlbiA9IHRoaXMuI2RlY29kZUhhc2hlZFRva2VuVG9Db25maXJtUmVjb3ZlcnkoXG4gICAgICBkdG8ucmVjb3ZlcnlUb2tlbixcbiAgICApO1xuICAgIGNvbnN0IHVzZXJSZWNvdmVyeVRva2VuID0gdGhpcy4jZGVjb2RlSGFzaGVkVG9rZW5Ub0NvbmZpcm1SZWNvdmVyeShcbiAgICAgIHVzZXIucmVjb3ZlcnlUb2tlbixcbiAgICApO1xuXG4gICAgbmV3IFBhc3N3b3JkUHJveHkocmVjb3ZlcnlUb2tlbiwgdXNlclJlY292ZXJ5VG9rZW4pXG4gICAgICAudmFsaWRhdGVJZlJlY292ZXJ5VG9rZW5FeHBpcmVkKClcbiAgICAgIC52YWxpZGF0ZUlmRXhwaXJhdGlvbkRhdGVJc0VxdWFscygpXG4gICAgICAudmFsaWRhdGVJZkdVSURJc0VxdWFscygpO1xuXG4gICAgY29uc3QgcGFzc3dvcmQgPSBhd2FpdCBCY3J5cHRTZXJ2aWNlLmhhc2goZHRvLm5ld1Bhc3N3b3JkKTtcblxuICAgIGF3YWl0IHRoaXMuX3VzZXJTZXJ2aWNlLnVwZGF0ZVBhcnRpYWxVc2VyKHVzZXIuaWQsIHtcbiAgICAgIHBhc3N3b3JkLFxuICAgICAgcmVjb3ZlcnlUb2tlbjogbnVsbCxcbiAgICB9KTtcbiAgfVxuICBhc3luYyByZXNldFBhc3N3b3JkKHVzZXJJZDogc3RyaW5nLCBkdG86IFJlc2V0UGFzc3dvcmREdG8pIHtcbiAgICBjb25zdCB1c2VyID0gYXdhaXQgdGhpcy5fdXNlclNlcnZpY2UuZmluZE9uZSh1c2VySWQpO1xuXG4gICAgY29uc3QgbmV3UGFzc3dvcmQgPSBhd2FpdCBCY3J5cHRTZXJ2aWNlLmhhc2goZHRvLm5ld1Bhc3N3b3JkKTtcblxuICAgIHRoaXMuI3ZhbGlkYXRlSWZjdXJyZW50UGFzc3dvcmRBbmROZXdQYXNzd29yZElzRXF1YWxzKFxuICAgICAgdXNlci5wYXNzd29yZCxcbiAgICAgIG5ld1Bhc3N3b3JkLFxuICAgICk7XG5cbiAgICBhd2FpdCB0aGlzLl91c2VyU2VydmljZS51cGRhdGVQYXJ0aWFsVXNlcih1c2VySWQsIHtcbiAgICAgIHBhc3N3b3JkOiBkdG8ubmV3UGFzc3dvcmQsXG4gICAgfSk7XG4gIH1cbiAgI3ZhbGlkYXRlSWZjdXJyZW50UGFzc3dvcmRBbmROZXdQYXNzd29yZElzRXF1YWxzKFxuICAgIGN1cnJlbnRQYXNzd29yZDogc3RyaW5nLFxuICAgIG5ld1Bhc3N3b3JkOiBzdHJpbmcsXG4gICkge1xuICAgIGlmIChjdXJyZW50UGFzc3dvcmQgPT09IG5ld1Bhc3N3b3JkKSB7XG4gICAgICB0aHJvdyBuZXcgVW5wcm9jZXNzYWJsZUVudGl0eUV4Y2VwdGlvbignQXMgc2VuaGFzIHPDo28gaWRlbnRpY2FzLicpO1xuICAgIH1cbiAgfVxuICAjZ2VuZXJhdGVVcmxUb1JlY292ZXJ5VG9rZW4ocmVjb3ZlcnlUb2tlbjogc3RyaW5nKSB7XG4gICAgcmV0dXJuIGAke3RoaXMuX2NvbmZpZ1NlcnZpY2UuZ2V0KFxuICAgICAgJ2FwcC51cmxzLndlYicsXG4gICAgKX0vcmVzZXRhci1zZW5oYT9yZWNvdmVyeVRva2VuPSR7cmVjb3ZlcnlUb2tlbn1gO1xuICB9XG4gIGFzeW5jICNnZW5lcmF0ZVJlY292ZXJ5VG9rZW4odXNlcjogVXNlcikge1xuICAgIGNvbnN0IGV4cGlyYXRpb25EYXRlID0gYWRkRGF5cyhuZXcgRGF0ZSgpLCBQYXNzd29yZFNlcnZpY2UuQU1PVU5UX0FERF9EQVkpO1xuXG4gICAgY29uc3QgaGFzaGVkUmVjb3ZlcnlUb2tlbiA9IHRoaXMuI2dlbmVyYXRlSGFzaGVkVG9rZW5Ub1JlY292ZXJ5KFxuICAgICAgdXNlcixcbiAgICAgIHV1aWQoKSxcbiAgICAgIGV4cGlyYXRpb25EYXRlLFxuICAgICk7XG5cbiAgICBhd2FpdCB0aGlzLl91c2VyU2VydmljZS51cGRhdGVQYXJ0aWFsVXNlcih1c2VyLmlkLCB7XG4gICAgICByZWNvdmVyeVRva2VuOiBoYXNoZWRSZWNvdmVyeVRva2VuLFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGhhc2hlZFJlY292ZXJ5VG9rZW47XG4gIH1cbiAgI2dlbmVyYXRlSGFzaGVkVG9rZW5Ub1JlY292ZXJ5KFxuICAgIHVzZXI6IFVzZXIsXG4gICAgR1VJRDogc3RyaW5nLFxuICAgIGV4cGlyYXRpb25EYXRlOiBEYXRlLFxuICApIHtcbiAgICBjb25zdCBwYXlsb2FkID0gSnd0UGF5bG9hZEJ1aWxkZXIudG9SZWNvdmVyeVRva2VuKFxuICAgICAgdXNlcixcbiAgICAgIEdVSUQsXG4gICAgICBleHBpcmF0aW9uRGF0ZSxcbiAgICApO1xuXG4gICAgcmV0dXJuIHRoaXMuX2p3dFNlcnZpY2Uuc2lnbihwYXlsb2FkKTtcbiAgfVxuXG4gICNkZWNvZGVIYXNoZWRUb2tlblRvQ29uZmlybVJlY292ZXJ5KHJlY292ZXJ5VG9rZW46IHN0cmluZykge1xuICAgIGNvbnN0IGRlY29kZWRUb2tlbiA9IHRoaXMuX2p3dFNlcnZpY2UuZGVjb2RlKFxuICAgICAgcmVjb3ZlcnlUb2tlbixcbiAgICApIGFzIEV4cHJlc3MuUmVjb3Zlcnk7XG5cbiAgICBpZiAoIWRlY29kZWRUb2tlbikge1xuICAgICAgdGhyb3cgbmV3IFVucHJvY2Vzc2FibGVFbnRpdHlFeGNlcHRpb24oKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGVjb2RlZFRva2VuO1xuICB9XG59XG4iLCJpbXBvcnQgeyBMb2dnZXIsIFVucHJvY2Vzc2FibGVFbnRpdHlFeGNlcHRpb24gfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5pbXBvcnQgeyBpc0VxdWFsLCBpc0Z1dHVyZSB9IGZyb20gJ2RhdGUtZm5zJztcblxuZXhwb3J0IGNsYXNzIFBhc3N3b3JkUHJveHkge1xuICBwcml2YXRlIHJlYWRvbmx5IF9sb2dnZXIgPSBuZXcgTG9nZ2VyKCdQYXNzd29yZFByb3h5Jyk7XG4gIHByaXZhdGUgcmVhZG9ubHkgX3JlY292ZXJ5VG9rZW46IEV4cHJlc3MuUmVjb3Zlcnk7XG4gIHByaXZhdGUgcmVhZG9ubHkgX3VzZXJSZWNvdmVyeVRva2VuOiBFeHByZXNzLlJlY292ZXJ5O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHJlY292ZXJ5VG9rZW46IEV4cHJlc3MuUmVjb3ZlcnksXG4gICAgdXNlclJlY292ZXJ5VG9rZW46IEV4cHJlc3MuUmVjb3ZlcnksXG4gICkge1xuICAgIHRoaXMuX3JlY292ZXJ5VG9rZW4gPSByZWNvdmVyeVRva2VuO1xuICAgIHRoaXMuX3VzZXJSZWNvdmVyeVRva2VuID0gdXNlclJlY292ZXJ5VG9rZW47XG4gIH1cblxuICB2YWxpZGF0ZUlmUmVjb3ZlcnlUb2tlbkV4cGlyZWQoKSB7XG4gICAgY29uc3QgaXNWYWxpZEV4cGlyYXRpb25EYXRlID0gaXNGdXR1cmUoXG4gICAgICBuZXcgRGF0ZSh0aGlzLl9yZWNvdmVyeVRva2VuLmV4cGlyYXRpb25EYXRlKSxcbiAgICApO1xuXG4gICAgaWYgKCFpc1ZhbGlkRXhwaXJhdGlvbkRhdGUpIHtcbiAgICAgIHRocm93IG5ldyBVbnByb2Nlc3NhYmxlRW50aXR5RXhjZXB0aW9uKFxuICAgICAgICAnVG9rZW4gZGUgcmVjdXBlcmHDp8OjbyBzZW5oYSBleHBpcm91LicsXG4gICAgICApO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIHZhbGlkYXRlSWZHVUlESXNFcXVhbHMoKSB7XG4gICAgY29uc3QgaXNFcXVhbHMgPSB0aGlzLl9yZWNvdmVyeVRva2VuLkdVSUQgPT09IHRoaXMuX3VzZXJSZWNvdmVyeVRva2VuLkdVSUQ7XG5cbiAgICBpZiAoIWlzRXF1YWxzKSB7XG4gICAgICB0aGlzLl9sb2dnZXIuZXJyb3IoJ0dVSUQgbsOjbyDDqSBpZGVudGljbycpO1xuICAgICAgdGhyb3cgbmV3IFVucHJvY2Vzc2FibGVFbnRpdHlFeGNlcHRpb24oXG4gICAgICAgICdUb2tlbiBkZSByZWN1cGVyYcOnw6NvIMOpIGludsOhbGlkby4nLFxuICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICB2YWxpZGF0ZUlmRXhwaXJhdGlvbkRhdGVJc0VxdWFscygpIHtcbiAgICBjb25zdCBpc0VxdWFscyA9IGlzRXF1YWwoXG4gICAgICBuZXcgRGF0ZSh0aGlzLl9yZWNvdmVyeVRva2VuLmV4cGlyYXRpb25EYXRlKSxcbiAgICAgIG5ldyBEYXRlKHRoaXMuX3VzZXJSZWNvdmVyeVRva2VuLmV4cGlyYXRpb25EYXRlKSxcbiAgICApO1xuXG4gICAgaWYgKCFpc0VxdWFscykge1xuICAgICAgdGhpcy5fbG9nZ2VyLmVycm9yKCdEYXRhIGRlIGV4cGlyYcOnw6NvIG7Do28gw6kgaWRlbnRpY2EnKTtcbiAgICAgIHRocm93IG5ldyBVbnByb2Nlc3NhYmxlRW50aXR5RXhjZXB0aW9uKFxuICAgICAgICAnVG9rZW4gZGUgcmVjdXBlcmHDp8OjbyDDqSBpbnbDoWxpZG8uJyxcbiAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbn1cbiIsImltcG9ydCB7IEFwaVByb3BlcnR5LCBBcGlQcm9wZXJ0eU9wdGlvbmFsIH0gZnJvbSAnQG5lc3Rqcy9zd2FnZ2VyJztcbmltcG9ydCB7IFRyYW5zZm9ybSB9IGZyb20gJ2NsYXNzLXRyYW5zZm9ybWVyJztcbmltcG9ydCB7XG4gIElzRW1haWwsXG4gIElzT3B0aW9uYWwsXG4gIElzU3RyaW5nLFxuICBNYXhMZW5ndGgsXG4gIE1pbkxlbmd0aCxcbn0gZnJvbSAnY2xhc3MtdmFsaWRhdG9yJztcbmltcG9ydCAqIGFzIEZha2VyIGZyb20gJ2Zha2VyLWJyJztcbmltcG9ydCB7IEFwcFJvbGVzIH0gZnJvbSAnLi4vLi4vLi4vYXBwLnJvbGVzJztcbmltcG9ydCB7IEtlZXBBbGxOdW1iZXJzVHJhbnNmb3JtIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3RyYW5zZm9ybWVycy9rZWVwLWFsbC1udW1iZXJzLnRyYW5zZm9ybSc7XG5pbXBvcnQgeyBMb3dlckNhc2VUcmFuc2Zvcm0gfSBmcm9tICcuLi8uLi8uLi9jb21tb24vdHJhbnNmb3JtZXJzL2xvd2VyLWNhc2UudHJhbnNmb3JtJztcblxuZXhwb3J0IGNsYXNzIENyZWF0ZVVzZXJEdG8ge1xuICBAQXBpUHJvcGVydHkoeyBleGFtcGxlOiBGYWtlci5uYW1lLmZpbmROYW1lKCkgfSlcbiAgQElzU3RyaW5nKHsgbWVzc2FnZTogJ05vbWUgw6kgaW52w6FsaWRvLicgfSlcbiAgQE1heExlbmd0aCgyNTUsIHtcbiAgICBtZXNzYWdlOiAnVGFtYW5obyBtw6F4aW1vIGRvIG5vbWUuIERldmUgc2VyIG1lbm9yIHF1ZSAyNTUgY2FyYWN0ZXJlcy4nLFxuICB9KVxuICBATWluTGVuZ3RoKDIsIHtcbiAgICBtZXNzYWdlOiAnVGFtYW5obyBtw61uaW1vIGRvIG5vbWUuIERldmUgc2VyIG1haW9yIHF1ZSAyIGNhcmFjdGVyZXMuJyxcbiAgfSlcbiAgZnVsbE5hbWU6IHN0cmluZztcblxuICBAQXBpUHJvcGVydHkoe1xuICAgIGV4YW1wbGU6IEZha2VyLmludGVybmV0LmVtYWlsKCksXG4gIH0pXG4gIEBNYXhMZW5ndGgoMjU1LCB7XG4gICAgbWVzc2FnZTogJ1RhbWFuaG8gbcOheGltbyBkbyBlbWFpbC4gRGV2ZSBzZXIgbWVub3IgcXVlIDI1NSBjYXJhY3RlcmVzLicsXG4gIH0pXG4gIEBNaW5MZW5ndGgoMiwge1xuICAgIG1lc3NhZ2U6ICdUYW1hbmhvIG3DrW5pbW8gZG8gZW1haWwuIERldmUgc2VyIG1haW9yIHF1ZSAyIGNhcmFjdGVyZXMuJyxcbiAgfSlcbiAgQElzRW1haWwoe30sIHsgbWVzc2FnZTogJ0VtYWlsIGludsOhbGlkby4nIH0pXG4gIEBUcmFuc2Zvcm0oTG93ZXJDYXNlVHJhbnNmb3JtKVxuICBlbWFpbDogc3RyaW5nO1xuXG4gIEBBcGlQcm9wZXJ0eU9wdGlvbmFsKHsgZXhhbXBsZTogRmFrZXIucGhvbmUucGhvbmVOdW1iZXIoKSB9KVxuICBATWF4TGVuZ3RoKDE2LCB7XG4gICAgbWVzc2FnZTogJ1RhbWFuaG8gbcOheGltbyBkbyB0ZWxlZm9uZS4gRGV2ZSBzZXIgbWVub3IgcXVlIDE2IGNhcmFjdGVyZXMuJyxcbiAgfSlcbiAgQElzT3B0aW9uYWwoKVxuICBASXNTdHJpbmcoeyBtZXNzYWdlOiAnVGVsZWZvbmUgw6kgaW52w6FsaWRvLicgfSlcbiAgQE1pbkxlbmd0aCg4LCB7XG4gICAgbWVzc2FnZTogJ1RhbWFuaG8gbcOtbmltbyBkbyB0ZWxlZm9uZS4gRGV2ZSBzZXIgbWFpb3IgcXVlIDggY2FyYWN0ZXJlcy4nLFxuICB9KVxuICBAVHJhbnNmb3JtKEtlZXBBbGxOdW1iZXJzVHJhbnNmb3JtKVxuICBwaG9uZU51bWJlcj86IHN0cmluZztcblxuICBAQXBpUHJvcGVydHlPcHRpb25hbCh7XG4gICAgZXhhbXBsZTogYCR7RmFrZXIuYWRkcmVzcy5zdHJlZXRBZGRyZXNzKCl9IC0gJHtGYWtlci5hZGRyZXNzLnN0YXRlKCl9YCxcbiAgfSlcbiAgQElzT3B0aW9uYWwoKVxuICBhZGRyZXNzPzogc3RyaW5nO1xuXG4gIEBBcGlQcm9wZXJ0eSh7IGV4YW1wbGU6IEFwcFJvbGVzLlVTRVIgfSlcbiAgQElzU3RyaW5nKHsgbWVzc2FnZTogJ0Egcm9sZSDDqSBvYnJpZ2F0w7NyaWEuJyB9KVxuICByb2xlOiBzdHJpbmc7XG5cbiAgQEFwaVByb3BlcnR5KHsgZXhhbXBsZTogRmFrZXIuaW50ZXJuZXQucGFzc3dvcmQoKSB9KVxuICBASXNTdHJpbmcoeyBtZXNzYWdlOiAnQSBzZW5oYSDDqSBvYnJpZ2F0w7NyaWEuJyB9KVxuICBATWluTGVuZ3RoKDUsIHsgbWVzc2FnZTogJ0Egc2VuaGEuIERldmUgcG9zc3VpciBubyBtw61uaW1vIDUgY2FyYWN0ZXJlcy4nIH0pXG4gIHBhc3N3b3JkOiBzdHJpbmc7XG59XG4iLCJpbXBvcnQgeyBBcGlQcm9wZXJ0eU9wdGlvbmFsIH0gZnJvbSAnQG5lc3Rqcy9zd2FnZ2VyJztcbmltcG9ydCB7IFRyYW5zZm9ybSB9IGZyb20gJ2NsYXNzLXRyYW5zZm9ybWVyJztcbmltcG9ydCB7IElzT3B0aW9uYWwgfSBmcm9tICdjbGFzcy12YWxpZGF0b3InO1xuaW1wb3J0IHsgU2VsZWN0UXVlcnlCdWlsZGVyIH0gZnJvbSAndHlwZW9ybSc7XG5pbXBvcnQgeyBQYWdpbmF0aW9uRHRvIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL2R0b3MvcGFnaW5hdGlvbi5kdG8nO1xuaW1wb3J0IHsgRGVjcnlwdGVkVHJhbnNmb3JtIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3RyYW5zZm9ybWVycy9kZWNyeXB0ZWQtdHJhbnNmb3JtJztcblxuZXhwb3J0IGNsYXNzIEZpbHRlclVzZXJEdG8gZXh0ZW5kcyBQYWdpbmF0aW9uRHRvIHtcbiAgQEFwaVByb3BlcnR5T3B0aW9uYWwoeyBleGFtcGxlOiAnSm9zw6kgTWFyaWEnIH0pXG4gIEBJc09wdGlvbmFsKClcbiAgQFRyYW5zZm9ybShEZWNyeXB0ZWRUcmFuc2Zvcm0pXG4gIGZ1bGxOYW1lPzogc3RyaW5nO1xuXG4gIEBBcGlQcm9wZXJ0eU9wdGlvbmFsKClcbiAgQElzT3B0aW9uYWwoKVxuICBAVHJhbnNmb3JtKERlY3J5cHRlZFRyYW5zZm9ybSlcbiAgZW1haWw/OiBzdHJpbmc7XG5cbiAgY3JlYXRlV2hlcmU8VD4ocXVlcnlCdWlsZGVyOiBTZWxlY3RRdWVyeUJ1aWxkZXI8VD4pIHtcbiAgICB0aGlzLndpdGhGaWx0ZXIodGhpcy5mdWxsTmFtZSwgKCkgPT5cbiAgICAgIHF1ZXJ5QnVpbGRlci5hbmRXaGVyZSgndS5mdWxsTmFtZSBsaWtlIDpmdWxsTmFtZScsIHtcbiAgICAgICAgbmFtZTogdGhpcy5jcmVhdGVMaWtlKHRoaXMuZnVsbE5hbWUpLFxuICAgICAgfSksXG4gICAgKTtcblxuICAgIHRoaXMud2l0aEZpbHRlcih0aGlzLmVtYWlsLCAoKSA9PlxuICAgICAgcXVlcnlCdWlsZGVyLmFuZFdoZXJlKCd1LmVtYWlsIGxpa2UgOmVtYWlsJywge1xuICAgICAgICBlbWFpbDogdGhpcy5jcmVhdGVMaWtlKHRoaXMuZW1haWwpLFxuICAgICAgfSksXG4gICAgKTtcblxuICAgIHRoaXMud2l0aEZpbHRlcih0aGlzLnN0YXJ0QXQsICgpID0+XG4gICAgICBxdWVyeUJ1aWxkZXIuYW5kV2hlcmUoJ2RhdGUodS5jcmVhdGVkQXQpID49IDpzdGFydEF0Jywge1xuICAgICAgICBzdGFydEF0OiB0aGlzLnN0YXJ0QXQsXG4gICAgICB9KSxcbiAgICApO1xuXG4gICAgdGhpcy53aXRoRmlsdGVyKHRoaXMuZW5kQXQsICgpID0+XG4gICAgICBxdWVyeUJ1aWxkZXIuYW5kV2hlcmUoJ2RhdGUodS5jcmVhdGVkQXQpIDw9IDplbmRBdCcsIHtcbiAgICAgICAgZW5kQXQ6IHRoaXMuZW5kQXQsXG4gICAgICB9KSxcbiAgICApO1xuICB9XG5cbiAgY3JlYXRlT3JkZXI8VD4ocXVlcnlCdWlsZGVyOiBTZWxlY3RRdWVyeUJ1aWxkZXI8VD4pIHtcbiAgICBpZiAodGhpcy5vcmRlcikge1xuICAgICAgT2JqZWN0LmVudHJpZXModGhpcy5vcmRlcikuZm9yRWFjaCgoW2ZpZWxkLCB2YWx1ZV0pID0+IHtcbiAgICAgICAgdGhpcy53aXRoT3JkZXJCeShmaWVsZCwgJ2Z1bGxOYW1lJywgKCkgPT5cbiAgICAgICAgICBxdWVyeUJ1aWxkZXIuYWRkT3JkZXJCeSgndS5mdWxsTmFtZScsIHZhbHVlKSxcbiAgICAgICAgKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgT21pdFR5cGUsIFBhcnRpYWxUeXBlIH0gZnJvbSAnQG5lc3Rqcy9zd2FnZ2VyJztcbmltcG9ydCB7IENyZWF0ZVVzZXJEdG8gfSBmcm9tICcuL2NyZWF0ZS11c2VyLmR0byc7XG5cbmV4cG9ydCBjbGFzcyBVcGRhdGVVc2VyRHRvIGV4dGVuZHMgUGFydGlhbFR5cGUoXG4gIE9taXRUeXBlKENyZWF0ZVVzZXJEdG8sIFsncm9sZSddIGFzIGNvbnN0KSxcbikge31cbiIsImltcG9ydCB7IEFwaVByb3BlcnR5LCBBcGlQcm9wZXJ0eU9wdGlvbmFsIH0gZnJvbSAnQG5lc3Rqcy9zd2FnZ2VyJztcbmltcG9ydCB7IEFwcFJvbGVzIH0gZnJvbSAnLi4vLi4vLi4vYXBwLnJvbGVzJztcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby12YXItcmVxdWlyZXNcbmNvbnN0IEZha2VyID0gcmVxdWlyZSgnZmFrZXItYnInKTtcblxuZXhwb3J0IGNsYXNzIFVzZXJEdG8ge1xuICBAQXBpUHJvcGVydHkoe1xuICAgIGZvcm1hdDogJ3V1aWQnLFxuICAgIHR5cGU6IFN0cmluZyxcbiAgfSlcbiAgaWQ6IHN0cmluZztcblxuICBAQXBpUHJvcGVydHkoeyBleGFtcGxlOiBGYWtlci5uYW1lLmZpbmROYW1lKCkgfSlcbiAgZnVsbE5hbWU6IHN0cmluZztcblxuICBAQXBpUHJvcGVydHkoe1xuICAgIGV4YW1wbGU6IEZha2VyLmludGVybmV0LmVtYWlsKCksXG4gIH0pXG4gIGVtYWlsOiBzdHJpbmc7XG5cbiAgQEFwaVByb3BlcnR5KHtcbiAgICBleGFtcGxlOiBBcHBSb2xlcy5VU0VSLFxuICB9KVxuICByb2xlOiBzdHJpbmc7XG5cbiAgQEFwaVByb3BlcnR5T3B0aW9uYWwoeyBleGFtcGxlOiBGYWtlci5waG9uZS5waG9uZU51bWJlcigpIH0pXG4gIHBob25lTnVtYmVyPzogc3RyaW5nO1xuXG4gIEBBcGlQcm9wZXJ0eU9wdGlvbmFsKHtcbiAgICBleGFtcGxlOiBgJHtGYWtlci5hZGRyZXNzLnN0cmVldEFkZHJlc3MoKX0gLSAke0Zha2VyLmFkZHJlc3Muc3RhdGUoKX1gLFxuICB9KVxuICBhZGRyZXNzPzogc3RyaW5nO1xufVxuIiwiaW1wb3J0IHsgRW50aXR5IH0gZnJvbSAndHlwZW9ybSc7XG5pbXBvcnQgeyBBcHBSb2xlcyB9IGZyb20gJy4uLy4uLy4uL2FwcC5yb2xlcyc7XG5pbXBvcnQgeyBVbmlxdWVJZGVudGlmaWVyRW50aXR5IH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL2VudGl0aWVzL3VuaXF1ZS1pZGVudGlmaWVyLmVudGl0eSc7XG5pbXBvcnQgeyBFbmNyeXB0ZWRDb2x1bW4gfSBmcm9tICcuLi8uLi8uLi9kZWNvcmF0b3JzL2VuY3J5cHRlZC1jb2x1bW4uZGVjb3JhdG9yJztcbmltcG9ydCB7IE5vcm1hbGl6ZWRDb2x1bW4gfSBmcm9tICcuLi8uLi8uLi9kZWNvcmF0b3JzL25vcm1hbGl6ZWQtY29sdW1uLmRlY29yYXRvcic7XG5cbkBFbnRpdHkoKVxuZXhwb3J0IGNsYXNzIFVzZXIgZXh0ZW5kcyBVbmlxdWVJZGVudGlmaWVyRW50aXR5IHtcbiAgQEVuY3J5cHRlZENvbHVtbigpXG4gIGZ1bGxOYW1lOiBzdHJpbmc7XG5cbiAgQEVuY3J5cHRlZENvbHVtbigpXG4gIGVtYWlsOiBzdHJpbmc7XG5cbiAgQEVuY3J5cHRlZENvbHVtbigpXG4gIHBob25lTnVtYmVyPzogc3RyaW5nO1xuXG4gIEBOb3JtYWxpemVkQ29sdW1uKClcbiAgYWRkcmVzcz86IHN0cmluZztcblxuICBATm9ybWFsaXplZENvbHVtbih7XG4gICAgZGVmYXVsdDogQXBwUm9sZXMuVVNFUixcbiAgICBsZW5ndGg6IDQwLFxuICB9KVxuICByb2xlOiBzdHJpbmc7XG5cbiAgQE5vcm1hbGl6ZWRDb2x1bW4oKVxuICBwYXNzd29yZDogc3RyaW5nO1xuXG4gIEBOb3JtYWxpemVkQ29sdW1uKClcbiAgcmVjb3ZlcnlUb2tlbjogc3RyaW5nO1xufVxuIiwiaW1wb3J0IHsgVXNlckR0byB9IGZyb20gJy4uL2R0by91c2VyLmR0byc7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi4vZW50aXRpZXMvdXNlci5lbnRpdHknO1xuXG5leHBvcnQgY2xhc3MgVXNlclBhcnNlciB7XG4gIHN0YXRpYyB0b1VzZXJEdG8oZW50aXR5OiBVc2VyKTogVXNlckR0byB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlkOiBlbnRpdHkuaWQsXG4gICAgICBmdWxsTmFtZTogZW50aXR5LmZ1bGxOYW1lLFxuICAgICAgZW1haWw6IGVudGl0eS5lbWFpbCxcbiAgICAgIGFkZHJlc3M6IGVudGl0eT8uYWRkcmVzcyxcbiAgICAgIHBob25lTnVtYmVyOiBlbnRpdHk/LnBob25lTnVtYmVyLFxuICAgICAgcm9sZTogZW50aXR5LnJvbGUsXG4gICAgfTtcbiAgfVxufVxuIiwiaW1wb3J0IHtcbiAgQXBpQ29udHJvbGxlcixcbiAgQmFkUmVxdWVzdFJlc3BvbnNlLFxuICBDcmVhdGVkUmVzcG9uc2UsXG4gIE5vQ29udGVudFJlc3BvbnNlLFxuICBOb3RGb3VuZFJlc3BvbnNlLFxuICBPa1Jlc3BvbnNlLFxuICBQYWdpbmF0ZWRPa1Jlc3BvbnNlLFxufSBmcm9tICdAYXBwL3N3YWdnZXItZGVjb3JhdG9ycyc7XG5pbXBvcnQge1xuICBCb2R5LFxuICBEZWxldGUsXG4gIEdldCxcbiAgUGFyYW0sXG4gIFBhcnNlVVVJRFBpcGUsXG4gIFBhdGNoLFxuICBQb3N0LFxuICBRdWVyeSxcbn0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuaW1wb3J0IHsgUGFnaW5hdGVkRHRvIH0gZnJvbSAnLi4vLi4vY29tbW9uL2R0b3MvcGFnaW5hdGVkLmR0byc7XG5pbXBvcnQgeyBQYWdpbmF0aW9uUGFyc2VyIH0gZnJvbSAnLi4vLi4vY29tbW9uL3BhcnNlcnMvcGFnaW5hdGlvbi5wYXJzZXInO1xuaW1wb3J0IHsgSnd0R3VhcmRTZXR1cCB9IGZyb20gJy4uLy4uL2RlY29yYXRvcnMvand0LWd1YXJkLmRlY29yYXRvcic7XG5pbXBvcnQgeyBDcmVhdGVVc2VyRHRvIH0gZnJvbSAnLi9kdG8vY3JlYXRlLXVzZXIuZHRvJztcbmltcG9ydCB7IEZpbHRlclVzZXJEdG8gfSBmcm9tICcuL2R0by9maWx0ZXItdXNlci5kdG8nO1xuaW1wb3J0IHsgVXBkYXRlVXNlckR0byB9IGZyb20gJy4vZHRvL3VwZGF0ZS11c2VyLmR0byc7XG5pbXBvcnQgeyBVc2VyRHRvIH0gZnJvbSAnLi9kdG8vdXNlci5kdG8nO1xuaW1wb3J0IHsgVXNlclBhcnNlciB9IGZyb20gJy4vcGFyc2Vycy91c2VyLnBhcnNlcic7XG5pbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gJy4vdXNlci5zZXJ2aWNlJztcblxuQEFwaUNvbnRyb2xsZXIoJ3VzZXInKVxuZXhwb3J0IGNsYXNzIFVzZXJDb250cm9sbGVyIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBfdXNlclNlcnZpY2U6IFVzZXJTZXJ2aWNlKSB7fVxuXG4gIEBQb3N0KClcbiAgQENyZWF0ZWRSZXNwb25zZSh7XG4gICAgZGVzY3JpcHRpb246ICdDcmlhw6fDo28gZGUgVXN1w6FyaW8nLFxuICAgIHR5cGU6IFVzZXJEdG8sXG4gIH0pXG4gIEBCYWRSZXF1ZXN0UmVzcG9uc2UoKVxuICBhc3luYyBjcmVhdGUoQEJvZHkoKSBkdG86IENyZWF0ZVVzZXJEdG8pIHtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLl91c2VyU2VydmljZS5jcmVhdGUoZHRvKTtcblxuICAgIHJldHVybiBVc2VyUGFyc2VyLnRvVXNlckR0byhyZXN1bHQpO1xuICB9XG5cbiAgQEdldCgpXG4gIEBQYWdpbmF0ZWRPa1Jlc3BvbnNlKFVzZXJEdG8sIHsgZGVzY3JpcHRpb246ICdQYWdpbmHDp8OjbyBkZSBVc3XDoXJpb3MnIH0pXG4gIEBCYWRSZXF1ZXN0UmVzcG9uc2UoKVxuICBhc3luYyBwYWdpbmF0ZShcbiAgICBAUXVlcnkoKSBmaWx0ZXI6IEZpbHRlclVzZXJEdG8sXG4gICk6IFByb21pc2U8UGFnaW5hdGVkRHRvPFVzZXJEdG8+PiB7XG4gICAgY29uc3QgcGFnaW5hdGUgPSBhd2FpdCB0aGlzLl91c2VyU2VydmljZS5wYWdpbmF0ZShmaWx0ZXIpO1xuXG4gICAgcmV0dXJuIFBhZ2luYXRpb25QYXJzZXIudG9QYWdpbmF0aW9uKHBhZ2luYXRlLCBVc2VyUGFyc2VyLnRvVXNlckR0byk7XG4gIH1cblxuICBAR2V0KCc6aWQnKVxuICBAT2tSZXNwb25zZSh7XG4gICAgdHlwZTogVXNlckR0byxcbiAgICBkZXNjcmlwdGlvbjogJ0RldGFsaGVzIGRlIFVzdcOhcmlvJyxcbiAgfSlcbiAgQEJhZFJlcXVlc3RSZXNwb25zZSgpXG4gIEBOb3RGb3VuZFJlc3BvbnNlKClcbiAgYXN5bmMgZmluZE9uZShAUGFyYW0oJ2lkJywgbmV3IFBhcnNlVVVJRFBpcGUoKSkgaWQ6IHN0cmluZykge1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMuX3VzZXJTZXJ2aWNlLmZpbmRPbmUoaWQpO1xuXG4gICAgcmV0dXJuIFVzZXJQYXJzZXIudG9Vc2VyRHRvKHJlc3VsdCk7XG4gIH1cblxuICBAUGF0Y2goJzppZCcpXG4gIEBPa1Jlc3BvbnNlKHtcbiAgICB0eXBlOiBVc2VyRHRvLFxuICAgIGRlc2NyaXB0aW9uOiAnQXR1YWxpemHDp8OjbyBkZSBkYWRvcyBkbyBVc3XDoXJpbycsXG4gIH0pXG4gIEBOb3RGb3VuZFJlc3BvbnNlKClcbiAgQEJhZFJlcXVlc3RSZXNwb25zZSgpXG4gIEBKd3RHdWFyZFNldHVwKClcbiAgYXN5bmMgdXBkYXRlKFxuICAgIEBQYXJhbSgnaWQnLCBuZXcgUGFyc2VVVUlEUGlwZSgpKSBpZDogc3RyaW5nLFxuICAgIEBCb2R5KCkgZHRvOiBVcGRhdGVVc2VyRHRvLFxuICApIHtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLl91c2VyU2VydmljZS51cGRhdGUoaWQsIGR0byk7XG5cbiAgICByZXR1cm4gVXNlclBhcnNlci50b1VzZXJEdG8ocmVzdWx0KTtcbiAgfVxuXG4gIEBEZWxldGUoJzppZCcpXG4gIEBOb0NvbnRlbnRSZXNwb25zZSh7IGRlc2NyaXB0aW9uOiAnRGVsZcOnw6NvIGRlIFVzdcOhcmlvJyB9KVxuICBATm90Rm91bmRSZXNwb25zZSgpXG4gIHJlbW92ZShAUGFyYW0oJ2lkJywgbmV3IFBhcnNlVVVJRFBpcGUoKSkgaWQ6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLl91c2VyU2VydmljZS5yZW1vdmUoaWQpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBNb2R1bGUgfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5pbXBvcnQgeyBUeXBlT3JtTW9kdWxlIH0gZnJvbSAnQG5lc3Rqcy90eXBlb3JtJztcbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuL2VudGl0aWVzL3VzZXIuZW50aXR5JztcbmltcG9ydCB7IFVzZXJDb250cm9sbGVyIH0gZnJvbSAnLi91c2VyLmNvbnRyb2xsZXInO1xuaW1wb3J0IHsgVXNlclNlcnZpY2UgfSBmcm9tICcuL3VzZXIuc2VydmljZSc7XG5cbkBNb2R1bGUoe1xuICBpbXBvcnRzOiBbVHlwZU9ybU1vZHVsZS5mb3JGZWF0dXJlKFtVc2VyXSldLFxuICBjb250cm9sbGVyczogW1VzZXJDb250cm9sbGVyXSxcbiAgcHJvdmlkZXJzOiBbVXNlclNlcnZpY2VdLFxuICBleHBvcnRzOiBbVXNlclNlcnZpY2VdLFxufSlcbmV4cG9ydCBjbGFzcyBVc2VyTW9kdWxlIHt9XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlLCBVbnByb2Nlc3NhYmxlRW50aXR5RXhjZXB0aW9uIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuaW1wb3J0IHsgSW5qZWN0UmVwb3NpdG9yeSB9IGZyb20gJ0BuZXN0anMvdHlwZW9ybSc7XG5pbXBvcnQgeyBwYWdpbmF0ZSB9IGZyb20gJ25lc3Rqcy10eXBlb3JtLXBhZ2luYXRlJztcbmltcG9ydCB7IFJlcG9zaXRvcnkgfSBmcm9tICd0eXBlb3JtJztcbmltcG9ydCB7IEVudGl0eU5vdEZvdW5kRXJyb3IgfSBmcm9tICcuLi8uLi9jb21tb24vZXhjZXB0aW9ucy9lbnRpdHktbm90LWZvdW5kLWVycm9yLmV4Y2VwdGlvbic7XG5pbXBvcnQgeyBCY3J5cHRTZXJ2aWNlIH0gZnJvbSAnLi4vYmNyeXB0L2JjcnlwdC5zZXJ2aWNlJztcbmltcG9ydCB7IENyZWF0ZVVzZXJEdG8gfSBmcm9tICcuL2R0by9jcmVhdGUtdXNlci5kdG8nO1xuaW1wb3J0IHsgRmlsdGVyVXNlckR0byB9IGZyb20gJy4vZHRvL2ZpbHRlci11c2VyLmR0byc7XG5pbXBvcnQgeyBVcGRhdGVVc2VyRHRvIH0gZnJvbSAnLi9kdG8vdXBkYXRlLXVzZXIuZHRvJztcbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuL2VudGl0aWVzL3VzZXIuZW50aXR5JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFVzZXJTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgQEluamVjdFJlcG9zaXRvcnkoVXNlcilcbiAgICBwcml2YXRlIHJlYWRvbmx5IF91c2VyUmVwbzogUmVwb3NpdG9yeTxVc2VyPixcbiAgKSB7fVxuXG4gIGFzeW5jIGNyZWF0ZShkdG86IENyZWF0ZVVzZXJEdG8pIHtcbiAgICBjb25zdCBwYXNzd29yZCA9IGF3YWl0IEJjcnlwdFNlcnZpY2UuaGFzaChkdG8ucGFzc3dvcmQpO1xuXG4gICAgY29uc3QgdXNlciA9IHRoaXMuX3VzZXJSZXBvLmNyZWF0ZSh7XG4gICAgICAuLi5kdG8sXG4gICAgICBwYXNzd29yZCxcbiAgICB9KTtcblxuICAgIHJldHVybiB0aGlzLl91c2VyUmVwby5zYXZlKHVzZXIpO1xuICB9XG4gIHBhZ2luYXRlKGZpbHRlcjogRmlsdGVyVXNlckR0bykge1xuICAgIGNvbnN0IHF1ZXJ5QnVpbGRlciA9IHRoaXMuX3VzZXJSZXBvLmNyZWF0ZVF1ZXJ5QnVpbGRlcigndScpO1xuXG4gICAgZmlsdGVyLmNyZWF0ZU9yZGVyKHF1ZXJ5QnVpbGRlcik7XG4gICAgZmlsdGVyLmNyZWF0ZVdoZXJlKHF1ZXJ5QnVpbGRlcik7XG5cbiAgICByZXR1cm4gcGFnaW5hdGUocXVlcnlCdWlsZGVyLCB7XG4gICAgICBwYWdlOiBmaWx0ZXIucGFnZSxcbiAgICAgIGxpbWl0OiBmaWx0ZXIubGltaXQsXG4gICAgfSk7XG4gIH1cbiAgYXN5bmMgZmluZE9uZShpZDogc3RyaW5nKSB7XG4gICAgY29uc3QgdXNlciA9IGF3YWl0IHRoaXMuX3VzZXJSZXBvLmZpbmRPbmUoaWQpO1xuXG4gICAgaWYgKCF1c2VyKSB7XG4gICAgICB0aHJvdyBuZXcgRW50aXR5Tm90Rm91bmRFcnJvcihVc2VyLCBpZCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHVzZXI7XG4gIH1cbiAgZmluZE9uZUJ5RW1haWwoZW1haWw6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLl91c2VyUmVwby5maW5kT25lKHtcbiAgICAgIHdoZXJlOiB7XG4gICAgICAgIGVtYWlsLFxuICAgICAgfSxcbiAgICB9KTtcbiAgfVxuICBhc3luYyBmaW5kVXNlckJ5UmVjb3ZlcnlUb2tlbihyZWNvdmVyeVRva2VuOiBzdHJpbmcpIHtcbiAgICBjb25zdCB1c2VyID0gYXdhaXQgdGhpcy5fdXNlclJlcG8uZmluZE9uZSh7XG4gICAgICB3aGVyZToge1xuICAgICAgICByZWNvdmVyeVRva2VuLFxuICAgICAgfSxcbiAgICB9KTtcblxuICAgIGlmICghdXNlcikge1xuICAgICAgdGhyb3cgbmV3IFVucHJvY2Vzc2FibGVFbnRpdHlFeGNlcHRpb24oXG4gICAgICAgICdVc3XDoXJpbyBuw6NvIHNvbGljaXRvdSByZWN1cGVyYcOnw6NvIGRlIHNlbmhhLicsXG4gICAgICApO1xuICAgIH1cblxuICAgIHJldHVybiB1c2VyO1xuICB9XG4gIGFzeW5jIHVwZGF0ZVBhcnRpYWxVc2VyKGlkOiBzdHJpbmcsIHBhcnRpYWxVc2VyOiBQYXJ0aWFsPFVzZXI+KSB7XG4gICAgY29uc3QgdXBkYXRlUmVzdWx0ID0gYXdhaXQgdGhpcy5fdXNlclJlcG8udXBkYXRlKGlkLCBwYXJ0aWFsVXNlcik7XG5cbiAgICBpZiAodXBkYXRlUmVzdWx0LmFmZmVjdGVkID09PSAwKSB7XG4gICAgICB0aHJvdyBuZXcgRW50aXR5Tm90Rm91bmRFcnJvcihVc2VyLCBpZCk7XG4gICAgfVxuICB9XG4gIGFzeW5jIHVwZGF0ZShpZDogc3RyaW5nLCBkdG86IFVwZGF0ZVVzZXJEdG8pIHtcbiAgICBjb25zdCB1cGRhdGVSZXN1bHQgPSBhd2FpdCB0aGlzLl91c2VyUmVwby51cGRhdGUoaWQsIGR0byk7XG5cbiAgICBpZiAodXBkYXRlUmVzdWx0LmFmZmVjdGVkID09PSAwKSB7XG4gICAgICB0aHJvdyBuZXcgRW50aXR5Tm90Rm91bmRFcnJvcihVc2VyLCBpZCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuX3VzZXJSZXBvLmZpbmRPbmUoaWQpO1xuICB9XG4gIGFzeW5jIHJlbW92ZShpZDogc3RyaW5nKSB7XG4gICAgY29uc3QgZGVsZXRlUmVzdWx0ID0gYXdhaXQgdGhpcy5fdXNlclJlcG8uZGVsZXRlKGlkKTtcblxuICAgIGlmIChkZWxldGVSZXN1bHQuYWZmZWN0ZWQgPT09IDApIHtcbiAgICAgIHRocm93IG5ldyBFbnRpdHlOb3RGb3VuZEVycm9yKFVzZXIsIGlkKTtcbiAgICB9XG4gIH1cbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBuZXN0anMtbW9kdWxlcy9tYWlsZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG5lc3Rqcy1tb2R1bGVzL21haWxlci9kaXN0L2FkYXB0ZXJzL2hhbmRsZWJhcnMuYWRhcHRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbmVzdGpzL2NvbW1vblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbmVzdGpzL2NvbmZpZ1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbmVzdGpzL2NvcmVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG5lc3Rqcy9qd3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG5lc3Rqcy9wYXNzcG9ydFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbmVzdGpzL3NlcnZlLXN0YXRpY1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbmVzdGpzL3N3YWdnZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG5lc3Rqcy90eXBlb3JtXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJjcnlwdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjbGFzcy10cmFuc2Zvcm1lclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjbGFzcy12YWxpZGF0b3JcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZGF0ZS1mbnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZmFrZXItYnJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmVzdGpzLXR5cGVvcm0tcGFnaW5hdGVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGFzc3BvcnQtand0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJ4anNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidHlwZW9ybVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0eXBlb3JtLWVuY3J5cHRlZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ1dWlkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBhdGhcIik7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsImltcG9ydCB7XG4gIENsYXNzU2VyaWFsaXplckludGVyY2VwdG9yLFxuICBMb2dnZXIsXG4gIFZhbGlkYXRpb25QaXBlLFxufSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5pbXBvcnQgeyBDb25maWdTZXJ2aWNlIH0gZnJvbSAnQG5lc3Rqcy9jb25maWcnO1xuaW1wb3J0IHsgTmVzdEZhY3RvcnksIFJlZmxlY3RvciB9IGZyb20gJ0BuZXN0anMvY29yZSc7XG5pbXBvcnQgeyBEb2N1bWVudEJ1aWxkZXIsIFN3YWdnZXJNb2R1bGUgfSBmcm9tICdAbmVzdGpzL3N3YWdnZXInO1xuaW1wb3J0IHsgQXBwTW9kdWxlIH0gZnJvbSAnLi9hcHAubW9kdWxlJztcbmltcG9ydCB7IEJhZFJlcXVlc3RFeGNlcHRpb25GaWx0ZXIgfSBmcm9tICcuL2NvbW1vbi9maWx0ZXJzL2JhZC1yZXF1ZXN0LmZpbHRlcic7XG5pbXBvcnQgeyBFbnRpdHlDb25mbGljdEV4Y2VwdGlvbkZpbHRlciB9IGZyb20gJy4vY29tbW9uL2ZpbHRlcnMvZW50aXR5LWNvbmZsaWN0LmZpbHRlcic7XG5pbXBvcnQgeyBFbnRpdHlOb3RGb3VuZEV4Y2VwdGlvbkZpbHRlciB9IGZyb20gJy4vY29tbW9uL2ZpbHRlcnMvZW50aXR5LW5vdC1mb3VuZC5maWx0ZXInO1xuaW1wb3J0IHsgVW5hdXRob3JpemVkRXhjZXB0aW9uRmlsdGVyIH0gZnJvbSAnLi9jb21tb24vZmlsdGVycy91bmF1dGhvcml6ZWQuZmlsdGVyJztcbmltcG9ydCB7IFVucHJvY2Vzc2FibGVFbnRpdHlFeGNlcHRpb25GaWx0ZXIgfSBmcm9tICcuL2NvbW1vbi9maWx0ZXJzL3VucHJvY2Vzc2FibGUtZW50aXR5LmZpbHRlcic7XG5cbmNvbnN0IGJvb3RzdHJhcCA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgbG9nZ2VyID0gbmV3IExvZ2dlcignTWFpbkFwaScpO1xuXG4gIGxvZ2dlci52ZXJib3NlKGBTdGFydGluZyBhcHAg8J+agGApO1xuXG4gIGNvbnN0IGFwcCA9IGF3YWl0IE5lc3RGYWN0b3J5LmNyZWF0ZShBcHBNb2R1bGUsIHtcbiAgICBjb3JzOiB0cnVlLFxuICAgIGxvZ2dlcjogWydkZWJ1ZycsICd2ZXJib3NlJywgJ2Vycm9yJywgJ3dhcm4nXSxcbiAgfSk7XG5cbiAgYXBwLnVzZUdsb2JhbEZpbHRlcnMoXG4gICAgbmV3IEVudGl0eU5vdEZvdW5kRXhjZXB0aW9uRmlsdGVyKCksXG4gICAgbmV3IEVudGl0eUNvbmZsaWN0RXhjZXB0aW9uRmlsdGVyKCksXG4gICAgbmV3IEJhZFJlcXVlc3RFeGNlcHRpb25GaWx0ZXIoKSxcbiAgICBuZXcgVW5wcm9jZXNzYWJsZUVudGl0eUV4Y2VwdGlvbkZpbHRlcigpLFxuICAgIG5ldyBVbmF1dGhvcml6ZWRFeGNlcHRpb25GaWx0ZXIoKSxcbiAgKTtcbiAgYXBwLnVzZUdsb2JhbFBpcGVzKFxuICAgIG5ldyBWYWxpZGF0aW9uUGlwZSh7XG4gICAgICB3aGl0ZWxpc3Q6IHRydWUsXG4gICAgICBmb3JiaWROb25XaGl0ZWxpc3RlZDogdHJ1ZSxcbiAgICAgIHRyYW5zZm9ybTogdHJ1ZSxcbiAgICB9KSxcbiAgKTtcbiAgYXBwLnVzZUdsb2JhbEludGVyY2VwdG9ycyhuZXcgQ2xhc3NTZXJpYWxpemVySW50ZXJjZXB0b3IoYXBwLmdldChSZWZsZWN0b3IpKSk7XG5cbiAgYXBwLnNldEdsb2JhbFByZWZpeCgnL3YxL2FwaScpO1xuXG4gIGNvbnN0IGNvbmZpZyA9IG5ldyBEb2N1bWVudEJ1aWxkZXIoKVxuICAgIC5zZXRUaXRsZSgnV0VCIEFQSSAtIEJvaWxlcnBsYXRlJylcbiAgICAuc2V0RGVzY3JpcHRpb24oJ0FQSSByZXNwb25zw6F2ZWw6IEJvaWxlcnBsYXRlJylcbiAgICAuc2V0VmVyc2lvbignMS4wJylcbiAgICAuYWRkQmVhcmVyQXV0aCgpXG4gICAgLmJ1aWxkKCk7XG5cbiAgY29uc3QgZG9jdW1lbnQgPSBTd2FnZ2VyTW9kdWxlLmNyZWF0ZURvY3VtZW50KGFwcCwgY29uZmlnKTtcbiAgU3dhZ2dlck1vZHVsZS5zZXR1cCgnc3dhZ2dlcicsIGFwcCwgZG9jdW1lbnQpO1xuXG4gIGFwcC5lbmFibGVDb3JzKCk7XG5cbiAgY29uc3QgY29uZmlnU2VydmljZSA9IGFwcC5nZXQoQ29uZmlnU2VydmljZSk7XG4gIGNvbnN0IHBvcnQgPSBjb25maWdTZXJ2aWNlLmdldDxudW1iZXI+KCdhcHAucG9ydCcpO1xuXG4gIGF3YWl0IGFwcC5saXN0ZW4ocG9ydCk7XG4gIGNvbnN0IHVybCA9IGF3YWl0IGFwcC5nZXRVcmwoKTtcblxuICBsb2dnZXIuZGVidWcoYFN3YWdnZXIgYXBwbGljYXRpb24gaXMgcnVubmluZyBvbjogJHt1cmx9L3N3YWdnZXJgKTtcbn07XG5cbmJvb3RzdHJhcCgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9