import curry from 'lodash/fp/curry';
import {isDate} from "util";

export default curry((date) => {
  if (isDate(date)) {
    return date.toISOString();
  }
  return null;
});
