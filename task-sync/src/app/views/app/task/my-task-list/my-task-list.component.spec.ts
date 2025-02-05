import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTaskListComponent } from './my-task-list.component';

describe('MyTaskListComponent', () => {
  let component: MyTaskListComponent;
  let fixture: ComponentFixture<MyTaskListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyTaskListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyTaskListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
