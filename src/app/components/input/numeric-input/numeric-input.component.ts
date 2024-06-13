import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-numeric-input',
  templateUrl: './numeric-input.component.html',
  styleUrls: ['./numeric-input.component.scss']
})
export class NumericInputComponent implements OnInit {
  @Input() control: FormControl;
  @Input() label: string = '';
  @Input() minLength: number = 1;
  @Input() maxLength: number = 50;


  value: string = '';

  ngOnInit(): void {

  }

  onInputChange(event: any) {
    const value = event.target.value;
    const numericValue = value.replace(/[^0-9]/g, ''); // Filtrar solo números
    this.control.setValue(numericValue);

  }

}
