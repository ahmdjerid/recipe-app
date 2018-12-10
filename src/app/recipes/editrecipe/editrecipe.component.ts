import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editrecipe',
  templateUrl: './editrecipe.component.html',
  styleUrls: ['./editrecipe.component.css']
})
export class EditrecipeComponent implements OnInit {
  id: number;
  editMode: boolean;

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(item => {
      this.id = item['id'];
      this.editMode = item['id'] != null;
      console.log(this.editMode);
    });

  }

  ngOnInit() {
  }

}
