import { AbstractControl } from '@angular/forms';
import { DATE_FORMATS } from '../shared/dateFormats';
import * as moment from 'moment';

export default (control: AbstractControl): { [key: string]: any } | null => {
  if (control.value) {
    const value = control.value;
    const validFormat = (
      moment(value, DATE_FORMATS, true).isValid()
    );

    if (moment(value).isValid()) {
      if (moment(value).isAfter(moment())) {
        return {
          'futureDateError': true
        };
      }
      if (!validFormat) {
        return {
          'dateFormatError': true
        };
      }
      return null;
    }
    return {
      'dateValueError': true
    };
  }
};
