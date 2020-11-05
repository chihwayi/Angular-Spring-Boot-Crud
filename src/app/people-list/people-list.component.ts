import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { PeopleService } from '../people.service';
import { People } from '../../People';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit {

  people : Observable<People[]>;

  constructor(private peopleService : PeopleService, private router: Router) { }

  ngOnInit(): void {
    this.reloadPeopleData();
  }

  reloadPeopleData(){
    this.people = this.peopleService.getAllPeople();
  }

  personDelete(id:number){
    this.peopleService.deletePerson(id).subscribe(data => {
      console.log(data);
      this.reloadPeopleData()
    }, error => console.log(error));

  }

  personDetails(id:number){
    this.router.navigate(['details', id]);

  }

}
