import { fromFetch } from 'rxjs/fetch';
import type { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import type { POKE_API } from '../types/Poke';

export const RxFromFetch = (url: string): Observable<Response> => {
    return fromFetch(url);
}

export const getPokeMon = (url: string): Observable<POKE_API> => {
    return RxFromFetch(url).pipe(switchMap(resp => {
        if (resp.ok) return resp.json()
        return `Err: ${resp.status}`
    }));;
}

