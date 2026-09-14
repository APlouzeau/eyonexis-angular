import { Component } from '@angular/core';
import { Button } from '../../../../../../shared/components/button/button';
import { FormControl, FormGroup } from '@angular/forms';
import { metadata } from '@angular/forms/signals';

@Component({
  imports: [Button],
  selector: 'app-add-bloc',
  styleUrl: './add-bloc.css',
  templateUrl: './add-bloc.html',
})
export class AddBloc {
  HeadingBlock = new FormGroup({
    block_type: new FormControl('Heading'),
    content: new FormControl(''),
  });

  TextBlock = new FormGroup({
    block_type: new FormControl('Text'),
    content: new FormControl(''),
  });

  CodeBlock = new FormGroup({
    block_type: new FormControl('Code'),
    metadata: new FormControl(''),
    content: new FormControl(''),
  });

  tipBlock = new FormGroup({
    block_type: new FormControl('Tip'),
    title: new FormControl(''),
    content: new FormControl(''),
    level: new FormControl(''),
  });
}
