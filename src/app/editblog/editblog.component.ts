import { Component, OnInit } from '@angular/core';
import {BlogsdataService} from '../blogsdata.service';
import {ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-editblog',
  templateUrl: './editblog.component.html',
  styleUrls: ['./editblog.component.scss']
})
export class EditblogComponent implements OnInit {

  constructor(private blogdata: BlogsdataService, private route: ActivatedRoute) {}
  blogid;
  blog;
  category;
  heading;
  h1;
  h2;
  detail1;
  detail11;
  detail12;
  detailh1;
  detailh11;
  detailh12;
  detailh2;
  detailh21;
  detailh22;
  writer;
  name;
  img;
  ngOnInit() {
        this.route.paramMap.subscribe((param: ParamMap) => {
          this.blogid = parseInt(param.get('id'));
        });
        this.blogdata.getusersblog(this.blogid).subscribe( data => {
        this.blog = data;
        this.name = this.blog.name;
        this.category = this.blog.category;
        this.img = this.blog.img;
        this.heading = this.blog.heading;
        this.h1 = this.blog.h1;
        this.detail1 = this.blog.detail1;
        this.detail11 = this.blog.detail11;
        this.detail12 = this.blog.detail12;
        this.detailh1 = this.blog.detailh1;
        this.detailh11 = this.blog.detailh11;
        this.detailh12 = this.blog.detailh12;
        this.h2 = this.blog.h2;
        this.detailh2 = this.blog.detailh2;
        this.detailh21 = this.blog.detailh21;
        this.detailh22 = this.blog.detailh22;
      });
  }
  editblog()
  {

  }

}
