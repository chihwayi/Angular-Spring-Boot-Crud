import { Component, OnInit } from '@angular/core';
import { People } from '../../People';
import { PeopleService } from '../people.service';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-update-person',
  templateUrl: './update-person.component.html',
  styleUrls: ['./update-person.component.css']
})
export class UpdatePersonComponent implements OnInit {

  id : number;
  person : People;
  submitted : boolean;
  constructor(private route : ActivatedRoute, private router : Router, private peopleService : PeopleService) { }

  ngOnInit(): void {
    this.person = new People();
    this.id = this.route.snapshot.params['id'];

    this.peopleService.getPerson(this.id).subscribe(data =>
      {
        console.log(data)
        this.person = data;
      }, error => console.log(error));
  }

  updatePerson(){
    this.peopleService.updatePerson(this.id,this.person).subscribe(data => console.log(data),
    error => console.log(error));

    this.goBackToList();

  }

  onSubmit(){
    this.submitted = true;
    this.updatePerson();
  }

  goBackToList(){
    this.router.navigate(['/person']);
  }

}
