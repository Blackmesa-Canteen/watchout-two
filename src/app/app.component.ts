import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {WatchOSPluginSevice} from "./watchos-plugin/WatchOSPlugin.service";
import {WatchOsStatus} from "./watchos-plugin/types";
import {IonicModule} from "@ionic/angular";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonicModule, FormsModule],
})
export class AppComponent implements OnInit{
  value: string = '';
  status: WatchOsStatus | null = null;

  constructor(
    private watchOsService: WatchOSPluginSevice,
    private cd: ChangeDetectorRef
  ) {}

  async ngOnInit() {
    await this.watchOsService.subscribe((msg) => {
      this.value = msg?.value ?? this.value;
      this.cd.detectChanges();
    });
    this.status = await this.watchOsService.getState();
  }

  async sendValue() {
    await this.watchOsService.setValue({ value: this.value });
  }

  async checkStatus() {
    this.status = await this.watchOsService.getState();
  }
}
