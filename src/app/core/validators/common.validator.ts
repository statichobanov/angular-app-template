import { ValidatorFn, Validators } from '@angular/forms';
import { EMAIL_PATTERN } from '@app/constants';

export const EMAIL_VALIDATORS: ValidatorFn[] = [
  Validators.maxLength(320),
  Validators.pattern(EMAIL_PATTERN)
];
