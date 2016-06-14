import memoize from 'lru-memoize';
import { createValidator, required, maxLength, email } from 'utils/validation';

const surveyValidation = createValidator({
  name: [required, maxLength(100)],
  email: [required, email],
  text: [required, maxLength(500)]
});
export default memoize(10)(surveyValidation);
