// import { Directive, Input } from '@angular/core';
// import { Validator, AbstractControl, ValidationErrors } from '@angular/forms';
// import { Subscription } from 'rxjs';

// @Directive({
//   selector: '[compare]'
// })
// export class CompareValidatorDirective implements Validator {
// @Input('compare') controlNameToCompare: string;
//   constructor() { }

// validate(c: AbstractControl): ValidationErrors | null {
//   const controlToCompare = c.root.get(this.controlNameToCompare);
// if(c.value === null || c.value.lenght === 0) {
//   return null;
// }


//   // if(controlToCompare) {
// //   const subscription: Subscription = controlToCompare.valueChanges.subscribe(()=>{
// //     c.updateValueAndValidity();
// //     subscription.unsubscribe();
// //   });
// // }
// //   return controlToCompare && controlToCompare.value !== c.value ? { 'compare': true } : null;
// // }

// } }
