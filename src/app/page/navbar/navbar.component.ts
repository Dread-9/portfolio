import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  ngOnInit(): void {
    const hamburgerMenu = document.getElementById('hamburgerMenu');
    const mobileMenu = document.getElementById('mobileMenu');

    // Si los elementos existen, agrega el event listener
    if (hamburgerMenu && mobileMenu) {
      hamburgerMenu.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden'); 
      });
    }
  }
}