import { RolePermissionsType } from 'src/common/types/public';
import { createEnumWithObject } from '../utils/functions';

export enum NodeEnvironments {
  DEVELOPMENT = 'development',
  PRODUCTION = 'production',
}

export enum ResponseMessages {
  INTERNAL_SERVER_ERROR = 'InternalServerError',
  NOT_FOUND = 'NotFound',
  VALIDATION_ERROR = 'ValidationError',
  UNAUTHORIZED = 'Unauthorized',
  BAD_REQUEST = 'BadRequest',
  SUCCESSFULLY_CREATED = 'SuccessfullyCreated',
  FAKE_ERROR_MESSAGE = 'fake-error-message',
  TOO_MANY_REQUESTS = 'Too many requests, please try again later.',
  SOMETHING_WENT_WRONG = 'Something went wrong!',
  SOCKET_AUTH_ERROR = "InvalidToken"
}

export enum APITagValues {
  USER_ACTIONS = 'User Actions',
  AUTH_ACTIONS = 'Auth Actions',
  DEVELOPER_ROUTES = 'Developer Routes',
  SIMCARD = 'Simcard',
}

export enum ControllerNames {
  USER = 'user',
  AUTH = 'auth',
  BROKER = 'broker',
  ADMIN = 'admin',
  UPLOAD_CSV = 'upload-csv',
}

export enum SwaggerConsumes {
  URL_ENCODED = 'application/x-www-form-urlencoded',
  JSON = 'application/json',
  MULTIPART = 'multipart/form-data',
}

export enum CombineDecoratorsKey {
  GET_USER_PROFILE_OK = 'GET_USER_PROFILE_OK',
  FORM = 'FORM',
  GET_NEW_NUMBER_OK = 'GET_NEW_NUMBER_OK',
  CHECK_NUMBER_STATUS = 'CHECK_NUMBER_STATUS',
}

export enum AuthSchemeName {
  Authorization = 'Authorization',
}

export enum SendOTPRateLimiter {
  KEY_PREFIX = 'send-otp',
  POINTS = '1',
  DURATION = '60',
}

export enum CORSHeadersTitles {
  ACCESS_CONTROL_ALLOW_ORIGIN = 'Access-Control-Allow-Origin',
  ACCESS_CONTROL_ALLOW_METHODS = 'Access-Control-Allow-Methods',
  ACCESS_CONTROL_ALLOW_HEADERS = 'Access-Control-Allow-Headers',
}

export enum CORSHeadersValues {
  ACCESS_CONTROL_ALLOW_ORIGIN = '*',
  ACCESS_CONTROL_ALLOW_METHODS = 'GET,PUT,POST,DELETE',
  ACCESS_CONTROL_ALLOW_HEADERS = 'Content-Type, Accept',
  ACCESS_CONTROL_ALLOW_CERTIFICAL = "true"
}

export enum SwaggerConfigData {
  TITLE = 'Bullsfin backend API documentation',
  DESCRIPTION = 'list of all routes and APIs with theme descriptions ',
  BEARER_TYPE = 'http',
  BEARER_SCHEME = 'Bearer',
  BEARER_FORMAT = 'JWT',
  BEARER_PLACE = 'header',
  VERSION = 'v1',
  TAG = 'Bullsfin',
}

export enum MetaDataTitles {
  PERMISSIONS = 'permissions',
}


export enum LoggetTitles {
  SIMCARD_GATEWAY = "SimcardGateway",
} 

export enum STRATEGY_NAMES {
  LOCAL='local',
  OAUTH='oauth',
  JWT='jwt'
}