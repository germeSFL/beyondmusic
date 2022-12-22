import { Component, OnInit } from '@angular/core';
import { TemplateService } from '../../../services/template.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  template = '';
  constructor(private templateService: TemplateService) {}

  ngOnInit() {
    this.template = this.templateService.provideTemplate();
    console.log(this.template);
  }
  onSwitchMode() {}
}
