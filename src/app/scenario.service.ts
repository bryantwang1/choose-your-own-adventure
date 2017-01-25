import { Injectable } from '@angular/core';
import { Scenario } from './scenario.model';
import { SCENARIOS } from './scenarios';

@Injectable()
export class ScenarioService {
  scenarios: Scenario[];
  static forkCounter: number = 0;

  constructor() { }

  getStart() {
    return SCENARIOS[0][0];
  }

  getScenario(branchNumber: number) {
    return SCENARIOS[ScenarioService.forkCounter][branchNumber];
  }

  incrementFork() {
    ScenarioService.forkCounter++;
    console.log('incrementfork: ' + ScenarioService.forkCounter);
  }

}
