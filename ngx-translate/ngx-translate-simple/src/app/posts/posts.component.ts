import { TranslateService } from '@ngx-translate/core';
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Constants } from '../common/constant';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  lang: string = localStorage.getItem('lang') || Constants.DEFAULT_LANG;
  posts: any = [];
  quantity: any = [];

  constructor(
    private http: HttpClient,
    private translateService: TranslateService
  ) {}

  ngOnInit(): void {
    //const lang = localStorage.getItem('lang') || Constants.DEFAULT_LANG;

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
    // console.log(post);
    // console.log(this.quantity[post.id]);
    const data = {
      quantity: this.quantity[post.id],
    };

    this.http.post(`http://localhost:5000/posts/${post.id}`, data).subscribe(
      (res: any) => {
        console.log(res);
        console.log(res.message);
        if (res.message) {
          this.translateService
            .get(res.message)
            .subscribe((msg: any) => alert(msg));
        }
      },
      (err) => {
        console.log(err);
        console.log(err.error.message);
        if (err.error.message) {
          this.translateService
            .get(err.error.message)
            .subscribe((msg: any) => alert(msg));
        }
      }
    );
  }
}
