import {User} from './user';
import {Question} from './question';

export class UserAnswer {
  text: string;
  isCorrect: boolean;
  user: User;
  question: Question;
  points: number;
}
