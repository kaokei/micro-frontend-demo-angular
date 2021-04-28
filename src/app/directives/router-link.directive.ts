import { Directive, Input, HostListener } from '@angular/core';

import { PostBridgeService } from '../services/post-bridge.service';

@Directive({
  selector: '[routerLink]',
})
export class RouterLinkDirective {
  @Input('routerLink')
  href: string; // 输入属性，用于设置元素的跳转链接

  @Input('replaceUrl')
  replaceUrl = false; // 输入属性，用于设置是否替换跳转链接

  constructor(private postBridgeService: PostBridgeService) {}

  @HostListener('click')
  onClick() {
    // 监听宿主元素的点击事件，设置元素背景色
    console.log('host clicked :>> ', this.href, this.replaceUrl, typeof this.replaceUrl);
    this.postBridgeService.navigateByUrl(this.href, {
      replaceUrl: this.replaceUrl,
    });
  }
}
