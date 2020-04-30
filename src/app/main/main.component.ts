import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  name:string='yaakov';
  constructor(private activeRouter:ActivatedRoute,
     private router:Router) {
      this.router.navigate([`by-city/${this.name}`],)
      }

  ngOnInit(): void {
  }

}
