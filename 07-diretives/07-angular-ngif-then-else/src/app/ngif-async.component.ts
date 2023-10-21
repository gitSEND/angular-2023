import { Component, OnInit } from '@angular/core';

import { MessageService } from './message.service';

@Component({
  selector: 'app-ngif-async',
  templateUrl: './ngif-async.component.html'
})
export class NgIfAsyncComponent implements OnInit {
  promiseMsg!: Promise<string>;
  constructor(private messageService: MessageService) { }
  ngOnInit(): void {
    this.promiseMsg = this.messageService.getMessageSlowly();
  }
}
