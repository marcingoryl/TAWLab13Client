import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  public filterText: string = '';

  @Output() name = new EventEmitter<string>();

  constructor(private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.filterText = params['name'];
      this.sendFilter(this.filterText);
    });
  }

  sendFilter($event: string):void{
    this.router.navigate(['/'], {queryParams:{name:this.filterText}});
    this.name.emit(this.filterText);
}

}
