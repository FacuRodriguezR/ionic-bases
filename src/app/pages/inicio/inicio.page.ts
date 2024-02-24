import { Component, OnInit } from '@angular/core';

interface Componente  {
  icon: string;
  name: string;
  redirectTo: string;
}


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  componentes:Componente[] = [
    {
      icon: 'american-football',
      name: 'Action Sheet',
      redirectTo: '/action-sheet'
    },
    {
      icon: 'alert-circle',
      name: 'Alert',
      redirectTo: '/alert'
    },
    {
      icon:'person-circle',
      name: 'Avatar',
      redirectTo: '/avatar'
    },
    {
      icon:'radio-button-on',
      name: 'Button',
      redirectTo: '/button'
    },
    {
      icon:'card',
      name: 'Cards',
      redirectTo: '/cards'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
