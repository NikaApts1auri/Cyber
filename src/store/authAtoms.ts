import { atom } from 'jotai';

export const isAuthenticatedAtom = atom(!!localStorage.getItem('accessToken'));