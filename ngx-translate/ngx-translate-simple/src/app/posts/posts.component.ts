import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Constants } from '../common/constant';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  posts: any;
  quantity: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // const lang = localStorage.getItem('lang') || Constants.DEFAULT_LANG;

    // const headers = new HttpHeaders({
    //   'Accept-Language': lang,
    // });

    this.http
      .get('http://localhost:5000/posts') //, { headers: headers }
      .subscribe((posts) => {
        this.posts = posts;
        console.log(posts);
      });
  }

  buy(post: any) {
    console.log(post);
    console.log(this.quantity[post.id]);
  }
}
