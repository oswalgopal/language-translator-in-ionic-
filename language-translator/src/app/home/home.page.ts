import { Component } from '@angular/core';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';

import {Model} from '../../assets/model';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  Obj: any = new Model();
  json: any;
  constructor(private tts: TextToSpeech) {
    this.json = this.Obj.json;
  }

  Speak(text) {
    this.tts.speak(text)
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }
}
