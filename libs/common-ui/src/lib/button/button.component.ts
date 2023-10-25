import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'bank-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() label?: string;
  @Input() size: 'extra-small' | 'small' | 'medium' | 'large' | 'full-width' =
    'medium';
  @Input() color: 'primary' | 'secondary' | 'warn' | 'error' = 'primary';
  @Input() variant: 'contained' | 'outlined' | 'text' = 'contained';
  @Input() type: 'submit' | 'reset' | 'button' = 'button';
  @Input() disabled: boolean = false;

  // loading
  // leadingIcon
  // trailingIcon
  // on Click

  constructor() {}

  ngOnInit(): void {}
}
