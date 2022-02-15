import {Component, OnInit} from '@angular/core';
import {Author} from "../../models/author";
import {AuthorServicesService} from "../../services/author-services.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-add-author',
  templateUrl: './add-author.component.html',
  styleUrls: ['./add-author.component.css']
})
export class AddAuthorComponent implements OnInit {
  genres = [
    'Drama',
    'Fiction',
    'Horror',
    'Sci-fi',
    'Romance',
    'Dystopian Future',
    'Comic Books',
  ];

  selected_genres?: [];

  author: Author = {
    name: '',
    age: 10,
    email: '',
    phone: '',
    genre: [],
    registration: new Date(),
    subauthor:''
  };
  submitted = false;
  all_authors?: Observable<Author[]>;

  constructor(private authorService: AuthorServicesService) {
  }

  ngOnInit(): void {

   this.all_authors =  this.authorService.getAll();

  }

  print(): void {
    console.log(this.selected_genres)
  }

  saveAuthor(): void {
    const data = {
      name: this.author.name,
      age: this.author.age,
      email: this.author.email,
      phone: this.author.phone,
      genre: this.selected_genres,
      registration: this.author.registration,
      subauthor: this.author.subauthor
    };
    console.log(data)

    this.authorService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }

  newAuthor(): void {
    this.submitted = false;
    this.author = {
      name: '',
      age: 0,
      email: '',
      phone: '',
      genre: []
    };
    this.selected_genres=[];
  }

}
