import { useState, useCallback } from 'react';
import { omit } from 'ramda';

// const response = await fetch(url, {
//     method: 'POST', // *GET, POST, PUT, DELETE, etc.
//     mode: 'cors', // no-cors, *cors, same-origin
//     cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
//     credentials: 'same-origin', // include, *same-origin, omit
//     headers: {
//       'Content-Type': 'application/json'
//       // 'Content-Type': 'application/x-www-form-urlencoded',
//     },
//     redirect: 'follow', // manual, *follow, error
//     referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
//     body: JSON.stringify(data) // body data type must match "Content-Type" header
//   });
//   return response.json(); // parses JSON response into native JavaScript objects
// }

type PostResp<T> = {
    data: T | null;
    error?: unknown;
    loading: boolean;
};

type HookReturn<T> = {
    result: PostResp<T>;
    fetch: (url: string, options?: RequestInit) => void;
};

const useFetch = <T>(method: RequestInit['method']): HookReturn<T> => {
    const [data, setData] = useState<PostResp<T>>({
        data: null,
        loading: false,
    });
    const fetchFn = useCallback(
        (url: string, options?: RequestInit) => {
            const headers = new Headers({
                'Content-Type': 'application/json',
            });
            let body = null;

            if (options?.headers) {
                Object.entries(options?.headers).forEach(([key, value]) =>
                    headers.set(key, value)
                );
            }

            if (method !== 'GET' && options?.body) {
                body = options.body;
            }

            setData({ data: null, loading: true });

            fetch(url, {
                method,
                headers,
                body,
                ...omit(['headers', 'body'], options),
            })
                .then((r) => (r.ok ? r.json() : Promise.reject(r)))
                .then((resp) => setData({ data: resp, loading: false }))
                .catch((error) =>
                    setData({ error, data: null, loading: false })
                );
        },
        [method]
    );

    return { result: data, fetch: fetchFn };
};

export const useGet = <T>(): HookReturn<T> => {
    const fetchConfig = useFetch<T>('GET');

    return fetchConfig;
};

declare global {
    interface Window {
        $: any;
    }
}

export const usePost = <T>(): HookReturn<T> => {
    const fetchConfig = useFetch<T>('POST');

    return fetchConfig;
};

// function ajaxGet() {
//     window.$ = window.$ || { $: { ajax: () => {} } };

//     window.$.ajax({
//         url: 'http://54.93.219.249:8050/auth',
//         method: 'POST',
//         //crossDomain: true,
//         headers: {
//             'Content-Type': 'application/json',
//             Authorization:
//                 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJndWVzdCIsImF1dGgiOiJST0xFX0dVRVNUIiwiZXhwIjoxNjI1MDQ4Nzk0fQ.xLo_JxOE7gvvvB2DbkBqok_0LmD9MHLhCW8yyZHH3SIPiMxSoHOrVXwVzxD1he1ieKg1dWIMLv94FSgQKdBy2w',
//         },
//         data: JSON.stringify({
//             email: 'admin@coreteka.com',
//             password:
//                 '+6x+YvUZqcbMf6sQZku0h/phP8HzFPkSsopgfGy07+8VAV3rZ5WN',
//         }),
//         // contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
//         success: function (result: any) {
//             console.log('succes: ' + result);
//         },
//     });
// }
