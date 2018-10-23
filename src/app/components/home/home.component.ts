import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { faDiceD20 } from '@fortawesome/free-solid-svg-icons';

import { EditorService } from '../../providers/editor.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  icons = {
    home: faDiceD20
  };
  config = {};
  text = 'test message';

  constructor(
    private editor: EditorService
  ) { }

  ngOnInit() {
    this.config = this.editor.getConfig()
  }

}
