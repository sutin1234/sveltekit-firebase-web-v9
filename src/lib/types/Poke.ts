export interface POKE_API {
    count: number;
    next: string;
    previous: string | null;
    results: POKE_RESULT[];
}

export interface POKE_RESULT {
    name: string;
    url: string;
}