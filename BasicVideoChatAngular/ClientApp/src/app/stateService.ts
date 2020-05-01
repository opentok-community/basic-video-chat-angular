import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class StateService {
  public token$: string;
  public sessionId$: string;
  public apiKey$: string;
  constructor() { }
}
