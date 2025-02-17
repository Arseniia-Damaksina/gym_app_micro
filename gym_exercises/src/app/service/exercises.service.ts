import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import {
  Exercise,
  ExerciseList,
  ExerciseListAPI,
} from '../interfaces/exercise.interface';

@Injectable({
  providedIn: 'root',
})
export class ExercisesService {
  private httpClient = inject(HttpClient);
  private url = 'http://localhost:3000/exercises';

  getExercises(): Observable<ExerciseList> {
    return this.httpClient
      .get<ExerciseListAPI>(`${this.url}`)
      .pipe(map((api) => api?.items));
  }

  addExercises(exercises: Partial<Exercise>): Observable<Exercise> {
    return this.httpClient.post<Exercise>(this.url, exercises);
  }
}
