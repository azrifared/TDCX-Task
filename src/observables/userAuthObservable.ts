import { BehaviorSubject, from, Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import Cookies from 'js-cookie';
import { UserData } from '../api/types';
import { ActionStateType } from './index';
import { mapPromiseToAsyncStateObservable, switchMapData } from '.';
import { fetchUserData } from '../api';

export type UserLoad = {
  isLogged?: boolean;
  data?: UserData;
  clearCached?: boolean;
  loading: boolean;
  actionState?: ActionStateType;
  cachedUser?: string;
};

export const userSubject = new BehaviorSubject<UserLoad>({
  isLogged: false,
  data: null,
  clearCached: false,
  loading: false
});

const userDataObservable = ({ cachedUser }: UserLoad) => {
  const userName = cachedUser.replace("%20", " ");

  return mapPromiseToAsyncStateObservable<UserData>(
    fetchUserData('3ac8f7b34f0d1fb7', userName)
  );
};

const cookiesObservable = switchMap((data: UserLoad) => {
  const cachedUser = Cookies.get('userData') ?? null;
  if (data.clearCached) {
    Cookies.remove('userData')
  }
  if (cachedUser === null && data.isLogged) {
    Cookies.set('userData', data?.data?.token?.name);
    return from([data])
  }

  const newData = { ...data, cachedUser }
  return from([newData])
});

const handleObservables = (
  func: (state: UserLoad) => Observable<UserLoad>
) => switchMap((data: UserLoad) => {

  if (data.cachedUser === null || data.clearCached === true) {
    return from([data]);
  }

  return func(data);
});

const constructFetchedData = (state: UserLoad) => from([{
  loading: false,
  data: state.data,
  clearCached: false,
  isLogged: true
}]);


export const userAuthObservable: Observable<UserLoad> = userSubject.pipe(
  cookiesObservable,
  handleObservables(userDataObservable),
  switchMapData(constructFetchedData)
);


