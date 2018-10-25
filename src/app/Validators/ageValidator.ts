import { AbstractControl } from '@angular/forms';

export default function (control: AbstractControl) {
  const minAge = 18;
  const maxAge = 65;

  if (control.value) {
    const value = Number(control.value);

    if (!isNaN(value)) {
      if (value < minAge || value > maxAge || Number.isInteger(value) === false) {
        return {
          'invalidAge': true
        };
      }
    } else {
      return {
        'incorrectAge': true
      };
    }
  }
  return null;
}
