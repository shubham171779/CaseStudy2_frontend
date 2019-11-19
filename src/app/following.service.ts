import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FollowingService {

  constructor() { }
  isfollowing(bool: boolean) {
    localStorage.setItem('following', String(bool));
    return bool;
  }
  checkfollowing() {
    const following = localStorage.getItem('following');
    return JSON.parse(following);
  }
}
