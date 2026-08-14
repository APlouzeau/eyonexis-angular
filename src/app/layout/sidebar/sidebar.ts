import { Component } from '@angular/core';
import type { SideBarItems } from '../../shared/interface/side-bar-items';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink],
  templateUrl: './sidebar.html',
  styleUrls: ['./sidebar.css'],
})
export class Sidebar {
  sidebarItems: SideBarItems[] = [
    { id: 1, name: 'Home', link: '/' },
    { id: 2, name: 'About', link: '/about' },
    { id: 3, name: 'Contact', link: '/contact' },
    { id: 4, name: 'Notes', link: '/note/1' },
  ];
}
