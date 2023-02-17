"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.contactUpdatedController = exports.contactDeleteController = exports.contactListController = exports.contactCreateController = void 0;
const contactCreate_service_1 = __importDefault(require("../../services/contact/contactCreate.service"));
const contactDelete_service_1 = __importDefault(require("../../services/contact/contactDelete.service"));
const contactList_service_1 = __importDefault(require("../../services/contact/contactList.service"));
const contactUpdate_service_1 = __importDefault(require("../../services/contact/contactUpdate.service"));
const contactCreateController = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const { validated } = request;
    const { id } = request.user;
    const result = yield (0, contactCreate_service_1.default)(validated, id);
    return response.status(201).json(result);
});
exports.contactCreateController = contactCreateController;
const contactListController = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = request.user;
    const contacts = yield (0, contactList_service_1.default)(id);
    return response.status(200).json(contacts);
});
exports.contactListController = contactListController;
const contactDeleteController = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = request.params;
    const user_id = request.user.id;
    const result = yield (0, contactDelete_service_1.default)(id, user_id);
    return response.status(200).send();
});
exports.contactDeleteController = contactDeleteController;
const contactUpdatedController = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const id = request.params.id;
    const { body } = request;
    const contact = yield (0, contactUpdate_service_1.default)(id, body);
    return response.status(200).json(contact);
});
exports.contactUpdatedController = contactUpdatedController;
//# sourceMappingURL=contact.controller.js.map