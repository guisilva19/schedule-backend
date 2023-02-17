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
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = require("../../data-source");
const contact_entity_1 = require("../../entities/contact.entity");
const AppError_1 = require("../../errors/AppError");
const contactCreateService = (validated, id) => __awaiter(void 0, void 0, void 0, function* () {
    const contactRepository = data_source_1.AppDataSource.getRepository(contact_entity_1.Contact);
    const contacts = yield contactRepository.find({
        where: {
            user_id: { id }
        }
    });
    const contactExists = contacts.find(contact => contact.email === validated.email || contact.telephone === validated.telephone);
    if (contactExists) {
        throw new AppError_1.AppError('Contact alrealdy exists', 400);
    }
    const body = Object.assign(Object.assign({}, validated), { user_id: id });
    const contact = contactRepository.create(body);
    yield contactRepository.save(contact);
    return contact;
});
exports.default = contactCreateService;
//# sourceMappingURL=contactCreate.service.js.map