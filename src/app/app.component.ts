import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  comments = [
	  {
	  	author: 'Clint Eastwood',
	  	comment: 'first comment!',
	  	editable: false
	  },
	  {
	  	author: 'Django',
	  	comment: 'nice work!',
	  	editable: false
	  },
	  {
	  	author: 'Joe Sakic',
	  	comment: 'I would also like to congratulate you!',
	  	editable: false
		}
	];

	author: string;
	comment: string;
	editable: boolean;
	editedAuthor: string;
	editedComment: string;


	postComment(author, comment) {
		this.comments.push({
			author: author,
			comment: comment,
			editable: false
		})
	}

	deleteComment(comment) {
		let index = this.comments.indexOf(comment);
		console.log("Deleting!", index, comment);
		this.comments.splice(index,1);
	}

	editComment(comment) {
		console.log("Editing!", comment);
		comment.editable = !comment.editable;
		this.editedAuthor = comment.author;
		this.editedComment = comment.comment;
	}

	saveComment(comment, editedAuthor, editedComment) {
		let index = this.comments.indexOf(comment);
		console.log(index, editedAuthor, editedComment);
		this.comments[index] = {
			author: editedAuthor,
			comment: editedComment,
			editable: false
		}
	}
}
