import { Injectable } from '@angular/core';

import { Router, NavigationBehaviorOptions } from '@angular/router';

import { PostBridge } from '@kaokei/post-bridge/dist/index.es2015';

const appName = 'demo-angular';

@Injectable({
  providedIn: 'root',
})
export class PostBridgeService {
  postBridge = window.top === window.self ? null : new PostBridge(window.top);

  constructor(private router: Router) {}

  public navigateByUrl(href: string, options?: NavigationBehaviorOptions) {
    this.router.navigateByUrl(href, options).then(res => {
      if (res) {
        if (this.postBridge) {
          const method =
            options && options.replaceUrl ? 'replaceState' : 'pushState';
          this.postBridge.call(method, {
            appName,
            path: href,
          });
        }
      }
    });
  }
}
