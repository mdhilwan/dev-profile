import { Directive, ElementRef, Renderer2 } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
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
