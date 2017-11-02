import { Component, OnInit } from '@angular/core';
import { CommentService } from '../comment/comment.service'

@Component({
  selector: 'app-comments-form',
  templateUrl: './comments-form.component.html',
  styleUrls: ['./comments-form.component.css']
})
export class CommentsFormComponent implements OnInit {

	constructor(private commentService: CommentService) { }

	ngOnInit() {
	}

	addComment(author, comment) {
		this.commentService.addComment(author, comment)
	}

}
