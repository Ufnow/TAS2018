import { TestBed } from '@angular/core/testing';
import { UsersService } from './users.service';
describe('UsersService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(UsersService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=users.service.spec.js.map