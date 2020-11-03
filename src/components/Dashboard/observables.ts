import { BehaviorSubject } from 'rxjs';
import { Subject, from } from 'rxjs';
import { switchMap, startWith } from 'rxjs/operators';
import { mapPromiseToAsyncStateObservable, switchMapData } from '../../observables';
import { fetchAllTasks } from '../../api';
import { AllTaskType } from '../../api/types';

export const popupObservable = new BehaviorSubject(false);

export const editPopupObservable = new BehaviorSubject(false);

export const taskActionSubject = new Subject<{ token?: string, searchString?: string }>();

export const searchObservable = new Subject();

const filterSearchObservable = (searchString: string) => switchMapData((data: any) => {
  console.log(data)
  return from([data])
})

const fetchTaskObservable = switchMap(
  ({ token, searchString }: { token: string, searchString?: string }) => {

    return mapPromiseToAsyncStateObservable<AllTaskType>(
      fetchAllTasks(token)
    )
  }
);

const handleObservable = (
  func: any
) => switchMap(
  (data: any) => {
    if (data?.searchString) return func(data)

    return mapPromiseToAsyncStateObservable<AllTaskType>(
      fetchAllTasks(data?.token)
    )
  }
);

const test = handleObservable(
  (data: any) => from([data]).pipe(
    fetchTaskObservable,
    filterSearchObservable(data?.searchString)
  )
);

export const taskObservable = taskActionSubject.pipe(
  test,
  startWith({ loading: true, actionState: "processing" })
);