import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[appRepetir]'
})
export class RepetirDirective {

  constructor(private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef) {

  }

  @Input() set appRepetir(numero: number) {
    for (var i = 0; i < numero; i++) {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    }
  }

}
