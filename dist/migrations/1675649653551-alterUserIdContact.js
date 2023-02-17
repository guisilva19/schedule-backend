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
exports.alterUserIdContact1675649653551 = void 0;
class alterUserIdContact1675649653551 {
    constructor() {
        this.name = 'alterUserIdContact1675649653551';
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "contact" DROP CONSTRAINT "FK_e7e34fa8e409e9146f4729fd0cb"`);
            yield queryRunner.query(`ALTER TABLE "contact" RENAME COLUMN "userId" TO "userIdId"`);
            yield queryRunner.query(`ALTER TABLE "contact" ADD CONSTRAINT "FK_cd17f1482f277115d700ebb6efe" FOREIGN KEY ("userIdId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "contact" DROP CONSTRAINT "FK_cd17f1482f277115d700ebb6efe"`);
            yield queryRunner.query(`ALTER TABLE "contact" RENAME COLUMN "userIdId" TO "userId"`);
            yield queryRunner.query(`ALTER TABLE "contact" ADD CONSTRAINT "FK_e7e34fa8e409e9146f4729fd0cb" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        });
    }
}
exports.alterUserIdContact1675649653551 = alterUserIdContact1675649653551;
//# sourceMappingURL=1675649653551-alterUserIdContact.js.map