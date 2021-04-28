import { Component, OnInit } from '@angular/core';
import { PostBridge } from '@kaokei/post-bridge/dist/index.es2015';

import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  isCollapsed = false;

  constructor(public router: Router) {}

  ngOnInit() {
    const router = this.router;
    PostBridge.registerMethods({
      replaceState(route = {} as any) {
        const path = route.path;
        // 这里需要/作为前缀
        const newPath = path[0] === '/' ? path : '/' + path;
        router.navigateByUrl(newPath);
      },
    });

    PostBridge.start();
  }
}
