import { atom } from 'recoil';
import data from '../components/data';

export const todoAtom = atom({
  key: 'TodoAtom',
  default: data,
});
