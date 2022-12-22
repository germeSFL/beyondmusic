import { Component, OnInit } from '@angular/core';
import { TemplateService } from '../../../services/template.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  template = null;
  constructor(private templateService: TemplateService) {}

  ngOnInit() {
    this.template = this.templateService.provideTemplate();
  }
  onSwitchMode() {
    this.template = this.templateService.provideTemplate();
  }
}
