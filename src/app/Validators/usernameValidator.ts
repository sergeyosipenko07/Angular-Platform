import { AbstractControl } from '@angular/forms';

export default function (control: AbstractControl): Promise<any> {
  const compareRegExp = /^[A-z](?:[a-z]+)?(?: [A-z](?:[a-z]+)?)?$/;

  return new Promise((resolve) => {
    setTimeout(() => {
      if (!(compareRegExp.test(control.value))) {
        resolve({
          'incorrectName': true
        });
      } else {
        resolve(null);
      }
    }, 3000);
  });
}
