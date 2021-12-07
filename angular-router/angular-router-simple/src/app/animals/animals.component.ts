import { Component, OnInit } from '@angular/core';
//import { AngularFirestore } from 'angularfire2/firestore';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.css'],
})
export class AnimalsComponent implements OnInit {
  animals$: any;

  constructor(
    //private afs: AngularFirestore
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    //this.animals$ = this.afs.collection('animals').valueChanges();
    // this.animals$ = this.route.paramMap.pipe(
    //   switchMap((params) => {
    //     const name = params.get('name');
    //     return name;
    //   })
    // );
    this.animals$ = null;
  }
}
