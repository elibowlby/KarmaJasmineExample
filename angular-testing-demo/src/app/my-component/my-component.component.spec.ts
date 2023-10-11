import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { MyComponentComponent } from './my-component.component';
import { MyServiceService } from '../my-service.service';

describe('MyComponentComponent', () => {
  let component: MyComponentComponent;
  let fixture: ComponentFixture<MyComponentComponent>;

  let mockService = jasmine.createSpyObj('MyServiceService', ['getMessage']);

  beforeEach(async () => {
    mockService.getMessage.and.returnValue('Mocked Message!');

    TestBed.configureTestingModule({
      declarations: [MyComponentComponent],
      providers: [{ provide: MyServiceService, useValue: mockService }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should display the message from the service', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('div').textContent).toBe('Mocked Message!');
  });
});
