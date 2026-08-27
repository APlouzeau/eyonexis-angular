import { Component, computed, input, output, ChangeDetectionStrategy } from '@angular/core';

type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'caution' | 'theme';

const VARIANT_CLASSES: Record<ButtonVariant, string> = {
  primary: 'bg-sky-600 hover:bg-sky-700 text-white',
  secondary: 'bg-gray-200 hover:bg-gray-300 text-gray-800',
  danger: 'bg-red-600 hover:bg-red-700 text-white',
  caution: 'bg-yellow-500 hover:bg-yellow-600 text-black',
  theme: 'bg-rose-500 hover:bg-red-700 text-white',
};

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./button.css'],
})
export class Button {
  label = input.required<string>();
  variant = input<ButtonVariant>('primary');
  clicked = output<void>();

  classes = computed(
    () => `px-4 py-2 rounded-lg font-medium transition ${VARIANT_CLASSES[this.variant()]}`,
  );
}
