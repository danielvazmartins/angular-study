import { ValidatorFn, FormGroup } from '@angular/forms';

export const UserNameEqualPassword: ValidatorFn = (formGroup: FormGroup) => {
    const userName = formGroup.get('userName').value
    const password = formGroup.get('password').value

    if ( userName.trim() + password.trim() ) {
        return userName == password ? { userNameEqualPassword: true } : null
    } else {
        return null
    }

}