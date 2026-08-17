import { Component, input, Input, signal } from '@angular/core';
import { FolderNode } from './interface/folder-node';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-folders',
  imports: [RouterLink, Folders],
  templateUrl: './folders.html',
  styleUrls: ['./folders.css'],
})
export class Folders {
  @Input() folder!: FolderNode;
  @Input() depth = 0;
  expanded = signal(false);

  toggle() {
    this.expanded.update((v) => !v);
  }
}
