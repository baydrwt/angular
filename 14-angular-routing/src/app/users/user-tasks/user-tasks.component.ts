import {
  Component,
  computed,
  DestroyRef,
  inject,
  Input,
  input,
  OnInit,
} from '@angular/core';
import { UsersService } from '../users.service';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  ResolveFn,
  RouterLink,
  RouterOutlet,
  RouterStateSnapshot,
} from '@angular/router';

@Component({
  selector: 'app-user-tasks',
  standalone: true,
  templateUrl: './user-tasks.component.html',
  styleUrl: './user-tasks.component.css',
  imports: [RouterOutlet, RouterLink],
})
export class UserTasksComponent {
  userName = input.required<string>();
}

export const resolveUserName: ResolveFn<string> = (
  activedRoute: ActivatedRouteSnapshot,
  routerState: RouterStateSnapshot
) => {
  const userService = inject(UsersService);
  const username =
    userService.users.find((u) => u.id === activedRoute.paramMap.get('userId'))
      ?.name || '';
  return username;
};

export const resolveTitle: ResolveFn<string> = (activedRoute, routerState) => {
  return resolveUserName(activedRoute, routerState) + "'s Task";
};
