import { Injectable } from '@angular/core';

@Injectable()
export class TemplateService {
  cssDarkTemplate = '';
  cssLightTemplate = 'adada';

  currentTemplate = this.cssLightTemplate;
  constructor() {}

  onSwitchTemplate() {
    if (this.currentTemplate === this.cssLightTemplate) {
      this.currentTemplate = this.cssDarkTemplate;
    } else this.currentTemplate = this.cssLightTemplate;
  }

  provideTemplate() {
    return this.currentTemplate;
  }
}
