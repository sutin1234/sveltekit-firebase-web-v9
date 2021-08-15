import { fromFetch } from 'rxjs/fetch';
import type { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

export const RxFromFetch = (url: string): Observable<Response> => {
    return fromFetch(url).pipe(switchMap(resp => {
        if (resp.ok) return resp.json()
        return `Err: ${resp.status}`
    }));
}

