import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngweb';

  // ถ้าประกาศตัวแปร translate แต่ไม่ได้ระบุว่าเป็น private หรือ public จะเรียกใช้ translate ได้แค่ใน scope ของ constructor เท่านั้น
  constructor(translate: TranslateService) {
    translate.setDefaultLang('en');
  }

  onBtnClick() {
    console.log(this.title);
  }
}
