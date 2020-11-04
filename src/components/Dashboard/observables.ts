import { BehaviorSubject, Observable } from 'rxjs';
import { Subject, from } from 'rxjs';
import * as R from 'ramda';
import { switchMap, startWith } from 'rxjs/operators';
import { mapPromiseToAsyncStateObservable, switchMapData } from '../../observables';
import { fetchAllTasks } from '../../api';
import { AllTaskType } from '../../api/types';
import { fetchDashboardData } from '../../api';

type TaskAction = { token?: string; searchString?: string; }

export const popupObservable = new BehaviorSubject(false);

export const editPopupObservable = new BehaviorSubject(false);

export const taskActionSubject = new Subject<TaskAction>();

export const searchObservable = new Subject();

export const dashboardActionSubject = new Subject();

const customFilter = (val: string) => R.filter(R.compose(R.any(R.contains(val)),R.values));

const filterSearchObservable = (searchString: string) => switchMapData((state: any) => {
  const filteredData = customFilter(searchString)(state?.data?.tasks)
  const newState = R.set(R.lensPath(['data', 'tasks']), filteredData, state);

  return from([newState]);
})

const fetchTaskObservable = switchMap(
  ({ token }: TaskAction) => mapPromiseToAsyncStateObservable<AllTaskType>(
    fetchAllTasks(token)
  )
);

const handleObservable = (
  func: (state: TaskAction) => Observable<any>
) => switchMap(
  (data: TaskAction) => {
    if (data?.searchString) return func(data)

    return mapPromiseToAsyncStateObservable<AllTaskType>(
      fetchAllTasks(data?.token)
    )
  }
);

const combineObservables = handleObservable(
  (data: TaskAction) => from([data]).pipe(
    fetchTaskObservable,
    filterSearchObservable(data?.searchString)
  )
);

export const taskObservable = taskActionSubject.pipe(
  combineObservables,
  startWith({ loading: true, actionState: "processing" })
);


const fetchDashboardObservable = switchMap(
  (token: string) => mapPromiseToAsyncStateObservable<any>(
    fetchDashboardData(token)
  )
);

export const dashboardObservable = dashboardActionSubject.pipe(
  fetchDashboardObservable,
  startWith({ loading: true, actionState: "processing" })
);
