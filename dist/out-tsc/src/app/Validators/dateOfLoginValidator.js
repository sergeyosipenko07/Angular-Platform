import { DATE_FORMATS } from '../shared/dateFormats';
import * as moment from 'moment';
export default (function (control) {
    if (control.value) {
        var value = control.value;
        var validFormat = (moment(value, DATE_FORMATS, true).isValid());
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
});
//# sourceMappingURL=dateOfLoginValidator.js.map