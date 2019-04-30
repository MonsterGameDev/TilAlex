import { Component, OnInit } from '@angular/core';
import {
    FormGroup,
    FormBuilder,
    Validators,
    AbstractControl
} from '@angular/forms';

@Component({
    selector: 'Home',
    moduleId: module.id,
    templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
    createPSForm: FormGroup;

    constructor(private fb: FormBuilder) {}

    ngOnInit(): void {
        this.createPSForm = this.fb.group({
            psFormPBSNummer: ['', [Validators.required]],
            psFormDebitorGruppe: ['', [Validators.required]],
            psFormKundenummer: [
                '',
                [Validators.required, Validators.maxLength(10)]
            ],
            psFormBeskrivesle: ['', []],
            psFormFraKonto: ['', [Validators.required]]
        });

        const psFormPBSNummerControl = <AbstractControl>(
            this.createPSForm.get('psFormPBSNummer')
        );
        psFormPBSNummerControl.valueChanges.subscribe(() =>
            this.psFormPBSNummerValidityCheck(psFormPBSNummerControl)
        );
    }

    onSubmit() {
        console.log(JSON.stringify(this.createPSForm.value));
    }

    psFormPBSNummerValidityCheck(c: AbstractControl) {
        console.log('Errors: ');
        console.dir(c.errors);
    }
}
