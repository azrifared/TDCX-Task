import { BehaviorSubject } from 'rxjs'

export const userAuthObservable = new BehaviorSubject({ isLogged: false, userData: null });