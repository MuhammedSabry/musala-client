import {Observable} from "rxjs";

export interface BaseInteractor<Param, Return> {
    execute(param: Param): Observable<Return>;
}
