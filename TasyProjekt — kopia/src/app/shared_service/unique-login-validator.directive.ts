import { Directive } from '@angular/core';
import { AsyncValidator, AbstractControl, ValidationErrors, NG_ASYNC_VALIDATORS } from '@angular/forms';
import { UsersService } from './users.service';
import { Observable } from  'rxjs';
import { map } from 'rxjs/operators';

@Directive({
  selector: '[UniqueLogin]',
  providers: [{provide: NG_ASYNC_VALIDATORS, useExisting: UniqueLoginValidatorDirective, multi: true}]
})
export class UniqueLoginValidatorDirective implements AsyncValidator {

  constructor(private usersService: UsersService) { }

validate(c:AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
   return this.usersService.getUserByLogin(c.value).pipe(map(login =>{
     return login ? {'UniqueLogin': true}: null;
    })
   );

}
}

// import { AbstractControl } from '@angular/forms';
// import { UsersService } from '../shared_service/users.service';
// import { map } from 'rxjs/operators';

// export class ValidateLoginNotTaken {
//   static createValidator(usersService: UsersService, userId: string) {
//     return (control: AbstractControl) => {
//       return usersService.checkLoginNotTaken(control.value, userId).pipe(map(data => {
//         return data.loginNotTaken ? null : {loginTaken: true};
//       }));
//     }
//   }
// }
// import { FormControl, AbstractControl } from '@angular/forms';
// import { AbstractClassPart } from '@angular/compiler/src/output/output_ast';

// export function passValidator(control: AbstractControl){
//     if(control && (control.value !== null || control.value !== undefined)){
//         const cnfpassValue = control.value;

//         const passControl = control.root.get('login');
//         if(passControl){
//             const passValue = passControl.value;
//             if(passValue !== cnfpassValue){
//                 return{
//                     isError: true
//                 };
//             }
//         }
//     }
//     return null;
// }