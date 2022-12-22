import { Injectable } from '@angular/core';

@Injectable()
export class TemplateService {
  cssDarkTemplate = {
    buttonClass: 'menu-button-dark',
    sidenavClass: 'mat-sidenav-dark',
    iconClass: 'menu-icon-dark',
    contentClass: 'content-dark',
  };
  cssLightTemplate = {
    buttonClass: 'menu-button-light',
    sidenavClass: 'mat-sidenav-light',
    iconClass: 'menu-icon-light',
    contentClass: 'content-light',
  };

  currentTemplate = this.cssLightTemplate;

  constructor() {}

  onSwitchTemplate() {
    if (this.currentTemplate == this.cssLightTemplate) {
      this.currentTemplate = this.cssDarkTemplate;
    } else this.currentTemplate = this.cssLightTemplate;
  }

  provideTemplate() {
    this.onSwitchTemplate();
    return this.currentTemplate;
  }
}
