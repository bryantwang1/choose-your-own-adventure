import { Component, OnInit } from '@angular/core';
import { Scenario } from './../scenario.model';
import { ScenarioService } from './../scenario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css'],
  providers: [ScenarioService]
})
export class StartComponent implements OnInit {
  startScenario: Scenario;

  constructor(private router: Router, private scenarioService: ScenarioService) { }

  ngOnInit() {
    this.startScenario = this.scenarioService.getStart();
  }


  nextFork(clickedChoice: string) {
    console.log('choice: ' + clickedChoice);
    for(var i=0;i < this.startScenario.choices.length;i++) {
      if(this.startScenario.choices[i] === clickedChoice) {
        this.scenarioService.incrementFork();
        this.router.navigate(['fork', i]);
      }
    }
  }

}
