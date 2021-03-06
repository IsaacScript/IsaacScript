"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DISABLE_IT_FILE = exports.WINDOWS_CODE_PAGE = exports.WATCHER_MOD_SOURCE_PATH = exports.WATCHER_MOD_NAME = exports.MAIN_LUA_SOURCE_PATH = exports.MOD_SOURCE_PATH = exports.TSCONFIG_PATH = exports.CONFIG_FILE_PATH = exports.CONFIG_FILE_NAME = exports.CURRENT_DIRECTORY_NAME = exports.CWD = exports.MOD_DIRECTORY_PATH = exports.BASH_PROFILE_PATH = void 0;
const os_1 = __importDefault(require("os"));
const path_1 = __importDefault(require("path"));
// https://stackoverflow.com/questions/9080085/node-js-find-home-directory-in-platform-agnostic-way
const homeDir = os_1.default.homedir();
// Constants based on homeDir
exports.BASH_PROFILE_PATH = path_1.default.join(homeDir, ".bash_profile");
exports.MOD_DIRECTORY_PATH = path_1.default.join(homeDir, "Documents", "My Games", "Binding of Isaac Afterbirth+ Mods");
// Constants based on CWD
exports.CWD = process.cwd();
exports.CURRENT_DIRECTORY_NAME = path_1.default.basename(exports.CWD);
exports.CONFIG_FILE_NAME = "isaacscript.json";
exports.CONFIG_FILE_PATH = path_1.default.join(exports.CWD, exports.CONFIG_FILE_NAME);
exports.TSCONFIG_PATH = path_1.default.join(exports.CWD, "tsconfig.json");
exports.MOD_SOURCE_PATH = path_1.default.join(exports.CWD, "mod");
exports.MAIN_LUA_SOURCE_PATH = path_1.default.join(exports.MOD_SOURCE_PATH, "main.lua");
// Constants based on __dirname
const REPO_ROOT = path_1.default.join(__dirname, "..", "..");
exports.WATCHER_MOD_NAME = "isaacscript-watcher";
exports.WATCHER_MOD_SOURCE_PATH = path_1.default.join(REPO_ROOT, exports.WATCHER_MOD_NAME);
// Other constants
exports.WINDOWS_CODE_PAGE = "65001";
exports.DISABLE_IT_FILE = "disable.it";
