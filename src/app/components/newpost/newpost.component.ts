import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {DataService} from "../../services/data.service";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'newpost',
  templateUrl: './newpost.component.html',
  styleUrls: ['./newpost.component.css']
})
export class NewpostComponent implements OnInit {

  public credentials = {
    title: '',
    image: '',
    text: '',
  };

  constructor(public dataService: DataService, public router: Router, public authService: AuthService) { }

  ngOnInit(): void {
  }

  // do zrobienia
  createPost(){
    this.dataService.createPost(this.credentials).subscribe((result) => {
      return result;
    });
    this.router.navigate(['/blog']);
  }

}
