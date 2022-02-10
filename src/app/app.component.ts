import { Component } from '@angular/core';

// component - a section that appears on screen
// component - is made up of four files 
// .ts, .html, .css, .spec.ts 

// e.g. for header component - 
// header.component.css  
// header.component.html - also called as template 
// header.component.spec.ts 
// header.component.ts - also called as component   
// these four files together are called as header component 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template: '<p>Some dummy text</p>',
  styleUrls: ['./app.component.css']
  // styles: ['{color:blue}'] 
})
export class AppComponent {

  title = 'sfdc-angular-app';
  myName = 'Vaman Deshmukh';
  myCity = 'Hyderabad';
  mySalary = 10.5;

  fun = () => {
    alert('Hi!');
  }

}



// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'sfdc-angular-app';
// }
