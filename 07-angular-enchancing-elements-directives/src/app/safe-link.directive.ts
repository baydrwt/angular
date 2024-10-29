import { Directive, ElementRef, inject, input } from '@angular/core';

@Directive({
  selector: 'a[appSafeLink]',
  standalone: true,
  host: {
    '(click)': 'onConfirmLeavePage($event)',
  },
})
export class SafeLinkDirective {
  queryParam = input('myapp', { alias: 'appSafeLink' });
  private hostElementRef = inject<ElementRef<HTMLAnchorElement>>(ElementRef);

  constructor() {
    console.log('safe link directive is active');
  }

  onConfirmLeavePage(event: MouseEvent) {
    const wantsToLeavePage = window.confirm('Are you sure want to leave page?');
    const address = this.hostElementRef.nativeElement.href;
    this.hostElementRef.nativeElement.href =
      address + '?from=' + this.queryParam;

    if (wantsToLeavePage) {
      return;
    }

    event.preventDefault();
  }
}
