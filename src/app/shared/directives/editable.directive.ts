import {Directive, ElementRef, HostBinding, Input, Renderer2} from '@angular/core';
import {AuthService} from '../services/auth.service';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[editable]'
})
export class EditableDirective {

  constructor(private elemRef: ElementRef,
              private renderer: Renderer2,
              private authService: AuthService) {

    authService.afAuth.authState.subscribe((user) => {
      if (user && authService.isLoggedIn) {
        renderer.addClass(elemRef.nativeElement, 'editable-hover');
      } else {
        renderer.removeClass(elemRef.nativeElement, 'editable-hover');
      }
    });
  }

}
