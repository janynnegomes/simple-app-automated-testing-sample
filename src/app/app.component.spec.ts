import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';

const mock={
  title:'Simple App'
}

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Simple App'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual(mock.title);
  });

  it(`should have a list(Map) of tasks`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.tasks).toBeInstanceOf(Map)
    expect(app.allTasks).toBeInstanceOf(Array)
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.toolbar span').textContent).toContain(mock.title);
  });

  
  it('should render a form for new task', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;  
    fixture.detectChanges();

    const compiled = fixture.nativeElement;
    
    expect(compiled.querySelector('#formNewTask input#title')).toBeTruthy()
    expect(compiled.querySelector('#formNewTask textarea#description')).toBeTruthy()
    expect(compiled.querySelector('#formNewTask input#btnSaveTask')).toBeTruthy()
 
  });
  
});
