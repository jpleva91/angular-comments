import { Component } from '@angular/core';
import { CommentService } from './comment/comment.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

	constructor(private commentService: CommentService) { }

	ngOnInit() {

	}

}
