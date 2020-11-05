import { Component, OnInit } from '@angular/core';
import { People } from '../../People';
import { ActivatedRoute, Router } from '@angular/router';
import { PeopleListComponent } from '../people-list/people-list.component';
import { PeopleService } from '../people.service';

@Component({
  selector: 'app-person-details',
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.css']
})
export class PersonDetailsComponent implements OnInit {

  id: number;
  person : People;

  constructor(private route: ActivatedRoute,private router: Router, private peopleService: PeopleService) { }

  ngOnInit(): void {
    this.person = new People();
    this.id = this.route.snapshot.params['id'];

    this.peopleService.getPerson(this.id).subscribe(data => {
      console.log(data)
      this.person = data;
    }, error => console.log(error));
  }

  list(){
    this.router.navigate(['person']);
  }

}
