import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { first } from 'rxjs';
import { User } from 'src/app/models/User';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-ng-list',
  templateUrl: './ng-list.component.html',
  styleUrls: ['./ng-list.component.scss']
})
export class NgListComponent implements OnInit {
  users!: User[];

    constructor(private userService: UserService,
      private router: Router,
      ) {}

      ngOnInit() {
        this.userService.getAll().subscribe(users => this.users = users);
    }

    deleteUser(id: string) {
        const user = this.users.find(x => x.id === id);
        if (!user) return;
        user.isDeleting = true;
        this.userService.delete(id)
            .pipe(first())
            .subscribe(() => this.users = this.users.filter(x => x.id !== id));
    }
}