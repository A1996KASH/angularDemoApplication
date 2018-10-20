import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverName = 'test Server';
  serverCreationstatus = 'No server Created';
  serverCreated = false;
  servers = ['TestServer', 'TestServer2'];
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationstatus = 'server Was Created! name is ' + this.serverName ;
  }
  /* onUpdateServerName(event) {
    this.serverName = event.target.value;
  } */
  ngOnInit() {}
}
