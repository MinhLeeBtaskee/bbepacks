import moment from 'moment-timezone';

import 'moment/locale/id';
import 'moment/locale/ko';
import 'moment/locale/th';
import 'moment/locale/vi';

// List timezone moment
// https://gist.github.com/diogocapela/12c6617fc87607d11fd62d2a4f42b02a

// Fix error timezone when user # GMT+07
// set GMT +07
moment.tz.setDefault('Asia/Jakarta');
moment.locale('en');

export default moment;
