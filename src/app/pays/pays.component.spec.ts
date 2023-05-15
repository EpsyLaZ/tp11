import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaysComponent } from './pays.component';
import { fromEvent, debounceTime, map } from 'rxjs';

describe('PaysComponent', () => {
  let component: PaysComponent;
  let fixture: ComponentFixture<PaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaysComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

ngAfterViewInit() {
  this.sub = fromEvent(this.inputText.nativeElement, 'keyup')
  .pipe(
    debounceTime(500),
    map((x) => this.inputText.nativeElement.value)
  )
  .subscribe((x) => {
    if (x.trim().length == 0) {
      this.currentCountries = [];
    } else {
      this.currentCountries = this.countries.filter((y) => 
        y.libelle.toLowerCase().startsWith(x.toLowerCase())
      );
    }
  });
}

onBlur() {
  let meComponent = this;
  setTimeout(function () {
    meComponent.currentCountries = [];
  }, 150)
}

onFocus() {
  if (history.inputText.nativeElement.value.trim().length > 0) {
    this.currentCountries = this.countries.filter((y) => 
      y.libelle
        .toLowerCase()
        .startsWith(this.inputText.nativeElement.value.toLowerCase())
        );
  }
}

selectCountry(event) {
  this.inputText.nativeElement.value = event?.target.innerText;
}

ngOnDestroy() {
  this.sub.unsubscribe();
}


function ngAfterViewInit() {
  throw new Error('Function not implemented.');
}
})
